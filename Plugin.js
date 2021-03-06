'use strict';

/* global UniPlugin: true */

UniPlugin = function(name) {
    if (!(this instanceof UniPlugin)) {
        throw new Error('UniPlugin must be created with "new" keyword');
    }

    this.name = name;
    this.initialized = false;
    this.registry = {
        templates: {},
        routes: {},
        events: {},
        helpers: {},
        collections: {},
        methods: {},
        publications: {},
        beforeHooks: {},
        afterHooks: {}
    };

    this.constructor.plugins = this.constructor.plugins || [];
    this.constructor.plugins.push(this);

    //console.log('Created new plugin', this.name, this);
};

UniPlugin.init = function (cb) {
    _(this.plugins).each(function (plugin) {
        plugin.init();
    });
    if (_.isFunction(cb)) {
        cb();
    }
};

// We need this to make singular camelCase function name
var _toUpperSingular = function (name) {
    return name[0].toUpperCase() + name.substr(1, name.length - 2);
};

// We need this to make plural camelCase function name
var _toUpperPlural = function (name) {
    return name[0].toUpperCase() + name.substr(1, name.length - 1);
};

// Provides add/remove/get for
// collections, methods, beforeHooks,
// afterHooks, routes, publications,
// events, helpers.

// This methods really just put objects/functions
// into registry object of Plugin.

// All the magic happens in init functions that
// are in other files in this folder.

var mechanisms = [
    'methods',
    'beforeHooks',
    'afterHooks',
    'collections'
];

if(Meteor.isClient){
    mechanisms.push('routes');
} else {
    mechanisms.push('publications');
}

_(mechanisms).each(function (mechanism) {

    var mechanismUpper = _toUpperSingular(mechanism);
    var mechanismUpperPlural = _toUpperPlural(mechanism);

    UniPlugin.prototype['add' + mechanismUpper] = function (name, obj, override) {
        if (this.registry[mechanism][name] && !override) {
            console.log(mechanismUpper + ' ' + name + ' already exists.');
        } else {
            this.registry[mechanism][name] = obj;
        }
    };

    UniPlugin.prototype['add' + mechanismUpperPlural] = function (obj) {
        var self = this;
        _(obj).each(function (prop, name) {
            self['add' + mechanismUpper](name, prop);
        });
    };

    UniPlugin.prototype['remove' + mechanismUpper] = function (name) {
        delete this.registry[mechanism][name];
    };

    UniPlugin.prototype['get' + mechanismUpper] = function (name) {
        return this.registry[mechanism][name];
    };
});

if (Meteor.isClient) {
    _(['events', 'helpers']).each(function (mechanism) {

        var mechanismUpper = _toUpperSingular(mechanism);
        var mechanismUpperPlural = _toUpperPlural(mechanism);

        // addEvent and addHelper functions.
        UniPlugin.prototype['add' + mechanismUpper] = function (template, name, obj) {
            // Because we can override templates, we need to look
            // using getTemplate to find out the right template.
            var actualTemplate = this.getTemplate(template),
                mechanismRegister = this.registry[mechanism];

            mechanismRegister[actualTemplate] = mechanismRegister[actualTemplate] || {};

            if (mechanismRegister[actualTemplate][name]) {
                throw new Error(mechanismUpper + ' ' + name + ' in template ' + template + ' already exists.');
            }

            mechanismRegister[actualTemplate][name] = obj;
        };


        // addHelpers and addEvents functions.
        UniPlugin.prototype['add' + mechanismUpperPlural] = function (template, obj) {
            var self = this;
            _(obj).each(function (prop, name) {
                self['add' + mechanismUpper](template, name, prop);
            });
        };


        // removeEvent and removeHelper functions.
        UniPlugin.prototype['remove' + mechanismUpper] = function (template, name) {
            var actualTemplate = this.getTemplate(template),
                mechanismRegister = this.registry[mechanism];

            mechanismRegister[actualTemplate] = mechanismRegister[actualTemplate] || {};

            delete mechanismRegister[actualTemplate][name];
        };


        // getEvent and getHelper functions.
        UniPlugin.prototype['get' + mechanismUpper] = function (template, name) {
            var actualTemplate = this.getTemplate(template),
                mechanismRegister = this.registry[mechanism];

            if (mechanismRegister[actualTemplate]) {
                return mechanismRegister[actualTemplate][name];
            }
        };
    });
}

_(UniPlugin.prototype).extend({
    inits: [],
    init: function() {
        var plugin = this;
        plugin.initialized = true;
        _(plugin.registry.beforeHooks).each(function(hook) {
            hook.call(plugin);
        });
        _(plugin.inits).each(function(fn) {
            fn.call(plugin);
        });
        _(plugin.registry.afterHooks).each(function(hook) {
            hook.call(plugin);
        });
    }
});
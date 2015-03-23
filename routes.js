'use strict';

UniPlugin.prototype.inits.push(function initRoutes() {
    var plugin = this;
    Router.map(function () {
        var router = this;
        _(plugin.registry.routes).each(function (options, name) {
            options.template = plugin.getTemplate(options.template || name);
            router.route(name, options);
        });
    });
});
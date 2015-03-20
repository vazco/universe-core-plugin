'use strict';

UniPlugin.prototype._getTemplateInstance = function(template){
    var actualTemplate = this.getTemplate(template),
        error;

    if (!Template[actualTemplate]) {
        error = 'Can\'t find template: ' + actualTemplate;

        if (actualTemplate !== template) {
            error += ' that overrides template: ' + template;
        }

        throw new Error(error);
    }

    return Template[actualTemplate];
};

UniPlugin.prototype.inits.push(function initEvents() {
    var self = this;
    _(this.registry.events).each(function (events, template) {
        self._getTemplateInstance(template).events(events);
    });
});

UniPlugin.prototype.inits.push(function initHelpers() {
    var self = this;
    _(this.registry.helpers).each(function (helpers, template) {
        self._getTemplateInstance(template).helpers(helpers);
    });
});
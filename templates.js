_(UniPlugin).extend({
    templates: {},
    getTemplate: function (name) {
        return this.templates[name] || name;
    },
    setTemplate: function (name, newName) {
        return this.templates[name] = newName;
    }
});

_(UniPlugin.prototype).extend({
    getTemplate: function (name) {
        return this.registry.templates[name] || UniPlugin.getTemplate(name);
    },
    setTemplate: function (name, newName) {
        return this.registry.templates[name] = newName;
    }
});

Template.uniTemplate.helpers({
    getTemplate: function () {
        return Template[UniPlugin.getTemplate(this)] || null;
    }
});

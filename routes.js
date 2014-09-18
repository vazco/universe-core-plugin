UniPlugin.prototype.inits.push(function initRoutes() {
    var plugin = this;
    Router.map(function () {
        var router = this;
        _(plugin.registry.routes).each(function (options, name) {
            if (!options.template) {
                options.template = plugin.getTemplate(name);
            }
            router.route(name, options);
        });
    });
});
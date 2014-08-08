Uni.Plugin.prototype.inits.push(function initRoutes() {
    var plugin = this;
    Router.map(function () {
        var router = this;
        _(plugin.registry.routes).each(function (options, name) {
            if (!options.template) {
                options.template = plugin.getTemplate(name);
            }
            if (_.isString(options.path) && options.path.charAt(0) !== '/') {
                options.path = plugin.path + '/' + options.path;
            }
            router.route(name, options);
        });
    });
});
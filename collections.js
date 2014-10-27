UniPlugin.prototype.inits.push(function initCollections() {
    var plugin = this;
    _(this.registry.collections).each(function (options, name) {
        var collection = new UniCollection(name, options);

        // run callback
        if (_.isObject(options) && options.onInit) {
            options.onInit(collection)
        }

        plugin[name] = collection;
    });
});
UniPlugin.prototype.inits.push(function initCollections() {
    var plugin = this;
    _(this.registry.collections).each(function (options, name) {
        var collection = new UniCollection(name, options);

        // run callback
        if (options.cb) {
            options.cb(collection)
        }

        plugin[name] = collection;
    });
});
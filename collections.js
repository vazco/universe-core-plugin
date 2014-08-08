Uni.Plugin.prototype.inits.push(function initCollections() {
    var plugin = this;
    _(this.registry.collections).each(function(options, name) {
        plugin[name] = Uni.createCollection(name, options);
    });
});

UniPlugin.prototype.inits.push(function initCollections() {
    var plugin = this;
    _(this.registry.collections).each(function (options, name) {
        var collection = new Mongo.Collection(name, options);

        if (options.class) {
            // if class option is set, assign collection to class constructor.

            options.class.collection = collection;
            plugin[name] = options.class

        } else {
            // otherwise just make normal Mongo collection.

            plugin[name] = collection;
        }


        // attach collection2 schema
        if (options.schema) {
            collection.attachSchema(options.schema);
        }

        // allow, deny
        if (options.allow) {
            collection.allow(options.allow);
        }

        if (options.deny) {
            collection.deny(options.deny);
        }
    });
});
UniPlugin = {};

// fake functions for autocomplete
// this file in not used in meteor

UniPlugin.prototype.addMethod = function (name, obj) {
};
UniPlugin.prototype.addMethods = function (obj) {
};
UniPlugin.prototype.removeMethod = function (name) {
};
UniPlugin.prototype.getMethod = function (name) {
};

UniPlugin.prototype.addBeforeHook = function (name, obj) {
};
UniPlugin.prototype.addBeforeHooks = function (obj) {
};
UniPlugin.prototype.removeBeforeHook = function (name) {
};
UniPlugin.prototype.getBeforeHook = function (name) {
};

UniPlugin.prototype.addAfterHook = function (name, obj) {
};
UniPlugin.prototype.addAfterHooks = function (obj) {
};
UniPlugin.prototype.removeAfterHook = function (name) {
};
UniPlugin.prototype.getAfterHook = function (name) {
};

UniPlugin.prototype.addCollection = function (name, obj) {
};
UniPlugin.prototype.addCollections = function (obj) {
};
UniPlugin.prototype.removeCollection = function (name) {
};
UniPlugin.prototype.getCollection = function (name) {
};


if (Meteor.isClient) {

    UniPlugin.prototype.addRoute = function (name, obj) {
    };
    UniPlugin.prototype.addRoutes = function (obj) {
    };
    UniPlugin.prototype.removeRoute = function (name) {
    };
    UniPlugin.prototype.getRoute = function (name) {
    };

    UniPlugin.prototype.addEvent = function (template, name, obj) {
    };
    UniPlugin.prototype.addEvents = function (template, obj) {
    };
    UniPlugin.prototype.removeEvent = function (template, name) {
    };
    UniPlugin.prototype.getEvent = function (template, name) {
    };

    UniPlugin.prototype.addHelper = function (template, name, obj) {
    };
    UniPlugin.prototype.addHelpers = function (template, obj) {
    };
    UniPlugin.prototype.removeHelper = function (template, name) {
    };
    UniPlugin.prototype.getHelper = function (template, name) {
    };

} else {
    UniPlugin.prototype.addPublication = function (name, obj) {
    };
    UniPlugin.prototype.addPublications = function (obj) {
    };
    UniPlugin.prototype.removePublication = function (name) {
    };
    UniPlugin.prototype.getPublication = function (name) {
    };
}

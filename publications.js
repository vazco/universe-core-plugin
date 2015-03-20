'use strict';

UniPlugin.prototype.inits.push(function initPublications() {
    _(this.registry.publications).each(function (pubFunction, name) {
        Meteor.publish(name, pubFunction);
    });
});

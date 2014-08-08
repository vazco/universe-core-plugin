Uni.Plugin.prototype.inits.push(function initMethods() {
    Meteor.methods(this.registry.methods);
});
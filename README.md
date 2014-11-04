#Universe Core Plugin

##About
This package provides API to delay some of meteor mechanisms in order to be able to chage it in application code.

## Universe to Meteor translation

```
UniPlugin.addMethods({}) -> Meteor.methods({})

UniPlugin.addCollection('name', {}) -> new Mongo.Collection('name', {})

UniPlugin.addRoute('name', {}) -> Router.route('name', {})

UniPlugin.addEvents('templateName', {}) -> Template.templateName.events({})

UniPlugin.addHelpers('templateName', {}) -> Template.templateName.helpers({})

UniPlugin.addPublication('name', function) -> Meteor.publish('name', function)

```

#Universe Core Plugin

##About
This package provides API to delay some of meteor mechanisms in order to be able to chage it in application code.

## Meteor to Universe translation

```
Meteor.methods({}) -> UniPlugin.addMethods({})
```

```
new Mongo.Collection('name', {}) -> UniPlugin.addCollection('name', {})
```

```
Router.route('name', {}) -> UniPlugin.addRoute('name', {})
```

```
UniPlugin.addEvents('templateName', {}) -> Template.templateName.events({})
```

```
Template.templateName.helpers({}) -> UniPlugin.addHelpers('templateName', {})
```

```
Meteor.publish('name', function) -> UniPlugin.addPublication('name', function)

```
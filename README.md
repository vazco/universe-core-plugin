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
Template.templateName.events({}) -> UniPlugin.addEvents('templateName', {})
```

```
Template.templateName.helpers({}) -> UniPlugin.addHelpers('templateName', {})
```

```
Meteor.publish('name', function) -> UniPlugin.addPublication('name', function)

```

##Examples

###Creating collections

Meteor example:

```
Collection = new Mongo.Collection('Collection');
Collection.allow({
	insert: function(){return true;}
})
```

Universe example:

```
UniPlugin.addCollection('Collection', {
	onInit: function(collection){
		collection.allow({
			insert: function(){return true;}
		})
	}
})
```

### Creating methods and publications (hint: it is exactly the same).

Meteor example:

```
Meteor.methods({
	method: function(){}
});

Meteor.publish('publication', function(){});
```

Universe example:

```
UniPlugin.addMethods({
	method: function(){}
});

UniPlugin.addPublication('publication', function(){});

}
```


### Events, helpers and overriding templates.

Meteor example:

```
Template.templateName.events({
	'click': function(){}
});

Template.templateName.events({
	'helper': function(){}
});
```

Universe example:

```
MyPlugin.addEvents('templateName' {
	'click': function(){}
});

MyPlugin.addHelpers('templateName' {
	'helper': function(){}
});
```

#### Override

If you want to override 'templateName' with 'newTemplate' you need to call setTemplate function on MyPlugin.

```
MyPlugin.setTemplate('templateName', 'newTemplate')

```

Now all events and helpers previously on 'templateName' will now be called on 'newTemplate'.

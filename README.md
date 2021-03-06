<h1 align="center">
    <a href="https://github.com/vazco">vazco</a>/Universe Core Plugin
</h1>

&nbsp;

<h3 align="center">
  -- Abandonware. This package is deprecated! --
</h3>

&nbsp;

Instead using Template overrides module from this package 
you can use [Template Extension](https://atmospherejs.com/aldeed/template-extension)

Other part of this package is unnecessary in Universe Environment

##About
This package provides API to delay some of meteor mechanisms in order to be able to chage it in application code.

## Meteor to Universe translation

```
Meteor.methods({}) -> MyPlugin.addMethods({})
```

```
new Mongo.Collection('name', {}) -> MyPlugin.addCollection('name', {})
```

```
Router.route('name', {}) -> MyPlugin.addRoute('name', {})
```

```
Template.templateName.events({}) -> MyPlugin.addEvents('templateName', {})
```

```
Template.templateName.helpers({}) -> MyPlugin.addHelpers('templateName', {})
```

```
Meteor.publish('name', function) -> MyPlugin.addPublication('name', function)

```

##Examples

###Creating plugin

In package code:
```
MyPlugin = new UniPlugin('myPlugin');

```

In project code (as late as possible):

** This is very important, nothing will work without it**

```
UniPlugin.init()
```

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
MyPlugin.addCollection('Collection', {
	onInit: function(collection){
		collection.allow({
			insert: function(){return true;}
		})
	}
})
```

** Created collections can be later access by ``` MyPlugin.Collection ``` reference **

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
MyPlugin.addMethods({
	method: function(){}
});

MyPlugin.addPublication('publication', function(){});

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

### License

<img src="https://vazco.eu/banner.png" align="right">

**Like every package maintained by [Vazco](https://vazco.eu/), Universe Core Plugin is [MIT licensed](https://github.com/vazco/uniforms/blob/master/LICENSE).**

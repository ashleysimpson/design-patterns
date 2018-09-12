# Creational Patterns

These design patterns focus on the creation of objects in OO programming languages. If you find yourself duplicating code or making many rewrites to code that handles creation of objects then you may want to look into using a creational design pattern to make your life easier.

## Simple Factory

The simple factory is just that, a simple factory that focuses on hiding the instantiation logic of an object behind a call to make function. This function will do the heavy lifting perform the object creation by calling new.

This pattern is useful when you seem to be rewriting the same setup logic over and over again before calling the new function. You then move this logic into the factory class and let the factory create the object for you.

## Factory Method

The factory method takes this simple factory one step further. We now want to have more fine-grained control of the instantiation of objects. The factory method allows you to specify the instantiation of objects in the children of the factory method interface. To do this you create a factory interface that is implemented by the children that build the specific objects you require.

You would use this pattern when you have complex implementation logic or you are not sure of the specific object you will need at runtime and therefore want to contain the instantiation within the specific children of the factory interface.

## Abstract Factory

Again this design pattern takes things a level deeper and now allows you to create factories that construct objects that are related. You have the same factory interface that is implemented by specific child factories but these child factories will build objects that are related in some way. You can then use these objects from the factory and be sure that they can work together.

Use this pattern again when you have complex instantiation logic, and muliple objects created by a factory that are related and you are not sure what type of object will be required at runtime.

## Builder

We have all dealt with the problem where you are building a class and over time you realize that you class requires more and more constructor arguments as the features are added. This problem is known as the telescoping constructor and it should be obvious that the more arguments your constructor requires the more complexity your class has. Now in most cases you class is probably doing to much and should be split but in some cases there isn't much you can do because you do need to allow for substantial configuration. In the latter case you should use the builder pattern to help clean up the arguments in you constructor class.

The builder pattern simply requires that you create some builder class that you will use as the sole argument to your class with the telescoping constructor. The builder will have all the configuration properties on it and you can set these properties in the builder. Then you pass the builder to the class and let the class read the properties and set them in the object.

## Prototype

It can be a real pain to have to instantiate an object and require quite a lot of configuration. Wouldn't it be nice if you could call a method on a class that creates a clone of an object so you don't have to create a new object from scratch? Well this is what this design pattern is all about.

You expose a clone method on your class that takes care of this cloning process for you and it should provide you with a carbon copy of your object. Keep in mind that you will need to copy things correctly and in a deep manner if using JS and also other languages may provide this functionality out of the box.

## Singleton

Finally the last design pattern to cover in the list of creational design patterns is the singleton. Probably the most known pattern and the first one that someone will mention when someone asks them about design patters.

This pattern simply focuses on making sure that only one instance of an object is allow to be created for a running program. With this you can be sure that when you call this instance throughout your program you are getting only the one you expect. This can be useful but take note not to overuse this pattern and create too much dependency on state in your programs because this can be an anti-pattern.

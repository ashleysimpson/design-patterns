# Structural Patterns

Structural design patterns focus on the realizing the relationships between entites. They focus on how objects relate so you can compose objects together or figure out new ways to use existing code without having to rewrite things. You essentially create structures in and around your objects to improve reusability.

## Adapter

The adapter pattern is very well described by the name, you essentially create an adapter for your existing classes so that other classes can use them. It can be costly to rewrite your objects but you may need the underlying functionality. Firstly you decide what your new class interface should be, with this you can implement the interface with what will be your adapter. Then you pass in the old object to the adapter through the constructor. You then implement the classes new interface by calling or utilizing the old class that was passed in. Now your adapter creates a class that has a new interface but also makes use of the old class.

## Bridge

In object orientated programming there is a strong emphasis on inheritance of classes to make use of parent classes and to make things more reusable. However it can sometimes be preferred to compose objects and make it so we don't need to create lots hierarchy between our classes, the bridge pattern is the design pattern that prefers composition over inheritance. The idea is that you may have some class that has some different children and you furthermore want to allow all these children to have different flavours. If you consider that you may have three children and then three types for each child, this hierarchy would mean we would need to implement nine classes. The bridge pattern does away with this requirement by saying that the flavour is some interface that the children will use, they don't care about how it is implemented. You can then create the required hierarchy in the flavours and this would compose the classes. In this instance you only need six implementations.

## Composite

The composite pattern is about implementing your classes in such a way that you can easily use elements interchangeably. It can be useful to take a list of instantiated objects and just call functions on them and not really care about the actual implementation as long as they implement the required functions. With this you can create groups and individuals in tree like structures and then be sure that if you want to get information on the objects then everything will work. Consider an organization that consists of employees that are in different departments. It would be nice to be able to get the salary info of employees based on the department and not necessarily the individuals. The composite pattern says that we have some interface that both the departments and employees implement then we can call those functions and be sure that we get salary info for the organization.

## Decorator

This pattern is another pattern that is explained well by the name. The idea is that you have some base class that has some specific implementation or properties. You want to be able to augment this properties but not change the underlying class so you create decorator classes that perform this augmentation. The decorator class simply implements the base class and exposes all the required functions and for all intents and purposes is the base class, however the difference is that it will before augmentations before calling the base classes function. This pattern is very useful for being about to apply changes quickly and dynamically if required and to keep code reusable and concise.

## Facade

The facade pattern focuses on simplifying some existing class interface without having to update the existing class. The idea is that the existing class is complex to use or simply you want to make it easier to use for some specific purpose, so you put a facade in place that becomes a new class. You create your facade class and then pass in the existing class through the constructor, then you can expose the interface that you want and then call the underlying functions of the existing class. 

## Flyweight

The flyweight pattern is essentially a caching mechanism for classes. The idea is that you want you have some class that is difficult to instantiate or takes resources/time to instantiate so you want to only do this once or not very often. You introduce the flyweight pattern to simply cache this object for the class that is serving requests or handling the interaction. The client will request the resource and when the resource heavy class is created it will be cached inside the serving class. In this example the flyweight will be the class that is cached.

## Proxy

A proxy is essentially a middle man and that is what the proxy pattern introduces in your code. You have some high value class or resource that you don't want clients talking to directly, so you create a proxy class that the client is directed to talk to. The proxy class can have some authentication mechanism built in and if the client is validated then the proxy will communicate with the resource and relay the answers back to the client. You might want to put a proxy in place to separate concerns and also keep your classes lean. Simply create the proxy class and pass in the actual class into the proxy via the constructor, then have your client talk to the proxy and relay messages to actual class.

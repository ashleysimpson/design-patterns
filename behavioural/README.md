# Behavioural Patterns

These patterns are an extension of structural patterns in that they specify the structure and they describe how message passing should be performed between the objects. The idea is that these patterns identify common communication patterns between objects and then realize the patterns.

## Chain of Responsibility

This pattern focuses on the interactions between command objects and handler objects. The handlers are only suitable for certain commands and you need to define a way to figure out which handler to use and this is where the chain of command pops in.

You simply define your handlers in such a way that the handlers are linked in a chain. The client will supply a command to the first handler and this handler will determine if it can handle the command, if not it passes the command onto the next handler in the chain. This will go on until a suitable handler is found, or a default handler is executed. It simply provides a way to find the best object to perform the job.

## Command

The command pattern allows you to decouple client and receiver by encapsulating commands in objects. The commands are then forwarded from the client to the receiver through some invoker.

You can think of the client as a person visiting a restaurant and asking the waiter (the invoker) for a meal (the command) and the waiter bringing this command to the receiver, or executing the command on the receiver. With this the client doesn't need to know any details about the implementation, just needs to instantiate the correct command and pass it along.

## Iterator

The iterator pattern provides a mechanism for decoupling an algorithm from the container it works on by placing an iterator in between. The idea is that the algorithm or client does not need to know about the implementation of the container it is operating on.

Consider the example of a radio and the stations it can be tuned to. The radio tuner is the iterator in which you can tune the frequency up or down while the actual container responsible for emitting sound and changing frequency is the underlying radio hardware. The client simply tunes the radio up and down and doesn't care about how the radio works internally.

## Mediator

A mediator is some third party that sits in between two or more sources and helps with the communication between the sources and this is exactly what the pattern does. You create a mediator object that the sources or colleagues will communicate through so that the colleagues do not need to know about each other's implementation.

Consider two or more users in a chat room. They want to be able to communicate with each other so they access the chat room which is the mediator and send messages to it. The mediator will relay any messages that are sent to it to all the clients that are currently in the chat room.

## Memento

The memento is type of saved state that you create for an object. The idea is that you want to be able to revert to previous states of an object without having to duplicate the object.

You create an object that is the memento of the actual object you are trying to save state on. Then you expose a function on the object that will create mementos when executed. You can then take these mementos and send them back through some other revert function to reset the state of an object. Essentially you are able to revert and rollback changes to an object easily.

## Observer

The observer pattern is one that focuses on an observable and observer interaction. The observable object is one that relays messages to all objects that are currently observing it (the observers). With this you can notify listeners to events that they want to hear about.

Consider the example of customers and a company. The customers will sign up for email notifications when the company releases news or new products. The observer is the customer and the observable is the company that provides the service. The observer pattern is one that would help with this kind of object structure.

## State

Similar to the memento pattern you essentially want to provide state to you objects. However instead of just providing one state snapshot, you want to have your object perform differently depending on the state it is set to.
functions
Consider a text editor, where you can output text in a variety of ways. The state pattern allows you to specify the editor state and with this the editor will output bold text, italic text and so on. You simply have to provide the different state objects and the function on the object that allows you to set the state.

## Strategy

The strategy pattern is one where you want to provide different algorithms to you objects. The algorithm could be some sorting strategy, and these strategies could be better suited to some circumstances and not others. The strategy pattern therefore allows you to decide at runtime which strategy should be used and this can obviously lead to great performance improvements.

Consider using the strategy pattern when you want to encapsulate algorithms in objects and want to be able to decide on which algorithm you want to use at runtime.

## Template Method

This pattern is essentially a way of providing structure to your objects in the form of deciding the order of which functions should be executed during a build step. The template method is this build function and will call the internal functions of the object in some predefined order. You can then leave the instantiation and implemention of the functions to the child classes that extend from the object but also be sure that the functions are fun in some specific order.

An example would be the browser rendering steps for different browsers. Each browser will have its own implementation of the steps but they all must render the html, apply the css, and run the javascript. The template method is the function that would determine this order of execution.

## Visitor

The visitor pattern is an interesting one, you essentially create some accept function on your object and what this allows you to do is provide extended functionality to your objects without having to modify the object at all. This pattern is a way to conform to the open closed principle.

You implement the pattern by exposing the accept function that will take as an argument the actual visitor object. Then in the implementation of the accept function you will call the visit method of the visitor object and this will then run the visitors functionality. You can therefore add whatever you want to your classes with ease. Consider using this pattern when you want to extend the functionality of objects you have defined without requiring you to change the actual implementation of your object.

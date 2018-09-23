## Factory Method

**Factory Method** is a creational design pattern which solves the problem of creating product objects without specifying their concrete classes.

In this example we use the *factory method* to create shipments with different types of transports. The classes related to the *products* can be found in the `trasport` directory. `TransportInterface` is the *product interface* while all the different kinds of transport are the *concrete products* implementations.

The `factory` directory contains all the classes related to the *creators*. The abstract class `Shipment` has the role of the *creator* and while the different types of shipments are the implementation of the *concrete creators*.

### Usage

#### Compile the project
```
tsc
```
#### Run `demo.js`
```
node build/demo.js
```


### References

* [Factory Method - Refactoring Guru](https://refactoring.guru/design-patterns/factory-method)

## Abstract Factory

**Abstract Factory** is a creational design pattern, which solves the problem of creating entire product families without specifying their concrete classes.

In this example, the *Abstract Factory* pattern has been used to simulate the creation of UIs with different themes. In particular, every theme will need the same UI components, such as dialogs and buttons (`products`). For this reason, both `DarkTheme` and `LightTheme` expand `ThemeFactory` and they respectively handle the creation of dark/light buttons and dialogs.

In `Application`, the user is only required to indicate which kind of theme is needed. The implementation of the different themes will handle the creation of the UI components based on the theme selected.

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

* [Abstract Factory - Refactoring Guru](https://refactoring.guru/design-patterns/abstract-factory)
* [Design Patterns: Abstract Factory - Software Engineering 101](https://medium.com/software-engineering-101/design-patterns-abstract-factory-39a22985bdbf)

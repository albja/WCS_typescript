var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.tellMyName = function () {
        console.log("I am ".concat(this.name));
    };
    Person.prototype.tellMyAge = function () {
        console.log("I am ".concat(this.age, " years old"));
    };
    return Person;
}());
var Person1 = new Person('John', 40);
var Person2 = new Person('Mary', 35);
Person1.tellMyName();
Person1.tellMyAge();
Person2.tellMyName();
Person2.tellMyAge();
//I am <name> et I am <age> years old  "John" et 40, "Mary" et 35,fezfezf

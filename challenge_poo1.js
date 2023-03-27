var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.tellMyName = function () {
        return this.name;
    };
    Person.prototype.tellMyAge = function () {
        return this.age;
    };
    Person.prototype.tell = function () {
        console.log("I am ".concat(this.name, " and I am ").concat(this.age));
    };
    return Person;
}());
var Person1 = new Person('John', 40);
var Person2 = new Person('Mary', 35);
//I am <name> et I am <age> years old  "John" et 40, "Mary" et 35,

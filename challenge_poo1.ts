class Person {
    private name : string;
    private age: number

constructor(name: string, age:number) {
    this.name = name;
    this.age= age;
}
tellMyName(): string {
    return this.name
}
tellMyAge(): number {
    return this.age
}
tell(): void {
    console.log(`I am ${this.name} and I am ${this.age}`);
}

}

const Person1 = new Person('John',40);
const Person2 = new Person('Mary' ,35);

//I am <name> et I am <age> years old  "John" et 40, "Mary" et 35,
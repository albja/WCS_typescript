class Person {
    private name : string;
    private age: number

constructor(name: string, age:number) {
    this.name = name;
    this.age= age;
}
tellMyName(): void {
    console.log(`I am ${this.name}`)
}
tellMyAge(): void {
    console.log(`I am ${this.age} years old`)
}

}

const Person1 = new Person('John',40);
const Person2 = new Person('Mary' ,35);
Person1.tellMyName()
Person1.tellMyAge()
Person2.tellMyName()
Person2.tellMyAge()

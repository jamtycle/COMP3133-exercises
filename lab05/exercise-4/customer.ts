export class Customer {
    constructor(firstName: string, lastName: string, age: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
     }

    private firstName: string;
    private lastName: string;
    private age: number;

    public greeter() {
        console.log(`Hello ${this.firstName} ${this.lastName}`);
    }

    public getAge() {
        return this.age;
    }
}
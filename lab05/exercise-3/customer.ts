class Customer {
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
     }

    private firstName: string;
    private lastName: string;

    public greeter() {
        console.log(`Hello ${this.firstName} ${this.lastName}`);
    }
}

let customer = new Customer("John", "Smith");
customer.greeter();

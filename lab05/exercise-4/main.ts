import { Customer } from "./customer";

let customer = new Customer("John", "Smith", 24);
customer.greeter();

console.log(`Age: ${customer.getAge()}`);
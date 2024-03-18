// var greeter = function (name: string) {
//     console.log("Hello " + name);
// }
// greeter("John Smith");
var greeter = function (firstName, lastName) {
    console.log("Hello ".concat(firstName, " ").concat(lastName));
};
greeter("John", "Smith");

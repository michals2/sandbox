// function greeter(person: string) {
//   return "Hello, " + person;
// }
function greeter(person) {
    return "Hi " + person.firstName + " " + person.lastName;
}
var user = { firstName: "1", lastName: "Michals" };
console.log(greeter(user));

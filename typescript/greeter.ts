// function greeter(person: string) {
//   return "Hello, " + person;
// }

interface Person {
  firstName: string,
  lastName: string
}

function greeter(person: Person) {
  return `Hi ${person.firstName} ${person.lastName}`
}

var user = {firstName: "1", lastName: "Michals"};

console.log(greeter(user));
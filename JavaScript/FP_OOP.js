/**
 * OOP approach
*/
class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }
  changeSalary(amt) {
    this.salary += amt;
  }
  description() {
    return `${this.name} makes ${this.salary}`;
  }
}

const employees1 = [
  new Employee("Bob", 100000.0),
  new Employee("Jane", 125000.0)
];

console.log(employees1);
employees1.forEach(emp => emp.changeSalary(10000.0));
console.log(employees1);

/**
 * FP approach
*/
let employees2 = [["Bob", 100000.0], ["Jane", 125000.0]];

function changeSalary(emp, amt) {
  const updatedEmp = emp.slice();
  updatedEmp[1] += amt;
  return updatedEmp;
}

function changeSalaries(empArr, amt) {
  return empArr.map(emp => changeSalary(emp, amt));
}

console.log(employees2);
employees2[1] = changeSalary(employees2[1], 10000);
console.log(employees2);
employees2 = changeSalaries(employees2, 20000);
console.log(employees2);

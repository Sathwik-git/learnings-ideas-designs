type User = {
  name: string;
  age: number;
};

function greetUser(user: User) {
  console.log(user);
}

greetUser({ name: "sathwik", age: 10 });

/* interface Vs type
implementing interface as a class

types - union | intersection ??
union => stringOrNumber
type stringOrNumber = string | number
let age:stringOrNumber = "1" (correct)
let age:stringOrNumber = 1  (correct)

intersection => student & intern 
type employee = student & intern     

*/
//union
type age = string | number; 

function checkType(age: age) {}

type student = {
  name: string;
  age: number;
};

type intern = {
  salary: number;
  dateofJoining: Date;
};
//intersection
type employee = student & intern;

const e1: employee = {
  name: "sathwik",
  age: 10,
  salary: 100000,
  dateofJoining: new Date("2005-08-10"),
};

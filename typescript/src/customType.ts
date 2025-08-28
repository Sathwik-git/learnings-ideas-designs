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

//interfaces implementation

interface person {
  name: string;
  age: number;
}

class Employe implements person {
  //can add extra things
  name: string;
  age: number;

  constructor(n: string, a: number) {
    this.age = a;
    this.name = n;
  }
}

const e2 = new Employe("sathwik", 2);

console.log(e2.name);
console.log(e2.age);

/* diff btw interface and abstract class 

Use abstract class when you want to share common logic or default method implementations.

Use interface when you only want to enforce a shape (structure) without implementation.

*/

abstract class Student {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  abstract greet():  void;
}

class S1 extends Student {
  constructor(public name: string, public age: number) {
    super(name,age)
  }
  greet(): void {
    console.log("hello")
  };
}

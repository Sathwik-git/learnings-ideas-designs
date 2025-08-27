type User = {
  name: string;
  age: number;
};

function greetUser(user: User) {
  console.log(user);
}

greetUser({ name: "sathwik", age: 10 });

enum Direction {
  Up, //0   Up=1 or Up ="up"
  Down, //1
  Left, //2
  Right, //3
}

function doSomething(keyPressed: Direction) {
  if (keyPressed == Direction.Up) {
  }
}

doSomething(Direction.Up);

//Generics

type Input = string | number;

function gen(input: Input[]) {
  return input[0];
}

// const value = gen([2,"nani",1])
// console.log(value.toUpperCase())  issue

function gene<T>(arg:T[]){
return arg[0];
}

const value = gene<string>(["sathwik"])
const value1 = gene<number>([1,2,3])
console.log(value,value1)
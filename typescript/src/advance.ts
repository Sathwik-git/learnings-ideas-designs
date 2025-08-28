//pick
interface user {
  id: string;
  name: string;
  email: string;
  age: number;
  password: string;
}

type updateUser = Pick<user, "age" | "id">;

function updateUser(user: updateUser) {}

//partial
type updateUserOptional = Partial<updateUser>;

//readOnly
type User = {
  readonly name: string;
  age: number;
};

const obj: Readonly<User> = { //make complete object readonly
  name: "sathwik",
  age: 21,
};

// obj.name = "jithu"; it gives error
// obj.age = 22 still it gives error
console.log(obj);


//Record and Map

//Record gives cleaner syntax type to object
type User1 = Record<string,{age:number,name:string}>
const user1:User1 = {
  "@code":{
    age:10,
    name:"sathwik"
  }
}

//Map
// const users = new Map()   in js
// users.set("@code",{age:10,name:"sathwik"})  users.get("@code")

//in ts
const user = new Map<string,User>()
user.set("@hello",{name:"bjsbd",age:22})

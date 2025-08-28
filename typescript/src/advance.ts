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


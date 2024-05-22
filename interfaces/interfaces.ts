interface C {
  name: string;
  age: number;
  email: string;
  phoneNumber: number;
  nationality?: string; // "?" makes it opcional
}

let person = C;
let person2 = C;

interface Ca extends C {
  account: number;
  cpf: number;
  //method
  openAccount(): boolean;
}

let list: [string, number, string] = ["string 01", 1, "string 02"];

console.log(list);

let list1: [nome: string, sobrenome: string, idade: number, email: string];

list1 = ["Giovanni", "Bernardo", 18, "contact@giovannibernardo.com.br"];

console.log(list1);

//

let list2: [string, number] = ["Bill Gates", 1];

list2.push(
  "Steve Jobs",
  2,
  "Jeff Bezos",
  3,
  "Elon Musk",
  4,
  "Mark Zukerberg",
  5
);

console.log(list2);
console.log(list2[0]);
console.log(list2[1]);

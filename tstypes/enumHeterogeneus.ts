export enum Heterogeneous {
  Segunda = "Segunda-feira",
  Terca = 2,
  Quarta = "Quarta-feira",
  Quinta = 4,
  Sexta = "Sexta-feira",
  Sabado = 6,
  Domingo = "Domingo",
}

// metodos de acesso ->

console.log(Heterogeneous.Segunda);
console.log(Heterogeneous["Segunda"]);

console.log(Heterogeneous["Terca"]);
console.log(Heterogeneous[2]);

console.log(Heterogeneous["Quarta"]);
console.log(Heterogeneous["Quinta"]);
console.log(Heterogeneous["Sexta"]);
console.log(Heterogeneous["Sabado"]);
console.log(Heterogeneous["Domingo"]);

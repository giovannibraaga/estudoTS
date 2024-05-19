export enum diaDaSemana {
  Domingo = 0,
  Segunda = 1,
  Terca = 2,
  Quarta = 3,
  Quinta = 4,
  Sexta = 5,
  Sabado = 6,
}

//

export enum diasDaSemana {
  Segunda,
  Terca,
  Quarta,
  Quinta,
  Sexta,
  Sabado,
  Domingo,
}

export enum diasDaSemana2 {
  Segunda = 18,
  Terca,
  Quarta,
  Quinta,
  Sexta,
  Sabado,
  Domingo,
}

// formas de acesso ->

let dia: string = diaDaSemana[1];
let diaNumero: number = diaDaSemana["Segunda"];
let diaString: number = diaDaSemana["Terca"];

console.log(dia + " | " + diaNumero + " | " + diaString);

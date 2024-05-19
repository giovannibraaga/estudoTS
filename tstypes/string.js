"use strict";
let color = "Verde";
color = "Vermelho";
// template string
let nome = "Giovanni Bernardo";
let idade = 18;
let sentence = `Olá, meu nome é ${nome}, eu tenho ${idade} anos`;
console.log(sentence);
console.log(sentence.length);
console.log(sentence.indexOf("nome"));
console.log(sentence.indexOf("idade")); /* retorna -1 porque 'idade' e uma variavel, nao um valor dentro da string. */
console.log(sentence.indexOf("macaco")); /* -1 significa que não existe. */

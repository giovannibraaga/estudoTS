"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.diasDaSemana2 = exports.diasDaSemana = exports.diaDaSemana = void 0;
var diaDaSemana;
(function (diaDaSemana) {
    diaDaSemana[diaDaSemana["Domingo"] = 0] = "Domingo";
    diaDaSemana[diaDaSemana["Segunda"] = 1] = "Segunda";
    diaDaSemana[diaDaSemana["Terca"] = 2] = "Terca";
    diaDaSemana[diaDaSemana["Quarta"] = 3] = "Quarta";
    diaDaSemana[diaDaSemana["Quinta"] = 4] = "Quinta";
    diaDaSemana[diaDaSemana["Sexta"] = 5] = "Sexta";
    diaDaSemana[diaDaSemana["Sabado"] = 6] = "Sabado";
})(diaDaSemana || (exports.diaDaSemana = diaDaSemana = {}));
//
var diasDaSemana;
(function (diasDaSemana) {
    diasDaSemana[diasDaSemana["Segunda"] = 0] = "Segunda";
    diasDaSemana[diasDaSemana["Terca"] = 1] = "Terca";
    diasDaSemana[diasDaSemana["Quarta"] = 2] = "Quarta";
    diasDaSemana[diasDaSemana["Quinta"] = 3] = "Quinta";
    diasDaSemana[diasDaSemana["Sexta"] = 4] = "Sexta";
    diasDaSemana[diasDaSemana["Sabado"] = 5] = "Sabado";
    diasDaSemana[diasDaSemana["Domingo"] = 6] = "Domingo";
})(diasDaSemana || (exports.diasDaSemana = diasDaSemana = {}));
var diasDaSemana2;
(function (diasDaSemana2) {
    diasDaSemana2[diasDaSemana2["Segunda"] = 18] = "Segunda";
    diasDaSemana2[diasDaSemana2["Terca"] = 19] = "Terca";
    diasDaSemana2[diasDaSemana2["Quarta"] = 20] = "Quarta";
    diasDaSemana2[diasDaSemana2["Quinta"] = 21] = "Quinta";
    diasDaSemana2[diasDaSemana2["Sexta"] = 22] = "Sexta";
    diasDaSemana2[diasDaSemana2["Sabado"] = 23] = "Sabado";
    diasDaSemana2[diasDaSemana2["Domingo"] = 24] = "Domingo";
})(diasDaSemana2 || (exports.diasDaSemana2 = diasDaSemana2 = {}));
let dia = diaDaSemana[1];
let diaNumero = diaDaSemana["Segunda"];
let diaString = diaDaSemana["Terca"];
console.log(dia + " | " + diaNumero + " | " + diaString);

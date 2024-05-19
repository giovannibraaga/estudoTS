"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.diasDaSemana = void 0;
var diasDaSemana;
(function (diasDaSemana) {
    diasDaSemana["Segunda"] = "Segunda-feira";
    diasDaSemana["Terca"] = "Ter\u00E7a-feira";
    diasDaSemana["Quarta"] = "Quarta-feira";
    diasDaSemana["Quinta"] = "Quinta-feira";
    diasDaSemana["Sexta"] = "Sexta-feira";
    diasDaSemana["Sabado"] = "S\u00E1bado";
    diasDaSemana["Domingo"] = "Domingo";
})(diasDaSemana || (exports.diasDaSemana = diasDaSemana = {}));
// formas de acesso ->
console.log(diasDaSemana.Domingo);
console.log(diasDaSemana["Sabado"]);

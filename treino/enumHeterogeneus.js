"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Heterogeneous = void 0;
var Heterogeneous;
(function (Heterogeneous) {
    Heterogeneous["Segunda"] = "Segunda-feira";
    Heterogeneous[Heterogeneous["Terca"] = 2] = "Terca";
    Heterogeneous["Quarta"] = "Quarta-feira";
    Heterogeneous[Heterogeneous["Quinta"] = 4] = "Quinta";
    Heterogeneous["Sexta"] = "Sexta-feira";
    Heterogeneous[Heterogeneous["Sabado"] = 6] = "Sabado";
    Heterogeneous["Domingo"] = "Domingo";
})(Heterogeneous || (exports.Heterogeneous = Heterogeneous = {}));
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

"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
function calcularPotencia(base, exponente) {
    var aux;
    var salida;
    salida = base;
    for (aux = 1; aux < exponente; aux++) {
        salida = salida * base;
    }
    return (salida);
}
var base = rls.questionFloat("Ingrese la base del numero: ");
var exp = rls.questionFloat("Ingrese el exponente del numero: ");
if (exp >= 0) {
    var resultado = void 0;
    if (exp == 0)
        resultado = 1;
    else
        resultado = calcularPotencia(base, exp);
    console.log("el resultado de la potencia es:", resultado);
}
else
    console.log("No se admiten exponentes menores a cero..");

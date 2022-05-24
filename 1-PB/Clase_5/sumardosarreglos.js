"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
function mostrarArreglo(vector) {
    var salida = "";
    for (i = 0; i < (vector.length); i++) {
        salida += vector[i] + " ";
    }
    return salida;
}
var v1 = new Array(6);
var v2 = new Array(6);
var vSuma = new Array(6);
var i = 0;
for (i; i < (v1.length); i++) {
    v1[i] = rls.questionFloat("Ingrese un valor numerico para el arreglo 1 en la posicion ".concat(i, ": "));
    v2[i] = rls.questionFloat("Ingrese un valor numerico para el arreglo 2 en la posicion ".concat(i, ": "));
    vSuma[i] = v1[i] + v2[i]; // Acumulo en el vector suma, la suma de los dos arreglos en esa posicion
}
console.log("Arreglo suma < ".concat(mostrarArreglo(vSuma), ">"));

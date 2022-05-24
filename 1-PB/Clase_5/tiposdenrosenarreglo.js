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
var tamaño = rls.questionFloat("Ingrese la dimension del arreglo: ");
var num = new Array(tamaño); //Creo el arreglo de dimensiones ingresadas​ por el usuario
var i = 0;
var cantPositivos = 0;
var cantNegativos = 0;
var cantCeros = 0;
for (i; i < (num.length); i++) {
    num[i] = rls.questionFloat("Ingrese un valor numerico al arreglo en la posicion ".concat(i, ": "));
    if (num[i] > 0)
        cantPositivos++;
    else if (num[i] < 0)
        cantNegativos++;
    else
        cantCeros++;
}
console.log("Arreglo  < ".concat(mostrarArreglo(num), ">"));
console.log("Cantidad de Positivos: ".concat(cantPositivos, "\nCantidad de Negativos: ").concat(cantNegativos, "\nCantidad de Ceros: ").concat(cantCeros));

"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
var tamaño = rls.questionFloat("Ingrese la dimension del arreglo: ");
var num = new Array(tamaño); //Creo el arreglo de dimensiones ingresadas​ por el usuario
var i = 0;
var sumaArreglo = 0;
for (i; i < (num.length); i++) {
    num[i] = rls.questionFloat("Ingrese un valor numerico al arreglo en la posicion ".concat(i, ": "));
    sumaArreglo += num[i];
}
console.log("La suma de los numeros ingresados al arreglo es: ".concat(sumaArreglo));

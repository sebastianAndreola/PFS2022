"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
function mostrarArreglo(vector) {
    var salida = "";
    for (i = 0; i < (vector.length); i++) {
        salida += vector[i] + " ";
    }
    return salida;
    //console.log(`Arreglo < ${salida}>`);   
}
var tamaño;
tamaño = rls.questionFloat("Ingrese la dimension del arreglo: ");
var arreglo = new Array(tamaño); //Creo el arreglo de dimensiones ingresadas​ por el usuario
var arregloInvertido = new Array(tamaño); //Creo el arreglo de dimensiones ingresadas​ por el usuario para invertirlo
var i = 0;
for (i; i < (arreglo.length); i++) {
    arreglo[i] = rls.questionFloat("Ingrese un valor numerico al arreglo en la posicion ".concat(i, ": "));
    arregloInvertido[tamaño - 1 - i] = arreglo[i]; //Voy guardando de forma invertida en el arreglo Invertido
}
console.log("Arreglo Original  < ".concat(mostrarArreglo(arreglo), ">"));
console.log("Arreglo Invertido < ".concat(mostrarArreglo(arregloInvertido), ">"));

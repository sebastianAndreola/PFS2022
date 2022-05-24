"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
function esMultiplo(nro1, nro2) {
    return ((nro1 % nro2 == 0));
}
function cantidadDeDivisores(nro1) {
    var cantDeDivisores;
    cantDeDivisores = 0;
    var contador;
    for (contador = 1; contador <= nro1; contador++) {
        if (esMultiplo(nro1, contador))
            cantDeDivisores++;
    }
    return (cantDeDivisores);
}
var nroEntrada;
nroEntrada = rls.questionFloat("Ingrese un numero: ");
console.log("El numero", nroEntrada, "tiene", cantidadDeDivisores(nroEntrada), "divisores.");

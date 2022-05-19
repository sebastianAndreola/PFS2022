"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
var nro1 = rls.questionFloat("Ingrese un primer numero entero: ");
var nro2 = rls.questionFloat("Ingrese un segundo numero entero: ");
var sumaEntreNros = 0;
var contador;
if (nro1 > nro2) {
    for (contador = nro2; contador <= nro1; contador++)
        sumaEntreNros += contador;
}
else
    for (contador = nro1; contador <= nro2; contador++)
        sumaEntreNros += contador;
console.log("La suma entre los numeros ".concat(nro1, " y ").concat(nro2, " es:"), sumaEntreNros);

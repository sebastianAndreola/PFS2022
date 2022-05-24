"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
function esMultiplo(nro1, nro2) {
    return ((nro1 % nro2 == 0));
}
var nr1 = rls.questionFloat("Ingrese primer numero: ");
var nr2 = rls.questionFloat("Ingrese segundo numero: ");
if (esMultiplo(nr1, nr2))
    console.log("el nro", nr2, "es multiplo de", nr1);
else
    console.log("el nro", nr2, "no es multiplo de", nr1);

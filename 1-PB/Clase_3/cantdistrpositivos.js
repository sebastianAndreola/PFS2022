"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
var nro = 1;
var cantPositivos = 0;
var cantTotal = 0;
while (nro != 0) {
    nro = rls.questionFloat("Ingrese numero: ");
    if (nro > 0) {
        cantPositivos++;
        cantTotal++;
    }
    else if (nro < 0)
        cantTotal++;
}
console.log(cantPositivos, "positivos,", ((cantPositivos / cantTotal) * 100), "% del total.");

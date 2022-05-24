"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
var num = new Array(5);
var i = 0;
for (i; i <= (num.length - 1); i++) {
    num[i] = rls.questionFloat("ingrese un nro en la posicion " + i + ": ");
}
for (i = 0; i <= (num.length - 1); i++)
    console.log("arreglo [", i, "] es ", num[i]);

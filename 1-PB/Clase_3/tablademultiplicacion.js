"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
var nroTabla = rls.questionFloat("Ingrese el numero : ");
var hastaNro = rls.questionFloat("Ingrese hasta que numero : ");
var contador = 1;
for (contador; contador <= hastaNro; contador++)
    console.log("".concat(nroTabla, " x ").concat(contador, " ="), nroTabla * contador);

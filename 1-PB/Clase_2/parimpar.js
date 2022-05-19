"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
var nro = rls.questionFloat("Ingrese un numero: ");
if (nro == 0)
    console.log("El numero ingresado es 0, no es par y ni tampoco impar.. ");
else {
    nro =  nro % 2;
    if (nro == 0)
        console.log("El numero ingresado es par.. ");
    else
        console.log("El numero ingresado es impar.. ");
}

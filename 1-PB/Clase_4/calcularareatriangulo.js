"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
function calcularAreaTriangulo(base, altura) {
    return ((base * altura) / 2);
}
var baseTriangulo = rls.questionFloat("Ingrese base Triangulo: ");
var alturatriangulo = rls.questionFloat("Ingrese altura Triangulo: ");
console.log("El area del triangulo es :", calcularAreaTriangulo(baseTriangulo, alturatriangulo));

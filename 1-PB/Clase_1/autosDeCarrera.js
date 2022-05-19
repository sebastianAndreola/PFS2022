"use strict";
exports.__esModule = true;
/* Programa para calcular tiempo total y promedio de vuelta de un auto de carrera */
var readlineSync = require("readline-sync");
console.log("Tiempos de Carrera");
var vuelta_1 = readlineSync.questionFloat("Tiempo para vuelta 1 en seg: ");
var vuelta_2 = readlineSync.questionFloat("Tiempo para vuelta 2 en seg:: ");
var vuelta_3 = readlineSync.questionFloat("Tiempo para vuelta 3 en seg:: ");
var vuelta_4 = readlineSync.questionFloat("Tiempo para vuelta 4 en seg:: ");
var tiempoTotal = vuelta_1 + vuelta_2 + vuelta_3 + vuelta_4;
var promedioVuelta = tiempoTotal / 4;
console.log("El tiempo total de las 4 vueltas de carrera : " + tiempoTotal + " seg");
console.log("El promedio de vuelta del piloto fue : " + promedioVuelta + " seg");

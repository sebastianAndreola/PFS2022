/* Programa para calcular tiempo total y promedio de vuelta de un auto de carrera */
​import * as readlineSync from "readline-sync";​
console.log("Tiempos de Carrera")
let vuelta_1 : number = readlineSync.questionFloat("Tiempo para vuelta 1 en seg: "); 
let vuelta_2 : number = readlineSync.questionFloat("Tiempo para vuelta 2 en seg:: "); 
let vuelta_3 : number = readlineSync.questionFloat("Tiempo para vuelta 3 en seg:: "); 
let vuelta_4 : number = readlineSync.questionFloat("Tiempo para vuelta 4 en seg:: ");
​
let tiempoTotal : number = vuelta_1 + vuelta_2 + vuelta_3 + vuelta_4 ;
let promedioVuelta : number = tiempoTotal / 4 ;
​
console.log("El tiempo total de las 4 vueltas de carrera : " + tiempoTotal + " seg");
console.log("El promedio de vuelta del piloto fue : " + promedioVuelta + " seg");
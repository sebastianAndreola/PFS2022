import * as rls from "readline-sync";

function crearMatriz(filas: number, columnas: number) : number[][] {
    let matriz = new Array(filas);
    let fila  : number[];
    for (let index = 0; index < matriz.length; index++) {
         fila = new Array(columnas);
         matriz[index] = fila;     
        }
    return matriz;
}

function mostrarMatriz(matriz:number[][] ,filas: number, columnas: number)  {

    let fila : number, columna : number;
    let salida:String;
    salida=" ";
    for (fila = 0 ; fila < filas ; fila++) {
        for (columna = 0 ; columna < columnas ; columna++) {
         //console.log(`m[${fila}][${columna}] : ${matriz[fila][columna]}`);
         salida+=`m[${fila}][${columna}]:${matriz[fila][columna]} `;
        } 
        console.log(salida);
        salida=" ";
    }
}
    
function cargarMatriz(matriz:number[][])  {

    let fila : number, columna : number;
    for (fila = 0 ; fila < matriz.length ; fila++) {
        for (columna = 0 ; columna < (matriz[fila].length-1) ; columna++) {
            matriz[fila][columna]=rls.questionFloat(`Ingrese la nota del trimestre correspondiente ${fila},${columna}: `);
        } 
        matriz[fila][columna]=0;
    }
}

function calcularPromedioAnual(matriz:number[][],columnaPromedio:number)  {

    let fila : number, columna : number, promedio: number;
    promedio=0;
    for (fila = 0 ; fila < matriz.length ; fila++) {
        for (columna = 0 ; columna < ((matriz[fila].length)-1) ; columna++) {
            promedio+= matriz[fila][columna];
        }
        matriz[fila][columnaPromedio-1]=promedio/3;
        promedio=0;
    }
}

let cantAlumnos=rls.questionFloat("Ingrese la cantidad de alumnos: ");
var notas: number[][];
notas=crearMatriz(cantAlumnos,4); //Creo la matriz de tantas filas como cantidad de alumnos dados por el usuario
cargarMatriz(notas);
calcularPromedioAnual(notas,4); //en la columna 4 esta el promedio de los tres trimestres de cada alumno
mostrarMatriz(notas,cantAlumnos,4);















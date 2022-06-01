import * as rls from "readline-sync";
let frase : string = rls.question("Ingrese una frase: ");
let cuentaLetras : number[] = new Array(26); //Arreglo con espacio para cada letra del alfabeto.
let letras : string = "abcdefghijklmnopqrstuvwxyz";

function inicializarArreglo(cantidades : number[]){
    let i=0;
    for (i;i < cantidades.length;i++){
        cantidades[i]=0;
    }    
}

function contarLetras(texto: string, cantidades : number[], letras: string ) {
    //contar cuantas veces esta cada letra
    let i=0;
    for (i;i < texto.length;i++){
        cantidades[letras.indexOf(texto[i])]++;
    }    
}

function listarCuenta(cantidades : number[], letras:string){
//mostrar cuantas veces esta cada letra
    let cuantasVecesCadaLetra: string;
    cuantasVecesCadaLetra="";
    let i=0;
    for (i;i < cantidades.length;i++){
        cuantasVecesCadaLetra+=letras[i]+":"+cantidades[i]+", ";
    }    
    return cuantasVecesCadaLetra;
}

inicializarArreglo(cuentaLetras);

contarLetras(frase,cuentaLetras,letras);

console.log(`La frase : ${frase} tiene ${listarCuenta(cuentaLetras, letras)}`);
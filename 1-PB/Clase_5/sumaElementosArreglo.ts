import * as rls from "readline-sync";
let tamaño=rls.questionFloat("Ingrese la dimension del arreglo: ");
let num:number []=new Array (tamaño); //Creo el arreglo de dimensiones ingresadas​ por el usuario
let i=0;
let sumaArreglo=0;
for (i; i < (num.length); i++){  
  num[i]=rls.questionFloat(`Ingrese un valor numerico al arreglo en la posicion ${i}: `); 
  sumaArreglo+=num[i];
}
console.log(`La suma de los numeros ingresados en el arreglo es: ${sumaArreglo}`);

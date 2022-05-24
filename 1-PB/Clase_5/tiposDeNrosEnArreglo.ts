import * as rls from "readline-sync";
function mostrarArreglo (vector) : String {
    let salida="";
    for (i=0; i < (vector.length); i++){  
        salida+=vector[i]+" ";   
      }
      return salida;   
    
}
let tamaño=rls.questionFloat("Ingrese la dimension del arreglo: ");
let num:number []=new Array (tamaño); //Creo el arreglo de dimensiones ingresadas​ por el usuario
let i=0;
let cantPositivos=0;
let cantNegativos=0;
let cantCeros=0;

for (i; i < (num.length); i++){  
  num[i]=rls.questionFloat(`Ingrese un valor numerico al arreglo en la posicion ${i}: `); 
  if (num[i] > 0)
    cantPositivos++;  
  else if(num[i] < 0)
   cantNegativos++;
  else
   cantCeros++;     
}
console.log(`Arreglo  < ${mostrarArreglo(num)}>`);
console.log(`Cantidad de Positivos: ${cantPositivos}\nCantidad de Negativos: ${cantNegativos}\nCantidad de Ceros: ${cantCeros}`);
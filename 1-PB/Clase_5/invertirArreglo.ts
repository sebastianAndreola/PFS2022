import * as rls from "readline-sync";
function mostrarArreglo (vector) : String {
    let salida="";
    for (i=0; i < (vector.length); i++){  
        salida+=vector[i]+" ";   
      }
      return salida;   
    
}

let tamaño:number;
tamaño=rls.questionFloat("Ingrese la dimension del arreglo: ");
let arreglo:number []=new Array (tamaño); //Creo el arreglo de dimensiones ingresadas​ por el usuario
let arregloInvertido:number []=new Array (tamaño); //Creo el arreglo de dimensiones ingresadas​ por el usuario para invertirlo
let i=0;
for (i; i < (arreglo.length); i++){  
    arreglo[i]=rls.questionFloat(`Ingrese un valor numerico al arreglo en la posicion ${i}: `); 
    arregloInvertido[tamaño-1-i]=arreglo[i];//Voy guardando de forma invertida en el arreglo Invertido
}
console.log(`Arreglo Original  < ${mostrarArreglo(arreglo)}>`);
console.log(`Arreglo Invertido < ${mostrarArreglo(arregloInvertido)}>`);  
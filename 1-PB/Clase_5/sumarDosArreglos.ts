import * as rls from "readline-sync";
function mostrarArreglo (vector) : String {
    let salida="";
    for (i=0; i < (vector.length); i++){  
        salida+=vector[i]+" ";   
      }
      return salida;   
    
}
let v1:number []=new Array (6); 
let v2:number []=new Array (6); 
let vSuma:number []=new Array (6); 
let i=0;

for (i; i < (v1.length); i++){  
  v1[i]=rls.questionFloat(`Ingrese un valor numerico para el arreglo 1 en la posicion ${i}: `); 
  v2[i]=rls.questionFloat(`Ingrese un valor numerico para el arreglo 2 en la posicion ${i}: `); 
  vSuma[i]=v1[i]+v2[i]; // Acumulo en el vector suma, la suma de los dos arreglos en esa posicion
}
console.log(`Arreglo suma < ${mostrarArreglo(vSuma)}>`);   

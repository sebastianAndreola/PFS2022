import * as rls from "readline-sync";​
let nro1 = rls.questionFloat("Ingrese un primer numero entero: ");
let nro2 = rls.questionFloat("Ingrese un segundo numero entero: ");
let sumaEntreNros=0;
let contador;
if (nro1 > nro2)
  for (contador=nro2; contador <= nro1; contador++)
    sumaEntreNros+=contador;
else
  for (contador=nro1; contador <= nro2; contador++)
    sumaEntreNros+=contador;
console.log(`La suma entre los numeros ${nro1} y ${nro2} es:`,sumaEntreNros);
    

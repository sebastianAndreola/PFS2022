import * as rls from "readline-sync";​
let nroTabla = rls.questionFloat("Ingrese el numero : ");
let hastaNro = rls.questionFloat("Ingrese hasta que numero : ");
let contador=1;
for (contador; contador <= hastaNro; contador++)
    console.log(`${nroTabla} x ${contador} =`,nroTabla*contador);
   
   
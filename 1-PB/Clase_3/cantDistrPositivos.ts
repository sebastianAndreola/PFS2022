import * as rls from "readline-sync";​
let nro=1;
let cantPositivos=0;
let cantTotal=0;
while (nro !=0)
{
    nro = rls.questionFloat("Ingrese numero: ");
    if (nro > 0){
       cantPositivos++;
       cantTotal++;
    }     
     else 
    if (nro < 0)
      cantTotal++;
}
console.log(cantPositivos,`positivos,`,((cantPositivos/cantTotal)*100), `% del total.` );

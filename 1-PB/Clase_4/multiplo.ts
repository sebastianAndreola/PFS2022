import * as rls from "readline-sync";​
function esMultiplo(nro1 :number, nro2:number ): boolean {     
    return ((nro1 % nro2 ==0));
}
let nr1: number = rls.questionFloat("Ingrese primer numero: ");
let nr2: number = rls.questionFloat("Ingrese segundo numero: ");
if (esMultiplo (nr1,nr2))
  console.log("el nro", nr2,"es multiplo de",nr1);
else 
  console.log("el nro", nr2,"no es multiplo de",nr1);
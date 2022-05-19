import * as rls from "readline-sync";​
var nro1 = rls.questionFloat("Ingrese primer numero: ");
var nro2 = rls.questionFloat("Ingrese segundo numero: ");
var nro3 = rls.questionFloat("Ingrese tercer numero: ");
var maxNro: number;
if (nro1 > nro2)
    maxNro= nro1; 
else
    maxNro=nro2;

if( maxNro < nro3 ){
    maxNro=nro3;
}
console.log ("El mayor valor entre los numeros ingresados es: ", maxNro);
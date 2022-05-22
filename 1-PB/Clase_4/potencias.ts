import * as rls from "readline-sync";​
function calcularPotencia(base :number, exponente:number ): number {  
    let aux:number;
    let salida:number;
    salida=base;
    for (aux=1; aux < exponente; aux++){
        salida=salida* base;
    }
    return (salida);
}
let base: number = rls.questionFloat("Ingrese la base del numero: ");
let exp: number = rls.questionFloat("Ingrese el exponente del numero: ");
if (exp >=0){
    let resultado:number;
    if (exp ==0)
        resultado=1;
    else
        resultado=calcularPotencia(base,exp);
console.log("el resultado de la potencia es:",resultado);
}
else 
    console.log("No se admiten exponentes menores a cero..");

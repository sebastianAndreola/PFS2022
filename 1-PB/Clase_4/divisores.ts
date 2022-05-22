import * as rls from "readline-sync";​

function esMultiplo(nro1 :number, nro2:number ): boolean {     
    return ((nro1 % nro2 ==0));
}

function cantidadDeDivisores(nro1 :number): number {     
   
    let cantDeDivisores:number;
    cantDeDivisores=0;
    let contador:number;
    for (contador=1; contador <= nro1;contador++){
        if (esMultiplo(nro1,contador))
         cantDeDivisores++;
    }
    return (cantDeDivisores);
}
let nroEntrada: number;
nroEntrada=rls.questionFloat("Ingrese un numero: ");    
console.log("El numero",nroEntrada,"tiene",cantidadDeDivisores(nroEntrada), "divisores.");



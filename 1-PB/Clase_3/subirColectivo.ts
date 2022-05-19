import * as rls from "readline-sync";​
let colectivoArribo:String;
colectivoArribo= rls.question("Llego el colectivo: S o N:")

while  (colectivoArribo== "N")
{
    console.log("Esperar colectivo..");   
    colectivoArribo= rls.question("Llego el colectivo: S o N:")
}
console.log("Subir al colectivo!");
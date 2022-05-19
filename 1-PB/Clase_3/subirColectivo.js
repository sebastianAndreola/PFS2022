"use strict";
exports.__esModule = true;
//Este programa espera 3 iteraciones antes de subirse al colectivo..
var rls = require("readline-sync");
var colectivoArribo;
colectivoArribo = rls.question("Llego el colectivo: S o N:");
while (colectivoArribo == "N") {
    console.log("Esperar colectivo..");
    colectivoArribo = rls.question("Llego el colectivo: S o N:");
}
console.log("Subir al colectivo!");

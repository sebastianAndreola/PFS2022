​import * as readlineSync from "readline-sync";​
var precioProducto = readlineSync.questionFloat("Ingrese el valor del producto: ");
var cantidadProducto = readlineSync.questionFloat("Ingrese las cantidad del producto a comprar: ")
var total= precioProducto*cantidadProducto;
 if (total >= 1000){
    var descuento =total * 0.1;
    console.log("El precio total con descuento es : " + (total-descuento));
 }
 else{
    console.log("El precio total sin descuento es : " + total);
 }
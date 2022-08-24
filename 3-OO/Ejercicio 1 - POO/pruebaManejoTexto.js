"use strict";
exports.__esModule = true;
var ManejoTexto_1 = require("./ManejoTexto");
var calculadora_1 = require("./calculadora");
/*
private marca : String;
protected encendida : boolean;
protected valorPantalla : number;
-----private bateria : Bateria;
    private marca : String;
    private tipo : String;
    private porcentajeCarga : number;
*/
var info = [];
var fila = [];
var cantidadFilas = 0;
var MT = new ManejoTexto_1["default"]('datosCalculadora.txt', ';', ',');
var salida = [];
var i = 0;
var calculadora;
MT.leerArchivo();
MT.getCantidadFilas();
cantidadFilas = MT.getCantidadFilas() - 1;
for (i; i < cantidadFilas; i++) {
    fila = MT.getFila(i);
    // console.log(fila);
    info.push(new calculadora_1["default"](fila[0], parseInt(fila[1]), fila[2], fila[3], parseInt(fila[4])));
    //new Calculadora((fila[0]=='true'?true:false),parseInt(fila[1]),parseInt(fila[2])));    
}
console.log(info);
var bateria;
for (i = 0; i < info.length; i++) {
    calculadora = info[i];
    salida.push(calculadora.getMarca());
    salida.push(MT.getSeparadorColumnas());
    salida.push(calculadora.getValor().toString());
    salida.push(MT.getSeparadorColumnas());
    bateria = calculadora.getBateria();
    salida.push(bateria.getMarca());
    salida.push(MT.getSeparadorColumnas());
    salida.push(bateria.getTipoBateria());
    salida.push(MT.getSeparadorColumnas());
    bateria.setCarga(14);
    salida.push(bateria.getCarga().toString());
    salida.push(MT.getSeparadorFilas());
}
MT.grabarArchivo(salida);

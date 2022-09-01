"use strict";
exports.__esModule = true;
var fs = require("fs");
var ManejoTextos = /** @class */ (function () {
    function ManejoTextos(archivo, separaFil, separaCol) {
        this.datos = [];
        this.nombreArchivo = archivo;
        this.separadorFilas = separaFil;
        this.separadorColumnas = separaCol;
    }
    ManejoTextos.prototype.getSeparadorFilas = function () {
        return this.separadorFilas;
    };
    ManejoTextos.prototype.getSeparadorColumnas = function () {
        return this.separadorColumnas;
    };
    ManejoTextos.prototype.leerArchivo = function () {
        var fila;
        var texto = fs.readFileSync(this.nombreArchivo, 'utf8');
        //separamos las palabras en un arreglo usando el espacio como delimitador
        console.log(texto);
        texto.trim();
        console.log(texto);
        if (texto) {
            var filas = texto.split(this.separadorFilas);
            var fila_1;
            for (var i = 0; i < filas.length; i++) {
                fila_1 = filas[i];
                this.datos.push(fila_1.split(this.separadorColumnas));
            }
            // filas.forEach(fila => {
            //     this.datos.push(fila.split(this.separadorColumnas));                
            // })            
        }
    };
    ManejoTextos.prototype.grabarArchivo = function (datos) {
        var texto = '';
        datos.forEach(function (palabra) {
            texto += palabra;
        });
        //guardamos la cadena en el archivo de texto
        fs.writeFileSync(this.nombreArchivo, texto.trim());
    };
    ManejoTextos.prototype.getCantidadFilas = function () {
        return this.datos.length;
    };
    ManejoTextos.prototype.getFila = function (posicion) {
        return this.datos[posicion];
    };
    ManejoTextos.prototype.limpiarDatos = function () {
        //setters de atributos
        this.datos = [];
    };
    return ManejoTextos;
}());
exports["default"] = ManejoTextos;

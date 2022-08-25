"use strict";
exports.__esModule = true;
var bateria_js_1 = require("./bateria.js");
var Calculadora = /** @class */ (function () {
    //Constructor de la clase Calculadora
    function Calculadora(nombre, valorInicio, nombreBateria, tipoBateria, cargaBateria) {
        this.encendida = false;
        this.marca = nombre;
        this.valorPantalla = valorInicio;
        this.bateria = new bateria_js_1["default"](nombreBateria, tipoBateria, cargaBateria);
    }
    //Funcionalidad
    Calculadora.prototype.encenderApagar = function () {
        if (this.encendida) {
            this.encendida = false;
            console.log("Apagando..");
        }
        else {
            //Solo encendera la calculadora si el nivel de bateria es superior al 10%
            if (this.bateria.tieneCarga()) {
                this.encendida = true;
                this.valorPantalla = 0;
                console.log("Encendiendo..");
                this.mostrar();
            }
            else
                console.log("Bateria baja!!, reemplazar bateria..Apagando..");
        }
    };
    Calculadora.prototype.sumar = function (nro1) {
        if ((this.encendida) && (this.bateria.tieneCarga())) {
            this.valorPantalla = this.valorPantalla + nro1;
            this.mostrar();
        }
        else if ((this.encendida) && (!(this.bateria.tieneCarga()))) {
            this.encenderApagar(); //Apagando por bajo nivel de bateria
        }
    };
    Calculadora.prototype.restar = function (nro1) {
        if ((this.encendida) && (this.bateria.tieneCarga())) {
            this.valorPantalla = this.valorPantalla - nro1;
            this.mostrar();
        }
        else if ((this.encendida) && (!(this.bateria.tieneCarga()))) {
            this.encenderApagar(); //Apagando por bajo nivel de bateria
        }
    };
    Calculadora.prototype.multiplicar = function (nro1) {
        if ((this.encendida) && (this.bateria.tieneCarga())) {
            this.valorPantalla = this.valorPantalla * nro1;
            this.mostrar();
        }
        else if ((this.encendida) && (!(this.bateria.tieneCarga()))) {
            this.encenderApagar(); //Apagando por bajo nivel de bateria
        }
    };
    Calculadora.prototype.dividir = function (nro1) {
        if ((this.encendida) && (this.bateria.tieneCarga())) {
            if (nro1 == 0)
                console.log(" No se puede dividir por cero.. ");
            else
                this.valorPantalla = (this.valorPantalla) / nro1;
            this.mostrar();
        }
        else if ((this.encendida) && (!(this.bateria.tieneCarga()))) {
            this.encenderApagar(); //Apagando por bajo nivel de bateria
        }
    };
    //Setear pantalla
    Calculadora.prototype.setValor = function (nro) {
        if (this.encendida)
            this.valorPantalla = nro;
    };
    Calculadora.prototype.getValor = function () {
        if (this.encendida)
            return (this.valorPantalla);
        else
            return 0;
    };
    Calculadora.prototype.getBateria = function () {
        return this.bateria;
    };
    Calculadora.prototype.reset = function () {
        if (this.encendida) {
            this.valorPantalla = 0;
            console.log("------------------------------------");
        }
    };
    Calculadora.prototype.mostrar = function () {
        console.log("Resultado: " + this.valorPantalla);
        this.bateria.setCarga((this.bateria.getCarga()) - 10); //Cada vez que muestra un resultado, baja 10% su carga
    };
    Calculadora.prototype.infoBateria = function () {
        if (this.encendida)
            console.log(this.bateria.getInfoBateria());
    };
    Calculadora.prototype.getMarca = function () {
        return this.marca;
    };
    return Calculadora;
}());
exports["default"] = Calculadora;

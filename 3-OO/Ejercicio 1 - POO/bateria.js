"use strict";
exports.__esModule = true;
var Bateria = /** @class */ (function () {
    //Constructor de clase Bateria
    function Bateria(marca, tipo, carga) {
        this.marca = marca;
        this.tipo = tipo;
        this.porcentajeCarga = carga;
    }
    Bateria.prototype.getInfoBateria = function () {
        return ("Info: Bateria marca ".concat(this.marca, " del tipo ").concat(this.tipo, " con un porcentaje de carga de ").concat(this.porcentajeCarga, " %"));
    };
    Bateria.prototype.getMarca = function () {
        return this.marca;
    };
    Bateria.prototype.getTipoBateria = function () {
        return this.tipo;
    };
    Bateria.prototype.getCarga = function () {
        return this.porcentajeCarga;
    };
    Bateria.prototype.setCarga = function (carga) {
        this.porcentajeCarga = carga;
    };
    Bateria.prototype.tieneCarga = function () {
        return (this.getCarga() > 10);
    };
    return Bateria;
}());
exports["default"] = Bateria;

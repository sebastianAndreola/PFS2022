import ManejoTextos from './ManejoTexto';
import Calculadora from './calculadora';
import Bateria from './bateria';
​

let info : Calculadora[] = [];
let fila : string[] = [];
let cantidadFilas : number = 0;
let MT : ManejoTextos = new ManejoTextos('datosCalculadora.txt', ';', ',');
let salida : string[] = [];
let i=0;
let calculadora:Calculadora;
MT.leerArchivo();

MT.getCantidadFilas();
cantidadFilas = MT.getCantidadFilas()-1;
for (i; i < cantidadFilas; i++) {
    fila = MT.getFila(i);
    info.push(new Calculadora(fila[0],parseInt(fila[1]),fila[2],fila[3],parseInt(fila[4])));
          
}
console.log(info);
let bateria:Bateria;
for (i = 0; i < info.length; i++) {
    calculadora=info[i];
    salida.push(calculadora.getMarca());
    salida.push(MT.getSeparadorColumnas());
    salida.push(calculadora.getValor().toString());
    salida.push(MT.getSeparadorColumnas());
    bateria=calculadora.getBateria();
    salida.push(bateria.getMarca());
    salida.push(MT.getSeparadorColumnas());
    salida.push(bateria.getTipoBateria());
    salida.push(MT.getSeparadorColumnas());

    bateria.setCarga(14);//modifico la bateria para notar el cambio al grabar archivo..

    salida.push(bateria.getCarga().toString());
    salida.push(MT.getSeparadorFilas());   

}
MT.grabarArchivo(salida);


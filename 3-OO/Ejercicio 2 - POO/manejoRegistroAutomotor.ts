import Auto from './Auto.js';
import Color from './Color.js';
import ManejoTextos from './ManejoTexto';

import RegistroAutomotor from './registroAutomotor.js';
/*
let registro=new RegistroAutomotor();
let mercedes, bmw, fiat : Auto;
let rojo, verde, azul: Color;

rojo=new Color(256,0,0);
verde= new Color(0,256,0);
azul=new Color(0,0,256);

mercedes=new Auto("ABC123","Cesar Martinez","Mercedes","slk 300",rojo);
bmw=new Auto("ABC143","Omar Martinez","Bmw","slk 300",verde);
fiat=new Auto("ABC723","Cesar Gonzalez","Fiat","Toro",azul);*/
let info : Auto[] = [];
let fila : string[] = [];
let cantidadFilas : number = 0;
let MT : ManejoTextos = new ManejoTextos('datosRegistroAutomotor.txt', ';', ',');
let salida : string[] = [];
let i=0;
let auto:Auto;
MT.leerArchivo();
let color: Color;

MT.getCantidadFilas();
cantidadFilas = MT.getCantidadFilas()-1;
console.log("--------------");
console.log(MT);
console.log("--------------");
for (i; i < cantidadFilas; i++) {

    fila = MT.getFila(i);
    color=new Color (parseInt(fila[4]),parseInt(fila[5]),parseInt(fila[6]));
    info.push(new Auto(fila[0],fila[1],fila[2],fila[3],color));
          
}
console.log(info);

for (i = 0; i < info.length; i++) {
    auto=info[i];
    salida.push(auto.getPatente());
    salida.push(MT.getSeparadorColumnas());
    salida.push(auto.getTitular());
    salida.push(MT.getSeparadorColumnas());
    
    salida.push(auto.getMarca());
    salida.push(MT.getSeparadorColumnas());

    salida.push(auto.getModelo());
    salida.push(MT.getSeparadorColumnas());

    color=auto.getColor();
    salida.push(color.getRed().toString());
    salida.push(MT.getSeparadorColumnas());
    //color.setGreen(45);//modifico el color para notar el cambio al grabar archivo..
    salida.push(color.getGreen().toString());
    salida.push(MT.getSeparadorColumnas());
   
    salida.push(color.getBlue().toString());
    salida.push(MT.getSeparadorFilas());

    
   

}
MT.grabarArchivo(salida);


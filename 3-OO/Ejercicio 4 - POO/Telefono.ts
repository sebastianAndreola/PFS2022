export default class Telefono {

private estaPrendido: boolean;
private bateriaActual : number;
private ultimoNroLlamado : number;
private enLlamada : boolean;
private nroCelular : number;  //nro de celular del Telefono
    
//funcionalidad
    
public constructor (bateria: number , numeroCelular : number){
    
    this.bateriaActual= bateria;
    this.estaPrendido=true;
    this.enLlamada=false;
    this.ultimoNroLlamado=-1;    
    this.nroCelular=numeroCelular;
    
}
    
public mandarMensaje(numero : number, mensaje : string) : void{

  if (this.estaPrendido){
    console.log("enviando mensaje: "+mensaje+ " al numero :" + numero + ", desde el nro celular: "+ this.nroCelular);
    this.setConsumoBateria();
  }
    

}


public hacerLlamada(numero : number) : void{

  if (this.estaPrendido){
    this.ultimoNroLlamado=numero;
    this.enLlamada=true;
    console.log("Llamada con nro:" + numero);
  }

}

public terminarLlamada() : void{
  
if (this.estaPrendido){
  
  console.log("Llamada finalizada al nro: " + this.ultimoNroLlamado);
  this.enLlamada=false;
  this.setConsumoBateria();

}
}
public prenderApagar() : void{

  this.estaPrendido=!this.estaPrendido;

}

private setConsumoBateria() : void{

  this.bateriaActual-=5;
  
}

}

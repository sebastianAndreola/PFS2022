import Telefono from "./Telefono.js";

export default class TelefonoConCamara extends Telefono {

    private fotos: Foto [];
    private zoom : number;
        
    //funcionalidad
        
public constructor (bateria: number,numero: number ){
        
   super(bateria,numero);
   this.fotos=[];
   this.zoom=100;

}
public sacarFoto ():void {

  console.log("Sacando foto..");
  let foto= new Foto(this.zoom);
  this.fotos.push(foto);

}
public setZoom(zoom : number):void {

    this.zoom = zoom;
}



}

class Foto {

public constructor (zoom : number){

}

}

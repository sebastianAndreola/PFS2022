import Telefono from "./Telefono.js";

export default class TelefonoConRadio extends Telefono {

    private frecuenciaActual: number;
  
        
    //funcionalidad
        
public constructor (bateria: number,numero: number ){
        
   super(bateria,numero);
   this.frecuenciaActual=1440;

}
public verFrecuenciaActual (): number{
  
    return this.frecuenciaActual;

}

public setFrecuenciaActual (frecuencia : number){

    this.frecuenciaActual=frecuencia;

}
}
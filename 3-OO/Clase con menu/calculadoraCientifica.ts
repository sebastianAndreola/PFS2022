import Calculadora from './calculadora';

export default class CalculadoraCientifica extends Calculadora{

private pi = 3.141592;
private shift : boolean; //Si es verdadera se aplica la segunda funcion de la tecla, sino la primera funcion de la misma

public constructor(nombre : string){
    
    super(nombre); 
    this.shift = false;

}

public getPi() : number {

if (this.encendida)  
  return(this.pi);
else 
  return -1;

}

private getShift() : boolean {
   
  return(this.shift);
   
}

public setShift(estado : boolean) : void {
   
    this.shift=estado;
   
}
public potenciaRaizCuadrada(valor : number): void{

  if(this.getShift()){
     //Segunda funcion de la tecla raiz cuadrada
     if (valor >= 0) { //no se puede aplicar una raiz cuadrada a un nro negativo
        this.valorPantalla=Math.sqrt(valor);
        this.setShift(false); 
     }
     else
      console.log(" No se puede aplicar raiz cuadrada a un nro negativo.. ");
    
  }
  else  //Primera funcion de la tecla es potencia
   this.valorPantalla=Math.pow(this.valorPantalla,valor);
 
  this.mostrar();
 }
}
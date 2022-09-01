import Calculadora from './calculadora.js';

export default class PoolDeCalculadoras{

private nombre : String;
private calculadoras : Calculadora [];

constructor(nombre : String){

  this.calculadoras=new Array();    
  this.nombre=nombre;   
  
}   

//Elimina todas las calculadoras
public eliminarCalculadoras() : void{ 
 
  let i=0
  let largo=this.calculadoras.length;
   for (i;i < largo;i++)
     this.calculadoras.pop();
   
}


//CRUDF  Create-Read-Update-Delete-Find - ABMC
public createCalculadora(calculadora: Calculadora) : void {
 
  if (calculadora) 
    this.calculadoras.push(calculadora);        

}

public findModelo(modelo : string) : number{
  let i=0;
  for (i;i < this.calculadoras.length;i++)
   if (this.calculadoras[i].getNombre() == modelo)
      return i; // la encontro    
  return -1;//no la encontro

}

//Devuelve un arreglo de calculadoras 

public leerCalculadoras() : Calculadora[] {

  let calculadoras: Calculadora[] = [];
  this.calculadoras.forEach(calculadora => {
    calculadoras.push(calculadora)
  });
  return calculadoras;

}

public updateCalculadoras(calculadora : Calculadora, posicion : number) : void {
  
  if (calculadora)                             //opcion corta cambia instancia
    this.calculadoras[posicion] = calculadora;   

  }

  public deleteCalculadoras(posicion: number) : void {
    
  if (this.calculadoras[posicion])
    this.calculadoras.splice(posicion,1);

}

public getCalculadora (posicion : number) : Calculadora{
   
  return this.calculadoras[posicion];

}
public findCalculadora(calculadora : Calculadora) : number { //boolean en las buenas practicas
  for (let i = 0; i < this.calculadoras.length; i++) { 
      if (this.calculadoras[i] == calculadora)    
          return i; //true en las buenas practicas
  }
  return -1; //false en las buenas practicas
}

}
  
 



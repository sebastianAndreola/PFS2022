import Auto from './Auto.js';
export default class RegistroAutomotor{

private vehiculos: Auto[];
    
//funcionalidad
    
public constructor (){    
    
 this.vehiculos=[];
    
}
    
public createVehiculo(auto: Auto) : void{
     
 if (auto)  
    this.vehiculos.push(auto);
    
}
    
public findVehiculo(auto: Auto) : number{
let i;
  for (i=0;i < this.vehiculos.length;i++){
    if (this.vehiculos[i]== auto)
     return i;
    }
return -1;
}
    
public updateVehiculo(auto: Auto, posicion : number) : void{

    if (auto)  
   this.vehiculos[posicion]== auto;

}
    
    
public deleteVehiculo(posicion : number) : void{
    
   if (this.vehiculos[posicion])  
    this.vehiculos.splice(posicion,1);

}
    
    
public readVehiculos() : Auto[]{

   let autos: Auto[]= [];
   this.vehiculos.forEach(automovil => {
     autos.push(automovil)
    });
    return autos;    
}

}
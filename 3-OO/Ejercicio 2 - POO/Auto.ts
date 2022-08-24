import Color from './Color.js';
export default class Auto {

    private patente: string;
    private titular : string;
    private marca : string;
    private modelo : string
    private año: number;
    private color : Color;
    
    //funcionalidad
    
    public constructor (patente: string, titular: string, marca: string,modelo : string, color : Color ){
    
    this.patente=patente;
    this.titular= titular;
    this.marca=marca;
    this.modelo= modelo;
    this.color=color;
    
    }
    
    public getPatente() : string{
     
      return this.patente;
    
    }
    
    public setPatente(patente : string){
    
     this.patente= patente;
    
    }
  
    public getTitular(): string {
    
        return this.titular;
    
    }

    public getMarca(): string {
    
      return this.marca;
  
  }

  public getModelo(): string {
    
    return this.modelo;

}
    public getColor(): Color {
    
     return this.color;
    }
    
    public setColor(color : Color): void{
    
     this.color= color;
    
    }
}
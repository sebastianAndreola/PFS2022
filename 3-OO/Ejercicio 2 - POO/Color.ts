export default class Color{

    private red:number;
    
    private green:number;
    
    private blue:number;
    
    
    //funcionalidad
    
    public constructor (r : number,g : number, b: number){
    
    this.red=r;
    this.green=g;
    this.blue=b;
    }
    
    public getRed() : number {
    
      return this.red;
    }
    
    
    public getGreen() : number {
    
      return this.green;
    
    }
    
    public getBlue() : number {
    
      return this.blue;
    
    }
    
    public setRed(red : number) : void {
    
      this.red=red;
    }
    
    
    public setGreen(green : number) : void {
    
      this.green=green;
    
    }
    
    public setBlue(blue : number) : void {
    
      this.blue=blue;
    
    }
}
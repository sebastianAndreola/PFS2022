export default class Bateria{

    private marca : string;
    private tipo : string; 
    private porcentajeCarga : number; 
    
    //Constructor de clase Bateria
    constructor(marca : string, tipo : string, carga : number){

      this.marca=marca;    
      this.tipo = tipo ;
      this.porcentajeCarga = carga;

    }
  
    public getInfoBateria() : String {
         
      return(`Info: Bateria marca ${this.marca} del tipo ${this.tipo} con un porcentaje de carga de ${this.porcentajeCarga} %`)

    }

    public getMarca() : string {

      return this.marca;

    }

    public getTipoBateria() : string {

      return this.tipo;

    }

    public getCarga() : number {

      return this.porcentajeCarga;
      
    }

   

    public setCarga(carga : number) : void {

      this.porcentajeCarga = carga;

    }

    public tieneCarga(): boolean {

      return(this.getCarga() > 10);

    }
      
  }
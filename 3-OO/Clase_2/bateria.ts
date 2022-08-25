export default class Bateria{

    private marca : String;
    private tipo : String;
    private porcentajeCarga : number;
    
    //Constructor de clase Bateria
    constructor(marca : String, tipo : String, carga : number){

      this.marca=marca;    
      this.tipo = tipo ;
      this.porcentajeCarga = carga;

    }
  
    public getInfoBateria() : String {
         
      return(`Info: Bateria marca ${this.marca} del tipo ${this.tipo} con un porcentaje de carga de ${this.porcentajeCarga} %`)

    }

    public getMarca() : String {

      return this.marca;

    }

    public getTipoBateria() : String {

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
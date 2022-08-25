import Bateria from './bateria.js';

export default class Calculadora {
    //Estado
    private marca : String;
    protected encendida : boolean;
    protected valorPantalla : number;
    private bateria : Bateria;
   
    //Constructor de la clase Calculadora
    constructor(nombre : String){

      this.encendida=false;    
      this.marca=nombre; 
      this.bateria = new Bateria("Energizer","9A",100);

    }

    //Funcionalidad
    
    public encenderApagar() : void {    
    
      if (this.encendida){

        this.encendida=false;    
        console.log("Apagando..");

      }
          
      else
      {
        //Solo encendera la calculadora si el nivel de bateria es superior al 10%
        if (this.bateria.tieneCarga()){
          
          this.encendida=true;
          this.valorPantalla=0;
          console.log("Encendiendo..");
          this.mostrar () ;  

        }
        else

         console.log("Bateria baja!!, reemplazar bateria..Apagando..")
       
      }      
    
    }
    
    public sumar(nro1 : number ) : void {
    
      if ((this.encendida) && (this.bateria.tieneCarga())){

        this.valorPantalla=this.valorPantalla + nro1;
        this.mostrar();

      }
      else if ((this.encendida) && (!(this.bateria.tieneCarga()))){
        
          this.encenderApagar();//Apagando por bajo nivel de bateria

      }

    }
    
    public restar(nro1 : number ) : void {
      
      if ((this.encendida) && (this.bateria.tieneCarga())){

        this.valorPantalla=this.valorPantalla - nro1;
        this.mostrar();

      }
      else if ((this.encendida) && (!(this.bateria.tieneCarga()))){
        
        this.encenderApagar();//Apagando por bajo nivel de bateria

    }

    }
    
    public multiplicar(nro1 : number) : void {

      if ((this.encendida) && (this.bateria.tieneCarga())){

        this.valorPantalla=this.valorPantalla * nro1;
        this.mostrar();
      }
      else if ((this.encendida) && (!(this.bateria.tieneCarga()))){
        
        this.encenderApagar();//Apagando por bajo nivel de bateria

    }
    }
    
    public dividir(nro1 : number) : void {
     
      if ((this.encendida) && (this.bateria.tieneCarga())){
        if( nro1 == 0)  
        console.log(" No se puede dividir por cero.. ");
      else
        this.valorPantalla=(this.valorPantalla) / nro1;
      this.mostrar () ;
      }  
      else if ((this.encendida) && (!(this.bateria.tieneCarga()))){
        
        this.encenderApagar();//Apagando por bajo nivel de bateria

    }
        
    }

    //Setear pantalla
    public setValor (nro: number) : void {

      if (this.encendida) {

        this.valorPantalla=nro;
      
    }

    }
    
    public reset() : void {

      if (this.encendida) {

        this.valorPantalla=0;
        console.log("------------------------------------");

      }
      

    }

   protected mostrar () : void {
    
      console.log("Resultado: "+ this.valorPantalla);
      this.bateria.setCarga((this.bateria.getCarga())-10);  //Cada vez que muestra un resultado, baja 10% su carga
    
    }

    public infoBateria() : void {
      
      if (this.encendida)
        
        console.log(this.bateria.getInfoBateria());

    }
  }

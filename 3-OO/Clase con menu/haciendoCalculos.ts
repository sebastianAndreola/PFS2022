import PoolDeCalculadoras from './poolCalculadoras.js';
import Calculadora from './calculadora.js'; 
import CalculadoraCientifica from './calculadoraCientifica.js';
import * as RLS from 'readline-sync';

function mostrarCalculadoras(): void{

let opcion : string;
opcion = RLS.question("ingrese una opcion ( C -CREAR / R- LEER / U- ACTUALIZAR / D- BORRAR / M - MOSTRAR POOL X -salir) : ") 
opcion=opcion.toUpperCase();
let calculator,posicion;
let calculatorDatos: string [];
let nombreCalculadora,datosCalculadora : string;
let pool=new PoolDeCalculadoras("Grupo de Calculadoras");
while (opcion !=  'X'){
  switch (opcion){    
    
  case 'C': {
  try{       
      datosCalculadora= RLS.question('Ingrese los datos de la calculadora, separando con comas : ');
      calculatorDatos = datosCalculadora.split (',');
      if (calculatorDatos[0]=='')
        throw new Error ('El nombre de la calculadora no puede ser vacio');
      else{
        calculator=new Calculadora(calculatorDatos[0]);        
        pool.createCalculadora(calculator);
      }         
     }
     catch (error){
      console.log(error.message);
     }
     break;
  } 

  case 'R': {
  try{  
      nombreCalculadora = RLS.question('Ingrese el nombre de la calculadora a buscar : ');
      if (nombreCalculadora == '')
        throw new Error ('El nombre de la calculadora a leer no puede ser vacio');
      else{      
        posicion=pool.findModelo(nombreCalculadora);
        if (posicion != -1){
          console.log(`Se encontro el modelo de calculadora ${nombreCalculadora} `);
          console.log(pool.getCalculadora(posicion));
        }       
        else 
          console.log(`No se encontro el modelo de calculadora ${nombreCalculadora}..`);
        }
    }
      catch (error){
        console.log(error.message);
  }
     
  break;
  }

  case 'U': {
  try{  
      nombreCalculadora = RLS.question('Ingrese el nombre de la calculadora a modificar : ');
      if (nombreCalculadora == '')
       throw new Error ('El nombre de la calculadora a actualizar no puede ser vacio');
      else{      
        
        posicion=pool.findModelo(nombreCalculadora);
        if (posicion != -1){
          datosCalculadora= RLS.question('Ingrese el nuevo nombre de la calculadora: ');
          calculatorDatos = datosCalculadora.split (',');        
          pool.updateCalculadoras(new Calculadora(calculatorDatos[0]),posicion);
        }
        else
        console.log(`No se encontro el modelo de calculadora ${nombreCalculadora}..`);
        }
      }
      catch (error){
        console.log(error.message);
  }
  break;
  }

  case 'D': {
  try{  
      nombreCalculadora = RLS.question('Ingrese el nombre de la calculadora a borrar : ');
      if (nombreCalculadora == '')
       throw new Error ('El nombre de la calculadora a borrar no puede ser vacio');
      else{      
        
        posicion=pool.findModelo(nombreCalculadora);
        if (posicion != -1){
          pool.deleteCalculadoras(posicion);
          console.log(`Se borro el modelo de calculadora ${nombreCalculadora}..`);
        }
        else
        console.log(`No se encontro el modelo de calculadora ${nombreCalculadora}..`);
      }
    }
    catch (error){
      console.log(error.message);
  }
  break;
  }
  case 'M': {
    console.log(pool);
  }

  default: {
    console.log("Se esperaba un valor predeterminado C,R,U,D,X..");    
  } 
  }
  opcion = RLS.question("( C - CREAR / R - LEER / U - ACTUALIZAR / D - BORRAR / X - SALIR) :  ") ;
  opcion=opcion.toUpperCase();
}

}

mostrarCalculadoras();




/*

let calculator=new Calculadora("Casio fz500");
let calculator2=new Calculadora("Hp calculator 200");
let calculadoraCientifica1=new CalculadoraCientifica("Scientific Calculator Casio");

calculator2.encenderApagar();
calculator2.setValor(45); 


calculator.encenderApagar();

calculator.setValor(35);
calculator.sumar(234);
calculator.dividir(23);
calculator.reset();
calculator.infoBateria();
calculator.multiplicar(12);
calculator.dividir(0);
calculator.multiplicar(12);
calculator.sumar(12);
calculator.multiplicar(12);
calculator.multiplicar(12);
calculator.sumar(12);
calculator.multiplicar(3);
calculator.sumar(12);
calculator.multiplicar(12);
calculator.multiplicar(12);
calculator.sumar(12);
calculator.multiplicar(3);

calculator.infoBateria();
calculator.multiplicar(3);
 // calculator.encenderApagar();


 let pool=new PoolDeCalculadoras("Grupo de Calculadoras");
 pool.createCalculadora(calculator);
 pool.createCalculadora(calculator2);
 console.log(pool);

 let lista :Calculadora[]=pool.leerCalculadoras();
 console.log(lista);

 let calculator3=new Calculadora("Hp fi200");

 pool.updateCalculadoras(calculator3,1); // Cambia o reemplaza la calculadora de la segunda posicion 
 console.log(pool);
// console.log(pool.findCalculadora(calculator3));

 pool.deleteCalculadoras(0); // Elimina una calculadora en una posicion dada
 console.log(pool);

 //pool.eliminarCalculadoras();// Elimina todas las calculadoras
 console.log(pool);

 console.log(calculadoraCientifica1.getPi());
 calculadoraCientifica1.encenderApagar();
 calculadoraCientifica1.setValor(8.5);
 calculadoraCientifica1.multiplicar(4.2);

 //calculadoraCientifica1.setShift(true);
 //calculadoraCientifica1.potenciaRaizCuadrada(81);
 calculadoraCientifica1.setValor(2);
 calculadoraCientifica1.potenciaRaizCuadrada(5);
 mostrarCalculadoras();*/
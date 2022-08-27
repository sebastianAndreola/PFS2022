import PoolDeCalculadoras from './poolCalculadoras.js';
import Calculadora from './calculadora.js'; 
import CalculadoraCientifica from './calculadoraCientifica.js';

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
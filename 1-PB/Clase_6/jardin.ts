import * as rls from "readline-sync";
let cantInfantes=rls.questionFloat("Ingresar nro de infantes: ");
// arreglo multidimensional para representar la capacidad y el color del aula
let data = [[40, 35, 30], ["Azul", "Verde", "Amarilla"]]; //Capacidad y nombre de cada sala respectivamente

function AsignarAula(data,cantidad:number): String  {

    let sala=" ";
    let index:number;
    let diferencia=40;
    for (index = 0; index < data[0].length; index++) {
        if (((data[0][index]) >= cantidad) && (diferencia > (((data[0][index])-cantidad)))){
            diferencia=(data[0][index])-cantidad;
            sala=data[1][index];
            }
        }
        if (diferencia==40)
          return("No hay capacidad disponible, para esa cantidad de infantes..")
        else
          return (`La sala asignada es ${sala}.`);    
}
console.log(AsignarAula(data,cantInfantes));

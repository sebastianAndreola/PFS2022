import * as rls from "readline-sync";
let nombreIngresado=rls.question("Ingrese el nombre de la variable/funcion: ");
let i=1;
let nombreSalida:String;
nombreSalida="";
let cambioPalabra=false;

//Esta funcion elimina los espacios en blanco del inicio de una cadena
function eliminarEspaciosEnComienzo (cadena): String{
    let indice=0,inicio=0;
    while (indice<= cadena.length){
        if (cadena[i]== " "){
            inicio=indice;
            indice++;       
        }
        else
          indice=cadena.length+1;
    }
    return (cadena.substr(inicio,cadena.length));   
  }
  
nombreIngresado=eliminarEspaciosEnComienzo(nombreIngresado);
nombreSalida+=nombreIngresado[0].toLocaleLowerCase();//copio la primer letra y la paso a minuscula 
for (i; i < (nombreIngresado.length); i++){
    if ((nombreIngresado[i])==" ")
       cambioPalabra=true;
    else if(((nombreIngresado[i])!=" ") && (cambioPalabra))
    {
        nombreSalida+=nombreIngresado[i].toLocaleUpperCase();
        cambioPalabra=false;
    }else
      nombreSalida+=nombreIngresado[i].toLocaleLowerCase(); //Paso a minuscula las letras que no son el comienzo de la palabra
}
console.log (`El nombre de la variable/funcion seria el siguiente segun camelCase: ${nombreSalida}`);
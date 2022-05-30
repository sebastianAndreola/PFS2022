import * as rls from "readline-sync";

function AnalizarCasoNoVocal(caracter,posicion): String{
  let salida=new String();
  salida=caracter[posicion];
  if ((caracter.charCodeAt(posicion) > 65)&& (caracter.charCodeAt(posicion) < 91)) //Caso caracter en mayuscula
    salida=caracter[posicion].toLocaleLowerCase();//lo paso a miniscula
  else if ((caracter.charCodeAt(posicion) > 96)&& (caracter.charCodeAt(posicion) < 123))//Caso caracter en minuscula
    salida=caracter[posicion].toLocaleUpperCase();//lo paso a mayuscula
  //si no entra en ninguno de los dos casos anteriores, no es un letra ni mayuscula, ni minuscula, por lo tanto se deja igual
  return(salida);
}


let palabraIngresada=rls.question("Ingrese palabra: ");
let clave:String;
clave="";
let i=0;
let caracter;
//Solo se tiene en cuenta las vocales en minuscula, para el cambio a . , ; : !
for (i; i < (palabraIngresada.length); i++){
  switch (palabraIngresada[i]){
    case 'a': 
      clave+=".";
      break;
    case 'e': 
      clave+=",";
      break;
    case 'i':
      clave+=";";
      break;
    case 'o': 
      clave+=":";
      break;
    case 'u': 
      clave+="!";
      break;
    default:
      caracter=AnalizarCasoNoVocal(palabraIngresada,i); 
      clave+= caracter;  
}


}

console.log (`la clave es la siguiente:${clave}`);

"use strict"
let botonSubir,botonBajar,botonSumar,texto;
let valor=new Number(0);
let typeX=document.getElementById("valorX");
let campoNumerico;

botonSubir = document.getElementById("btnSubir");
botonBajar = document.getElementById("btnBajar");
botonSumar = document.getElementById("btnSumar");


botonSubir.addEventListener("click", incrementarContador);
botonBajar.addEventListener("click", decrementarContador);
botonSumar.addEventListener("click", sumarContador);

function incrementarContador(){

    campoNumerico = document.getElementById("valorX").value;    
    console.log("incrementando");
    let nro=campoNumerico.toString();
    valor=Number(nro) + 1;
    typeX.value=valor;

}

function decrementarContador(){

    campoNumerico = document.getElementById("valorX").value;
    console.log("decrementando");
    let nro=campoNumerico.toString();
    valor=Number(nro)-1;
    typeX.value=valor;
 
}

function sumarContador(){

    campoNumerico = document.getElementById("valorX").value;
    let valorASumar=document.getElementById("valorASumar").value;
    console.log("sumando");
    let nro=campoNumerico.toString();
    let nro2=valorASumar.toString();
    valor=Number(nro)+Number(nro2);
    typeX.value=valor;
 
}
"use strict"
let botonTirar = document.getElementById("btnTirarDados");
let resultado = document.getElementById("resultado");

botonTirar.addEventListener("click", simularTirarDados1000Veces);

function tirarDados() {

   let dado1=Math.floor(Math.random()*6)+1;
   let dado2=Math.floor(Math.random()*6)+1;
   return dado1 + dado2;

}

function simularTirarDados1000Veces(){

   let i=0, valor;
   let cantidadSiete=0;
    for(i;i < 1000;i++){
        valor=tirarDados();
        if (valor==7)
         cantidadSiete++;
    }
   //console.log(cantidadSiete);
    resultado.innerHTML =`<p>${cantidadSiete}</p> `;
    
}
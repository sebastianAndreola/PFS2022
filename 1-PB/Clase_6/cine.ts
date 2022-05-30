
function crearMatriz(filas: number, columnas: number) : boolean[][] {
    let matriz = new Array(filas);
    let fila  : number[];
    for (let index = 0; index < matriz.length; index++) {
         fila = new Array(columnas);
         matriz[index] = fila;     
        }
    return matriz;
}

function mostrarMatriz(matriz:boolean[][] ,filas: number, columnas: number)  {

    let fila : number, columna : number;
    let salida:String;
    salida=" ";
    for (fila = 0 ; fila < filas ; fila++) {
        for (columna = 0 ; columna < columnas ; columna++) {
         //console.log(`m[${fila}][${columna}] : ${matriz[fila][columna]}`);
         salida+=`m[${fila}][${columna}]:${matriz[fila][columna]} `;
        } 
        console.log(salida);
        salida=" ";
    }
}
    
function Azar (tope : number) : number {
    return Math.floor(Math.random()*tope); 
    };

function cargarMatriz(matriz:boolean[][])  {
    let fila : number, columna : number, aleatorio:number;
    
    for (fila = 0 ; fila < matriz.length ; fila++) {
        for (columna = 0 ; columna < (matriz[fila].length) ; columna++) {
           aleatorio=Azar(2);
           if (aleatorio==1)
             matriz[fila][columna]=true;
           else    
            matriz[fila][columna]=false;
    }
}
}

function OcupacionCine(matriz:boolean[][])  {

    let fila : number, columna : number, ocupadas: number,desocupadas: number;
    ocupadas=0;
    desocupadas=0
    for (fila = 0 ; fila < matriz.length ; fila++) {
        for (columna = 0 ; columna < (matriz[fila].length) ; columna++) {
            if (matriz[fila][columna])
             ocupadas++
            else 
             desocupadas++;
        }   
    }
    console.log(`La cantidad de butacas ocupadas:${ocupadas}; desocupadas:${desocupadas}..`)
}

var butacasCine: boolean[][];
butacasCine=crearMatriz(10,10); //Creo una matriz de 10 x 10 representa las butacas del cine
cargarMatriz(butacasCine);

mostrarMatriz(butacasCine,10,10);
OcupacionCine(butacasCine);

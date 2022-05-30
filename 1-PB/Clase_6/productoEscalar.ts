import * as rls from "readline-sync";
function CargarVector (arreglo, nombre){
    let i=0;
    for (i; i < n; i++){
        arreglo[i]=rls.questionFloat(`Ingrese un nro para ${nombre} en la posicion ${i}:`);
    }
}
    
let n=rls.questionFloat("Ingrese la dimension de los vectores: ");
let i=0;
let v1:number[]=new Array (n); 
let v2:number[]=new Array (n); 
let productoEscalar:number=0; 
CargarVector(v1,"vector 1");
CargarVector(v2,"vector 2");
for (i; i < n; i++){
    productoEscalar+=v1[i]*v2[i];
}
console.log(`El producto escalar entre: `);
console.log(`< ${v1} > `);
console.log(`< ${v2} > `);
console.log(`Resultado del Producto Escalar: ${productoEscalar}`);
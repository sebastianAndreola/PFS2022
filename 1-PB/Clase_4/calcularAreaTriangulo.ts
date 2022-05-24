import * as rls from "readline-sync";​
function calcularAreaTriangulo(base :number, altura:number ): number {
      return ((base * altura) /2);
}
let baseTriangulo: number = rls.questionFloat("Ingrese base Triangulo: ");
let alturatriangulo: number = rls.questionFloat("Ingrese altura Triangulo: ");
console.log("El area del triangulo es :",calcularAreaTriangulo(baseTriangulo, alturatriangulo));
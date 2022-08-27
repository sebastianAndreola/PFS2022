import * as fs from 'fs';
​
export default class ManejoTextos {

    private nombreArchivo : string;
    private separadorFilas : string;
    private separadorColumnas : string;
    private datos : string[][] = [];
​
    constructor(archivo: string, separaFil: string, separaCol: string) 
    {
        this.nombreArchivo=archivo;
        this.separadorFilas=separaFil;
        this.separadorColumnas=separaCol;
    
    }
    
    public getSeparadorFilas(): string{
        return this.separadorFilas;
    }

    public getSeparadorColumnas(): string{
        return this.separadorColumnas;
    }


    public leerArchivo() 
    {
    let fila : string
    let texto : string = fs.readFileSync(this.nombreArchivo, 'utf8');
    //separamos las palabras en un arreglo usando el espacio como delimitador
    console.log(texto);
    texto.trim();
    console.log(texto);
    if (texto) {
        let filas : string[] = texto.split(this.separadorFilas);
        let fila : string
        for (let i = 0; i < filas.length; i++) {
            fila = filas[i];
            this.datos.push(fila.split(this.separadorColumnas));                
        }
        // filas.forEach(fila => {
        //     this.datos.push(fila.split(this.separadorColumnas));                
        // })            
        }
    }

    public grabarArchivo(datos : string[]) {
​
    let texto = '';
    datos.forEach(palabra => {
       texto += palabra;
    });
    //guardamos la cadena en el archivo de texto
    fs.writeFileSync(this.nombreArchivo, texto.trim());

    }
    public getCantidadFilas() : number {

        return this.datos.length;

    }

    public getFila(posicion : number) : string[] {

        return this.datos[posicion];

    }

    public limpiarDatos() : void {
    //setters de atributos
      this.datos =[];
    
    }
}
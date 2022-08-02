/* CLASES TYPESCRIPT*/

class Personal{
    private nombre: string
    readonly apellido: string
    public edad: number
    protected estudia: boolean

 constructor(nombre: string, apellido: string){
        this.nombre= nombre;
        this.apellido= apellido;
    }
 public toString(): string{
    return this.nombre + this.apellido;
 }
 public nacim(actualYear:number):number{
    return (actualYear - this.edad)
   }
 private estudiante(estudio:boolean):void{
    estudio=this.estudia
 }
}

function DecoradorPersona(data:string){
    return function <T extends { new (...arg:any[]) : {}}>(constructor: T){
        return class extends constructor{
            array = data.split(",");
            Nombre = this.array[0];
            Apellido= this.array[1];
        }
    }
}
@DecoradorPersona('Juan, Lopez')
class Persona{
    private nombre: string
    readonly apellido: string
    public edad: number
    protected estudia: boolean

 constructor(nombre: string, apellido: string){
        this.nombre= nombre;
        this.apellido= apellido;
    }
}
let persona = new Persona("Juan" , "Perez" )
console.log(Persona);

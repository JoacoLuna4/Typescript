/* CLASES TYPESCRIPT*/

class Persona{
/*  Atributos de la clase Persona*/ 
// Los atributos muestran lo que cada objeto es, o también, lo que cada objeto tiene. Indican la forma o caracteristica de cada objeto
  
   private nombre: string
    /* Solo es accesible desde el interior de la propia clase, usando sus propios metodos */      
   readonly apellido: string
    /* El acceso es de solo lectura */
   public edad: number
   /* Un miembro público es accesible tanto desde el interior de la clase (por sus propios métodos),
    como desde el exterior de la misma (por métodos de otras clases).*/
   protected estudia: boolean
   /* Aplicable en contextos de herencia, hace que un miembro sea publico para sus clases
   derivadas y para clases en el mismo paquete pero los hace privados para el resto*/

/*  Constructor */
//Es un método especial que permite instanciar un objeto. Puede recibir 0 a n parámetros.
    constructor(nombre: string, apellido: string){
        this.nombre= nombre;
        this.apellido= apellido;
    }
    /*Éste código suele usarse para la inicialización de los atributos del objeto a crear, sobre todo cuando el valor de éstos
     no es constante o incluye acciones más allá de una asignación de valor.*/

/*  Métodos de la clase persona*/
/*Son funciones, procedimientos o rutinas declaradas dentro de la clase, usados para describir el comportamiento o las acciones de los objetos descriptos por esa clase. 
Los métodos, de alguna manera, muestran lo que cada objeto hace.*/
 public toString(): string{
    return this.nombre + this.apellido;
 }
 public nacim(actualYear:number):number{
    return (actualYear - this.edad)
    //Dentro de estas <instrucciones> se puede acceder a todos los miembros definidos en la clase, a la cual pertenece el método
 }
 private estudiante(estudio:boolean):void{
    estudio=this.estudia
 }
 /*Para el  caso que se desee definir un método que no devuelva objeto alguno se omite la cláusula
  return y se especifica void como <TipoDevuelto>.*/

}
// Fundamentos del enfoque orientado a objetos (EOO) //

import { CLIENT_RENEG_LIMIT } from "tls";

/* JERARQUIAS DE CLASES */

        //HERENCIA
/*  La herencia permite la definición de un nuevo objeto a partir de otros,
    agregando las diferencias entre ellos (Programación Diferencial), evitando
    repetición de código y permitiendo la reusabilidad.                         */

//Herencia simple
/*  Una clase puede tener una y sólo una superclase directa.                     */

class A {                   //SUPERCLASE
    protected valorA:number
}       
class B extends A{          //DERIVADA DIRECTA
    protected valorB: number;
}

//Herencia multiple
/* Si se siguen reglas de herencia múltiple, 
entonces una clase puede tener tantas superclases directas como se desee. 
Es decir, una clase D puede extenderse de clase B y heredar así elementos de la clase A, y
además heredar elementos de una clase C, derivada de la misma superclase A              */

/* TYPESCRIPT NO ADMITE HERENCIA MULTIPLE */

class Operacion{                        // SUPERCLASE 
    protected valorA: number;
    protected valorB: number;
    protected resultado: number;
constructor(){
    this.valorA=0
    this.valorB=0
    this.resultado=0
}
set ValorA(value: number){
    this.valorA=value
}
set ValorB(value: number){
    this.valorB=value
}
get Resultado():number{
    return this.resultado
}
}

class Suma extends Operacion{
    Sumar(){
        this.resultado= this.ValorA + this.ValorB
    }
}

class Resta extends Operacion{
    Restar(){
        this.resultado= this.ValorA - this.ValorB
    }
}

let operacionS= new Suma();
operacionS.ValorA=10;
operacionS.ValorB=5;
operacionS.Sumar();
console.log("El resultado de la suma es " + operacionS.Resultado);




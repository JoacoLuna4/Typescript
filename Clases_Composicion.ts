//AGREGACION Y COMPOSICION
/* Las jerarquias de agregacion y composicion son asociaciones del tipo "es parte de.." */

/* Esta compuesto por partes elementales (composicion) o no elementales (agreagacion)*/

class Turbina{
    private numTurbinas: number = 0 ;
    public constructor (n : number){
        this.numTurbinas = n;
    }
    public ToString(){
        return this.numTurbinas + " Turbina/s";
    }
}
class Cubierta{
    private cabinaVuelo:boolean = false;
    private sistemaEmergencia:boolean = false;
    private numPuertasSalidas: number = 0;

    public constructor( pCabinaVuelo:boolean, pSistemaEmergencia:boolean, pNumPuertasSalidas:number)
    {
        this.cabinaVuelo = pCabinaVuelo;
        this.sistemaEmergencia = pSistemaEmergencia;
        this.numPuertasSalidas = pNumPuertasSalidas;
    }
    public ToString(){
        let mensaje = "Cubierta compuesta de: ";
        if (this.cabinaVuelo){
            mensaje += "Cubierta de Vuelo, "
        }
        if (this.sistemaEmergencia){
            mensaje += " Sistema de Emergencia, "
        }
        mensaje += this.numPuertasSalidas + "Puertas de Salida";
        return mensaje;
    }
}

class Aeroplano{
    private cubierta: Cubierta; //Partes elementales (asociasion de composicion)
    private turbina: Turbina;   //Parte elemental (asociasion de composicion)     

    constructor( pCubierta:Cubierta , pTurbina:Turbina){
        this.cubierta = pCubierta;
        this.turbina = pTurbina;
    }
    public ToString(){
        let mensaje = "Aeroplano compuesto por: "
        mensaje += this.cubierta.ToString();
        mensaje += this.turbina.ToString();
        return mensaje;
    }
    
    
}

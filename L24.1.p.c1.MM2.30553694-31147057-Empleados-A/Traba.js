 import Cl_Person from "./Cl_Person.js";
 export default class Traba{
   constructor(){
     this.aux_nom="";
     this.mp=Infinity;
      this.acumpago=0;
      this.cont_admi=0;
   }
   procesar(pers){
     this.acumpago+=pers.gana;
     if(pers.gana<this.mp){
       this.aux_nom=pers.nombre;
       this.mp=pers.gana;
     }
     if(pers.tipo==="administrativo"){
       this.cont_admi++;
     }
   }
   Menos(){
     return this.aux_nom;
   }
   Prom(){
     return this.acumpago/this.cont_admi;
   }
   
 }
 import Cl_Person from "./Cl_Person.js";
 export default class Cl_conta{
   constructor(){
     this.cont_person=0;
     this.cont_muje=0;
     this.cont_hombre=0;
   }
   Procesar(person){
     this.cont_person++;
     if(person.sexo ==="F"){
       this.cont_muje++;
     } else{
       this.cont_hombre++;
     }
   }
   PromM(){
     return (this.cont_muje/this.cont_person)*100;
   }
    asis(){
     if(this.cont_muje>this.cont_hombre){
       return "mas mujeres que hombres";
     } else if(this.cont_hombre>this.cont_muje){
       return "mas hombres que mujeres";
     } else {
       return " por igual";
     }
   
 }
 }
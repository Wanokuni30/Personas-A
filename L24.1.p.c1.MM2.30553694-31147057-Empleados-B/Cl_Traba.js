import Cl_Person from "./Cl_Person.js";
export default class Cl_Traba{
   constructor(){
      this.acumpago=0;
  
}
procesar(pers){
  this.acumpago+=pers.Totalpago();
}
Pago(){
  return this.acumpago;
}
}
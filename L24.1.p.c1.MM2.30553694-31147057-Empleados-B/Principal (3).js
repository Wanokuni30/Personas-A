import Cl_Person from "./Cl_Person.js";
 import Cl_Traba from "./Cl_Traba.js";
let pers1=new Cl_Person("juan","obrero", 100);
let pers2=new Cl_Person("ana","obrero",120);
let pers3=new Cl_Person("lin","administrativo", 200);
let pers4=new Cl_Person("mary","obrero", 50);
let pers5=new Cl_Person("carlos","administrativo", 150);
 let tra = new Cl_Traba();
 tra.procesar(pers1);
  tra.procesar(pers2);
   tra.procesar(pers3);
  tra.procesar(pers4);
    tra.procesar(pers5);
    let salida=document.getElementById("salida")
    salida.innerHTML=`
    <br> ${pers1.nombre} gana ${pers1.Totalpago()}
     <br> ${pers2.nombre} gana ${pers2.Totalpago()}
      <br> ${pers3.nombre} gana ${pers3.Totalpago()}
     <br> ${pers4.nombre} gana ${pers4.Totalpago()}
      <br> ${pers5.nombre} gana ${pers5.Totalpago()}
     
    <br> la empresa debe pagar ${tra.Pago()}
    `;
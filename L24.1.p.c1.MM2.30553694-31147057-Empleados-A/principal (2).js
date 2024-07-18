import Cl_Person from "./Cl_Person.js";
 import Traba from "./Traba.js";
let pers1=new Cl_Person("juan","obrero", 100);
let pers2=new Cl_Person("ana","obrero", 50);
let pers3=new Cl_Person("lin","administrativo", 200);
let pers4=new Cl_Person("mary","obrero", 50);
let pers5=new Cl_Person("carlos","administrativo", 150);
 let tra = new Traba();
 tra.procesar(pers1);
  tra.procesar(pers2);
   tra.procesar(pers3);
  tra.procesar(pers4);
    tra.procesar(pers5);
    let salida=document.getElementById("salida")
    salida.innerHTML=`
    <br> uno de los que ganan menos es ${tra.Menos()}
    <br> el promedio paga a los administrativos es ${tra.Prom()}
    `;
 
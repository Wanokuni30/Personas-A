class Persona {
  constructor(n, e, s) {
    this.nomb = n;
    this.edad = e;
    this.sexo = s;
  }
  set nomb(n) {
    this._nomb = n;
  }
  get nomb() {
    return this._nomb;
  }
  set edad(e) {
    this._edad = +e;
  }
  get edad() {
    return this._edad;
  }
  set sexo(s) {
    this._sexo = s;
  }
  get sexo() {
    return this._sexo;
  }
}

class Programa {
  constructor() {
    this.acedad = 0;
    this.contpersonas = 0;
    this.mayor = 0;
  }

  procesarPersonas(p) {
    this.contpersonas++;

    this.acedad += p.edad;

    if (p.edad > this.mayor && p.sexo === "F") {
      this.mayor = p.edad;
    }
  }

  promedad() {
    return this.acedad / this.contpersonas;
  }

  edadmayor() {
    return this.mayor;
  }
}

let persona1 = new Persona("Luis", 15, "M");
let persona2 = new Persona("Ana", 19, "F");
let persona3 = new Persona("Jose", 21, "M");
let persona4 = new Persona("Carmen", 17, "F");
let persona5 = new Persona("Rosa", 18, "F");
let persona6 = new Persona("Jose", 22, "M");
let persona7 = new Persona("Maria", 17, "F");
let persona8 = new Persona("Luz", 19, "F");
let persona9 = new Persona("Rafael", 23, "M");
let persona10 = new Persona("Liz", 15, "F");
let persona11 = new Persona("Marcos", 20, "M");
let persona12 = new Persona("Leo", 16, "M");

let programa = new Programa();
programa.procesarPersonas(persona1);
programa.procesarPersonas(persona2);
programa.procesarPersonas(persona3);
programa.procesarPersonas(persona4);
programa.procesarPersonas(persona5);
programa.procesarPersonas(persona6);
programa.procesarPersonas(persona7);
programa.procesarPersonas(persona8);
programa.procesarPersonas(persona9);
programa.procesarPersonas(persona10);
programa.procesarPersonas(persona11);
programa.procesarPersonas(persona12);

let salida = document.getElementById("app");
salida.innerHTML += `
<br> La edad promedio es ${programa.promedad()}

<br> La edad mayor entre las mujeres es ${programa.edadmayor()}`;

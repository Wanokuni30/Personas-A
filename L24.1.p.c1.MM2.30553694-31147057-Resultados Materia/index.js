class Estudiante {
  constructor(c, n) {
    this.cedula = c;
    this.nota = n;
  }
  set cedula(c) {
    this._cedula = +c;
  }
  get cedula() {
    return this._cedula;
  }
  set nota(n) {
    this._nota = +n;
  }
  get nota() {
    return this._nota;
  }
}

class Materia {
  constructor(axci) {
    this.contaprob = 0;
    this.contestu = 0;
    this.mayor = 0;
    this.auxcedula = axci;
  }

  procesarEstudiante(e) {
    this.contestu++;

    if (e.nota >= 48) {
      this.contaprob++;
    }
    if (e.nota > this.mayor) {
      this.mayor = e.nota;
      this.auxcedula = e.cedula;
    }
  }

  porcAprob() {
    return (this.contaprob / this.contestu) * 100;
  }

  notamayor() {
    return this.mayor;
  }
}

let estudiante1 = new Estudiante(888, 60);
let estudiante2 = new Estudiante(777, 50);
let estudiante3 = new Estudiante(999, 40);
let estudiante4 = new Estudiante(111, 30);
let estudiante5 = new Estudiante(666, 90);
let estudiante6 = new Estudiante(444, 48);
let estudiante7 = new Estudiante(333, 90);
let estudiante8 = new Estudiante(222, 60);

let materia = new Materia();
materia.procesarEstudiante(estudiante1);
materia.procesarEstudiante(estudiante2);
materia.procesarEstudiante(estudiante3);
materia.procesarEstudiante(estudiante4);
materia.procesarEstudiante(estudiante5);
materia.procesarEstudiante(estudiante6);
materia.procesarEstudiante(estudiante7);
materia.procesarEstudiante(estudiante8);

let salida = document.getElementById("app");
salida.innerHTML += `
<br> El porcentaje de aprobados es ${materia.porcAprob()}%
<br> La cedula del mejor estudiante es ${materia.auxcedula}`;

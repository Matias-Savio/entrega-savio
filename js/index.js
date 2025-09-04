/*const user = "usuario";
const pass_usario = "contraseña1234";

solicitarDatos();

function solicitarDatos() {
  let usuario = prompt("Ingresar usuario");
  let pas = prompt("ingresar contraseña");

  let mensaje = validarDatos(usuario, pass);

  if (mensaje == "") {
    
  } else {
    console.log(mensaje);
    alert(mensaje);
  }
}


function validarDatos(usuario, pass) {
  let mensaje = "";

  if (!usuario) {
    mensaje = "Ingrese un usuario .";
  }

  if (!pass) {
    mensaje += "\n Ingrese una contraseña valida .";
  }

  if (usuario != user || pass != pass_usario) {
    mensaje += "\nUsuario o contraseña incorrecto";
  }

  return mensaje;
}*/

let data = ["Manzana", 1, 5, "Banana", true, 10, 5, "Naranja", 2];

let no_number = new Array();
let sum = 0;

for (let i = 0; i < data.length; i++) {
  if (typeof data[i] === "number") {
    sum += data[i];
  } else {
    no_number.push(data[i]);
  }
}

console.log("El contenido del arreglo es:" + no_number);
console.log("El contenido del valor numerico es:" + sum);

class Fruta {
  constructor(nombre, precio) {
    this.nombre = nombre.toUpperCase();
    this.precio = parseFloat(precio);
    this.vendido = false;
  }
  sumaIva() {
    this.precio = this.precio * 1.21;
  }
}

/*class Fruta = [];
Fruta.push(new Fruta("Manzana","2000"))
Fruta.push(new Fruta("Banana", "3000"))
Fruta.push(new Fruta ("Naranja", "5000"))

for (const Fruta of Fruta)
  Fruta.sumaIva();*/

//Login

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

// Array
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

/*class Fruta {
  constructor(nombre, precio) {
    this.nombre = nombre.toUpperCase();
    this.precio = parseFloat(precio);
    this.vendido = false;
  }
  sumaIva() {
    this.precio = this.precio * 1.21;
  }
}*/

class Fruta {
  constructor(id, precio, kg, producto) {
    this.id = id;
    this.producto = producto;
    this.precio = precio;
    this.kilogramos = kg;
  }

  mostrar_catalogo_completo() {
    return "#" + this.id + " - " + this.producto + " $ " + this.precio;
  }

  getPrecio() {
    return this.precio;
  }

  setPrecio(nuevo_precio) {
    this.precio = nuevo_precio;
  }

  gitId() {
    return this.id;
  }

  setId(nuevo_id) {
    this.id = nuevo_id;
  }

  getKilogramos() {
    return this.kg;
  }

  setKilogramos(nuevo_kg) {
    this.kg = nuevo_kg;
  }
}

const arreglo_fruta = new Array();
arreglo_fruta.push(new Fruta(1, 2000, "2kg", "Banana"));
arreglo_fruta.push(new Fruta(2, 1500, "1kg", "Manzana"));
arreglo_fruta.push(new Fruta(3, 5000, "3kg", "Uva"));
arreglo_fruta.push(new Fruta(4, 3500, "4kg", "Naranja"));

let respuesta = true;

while (respuesta != "4" && respuesta) {
  respuesta = mostrarMenu();
}

function mostrarMenu() {
  let respuesta = prompt(
    "Eliga una opcion \n 1)Productos \n2)nuevo precio \n3)ordenar productos \n4)salir"
  );

  if (respuesta == "1") {
    alert("Nuestros productos son: " + mostrar_stock());
  }

  return respuesta;
}

function mostrar_stock() {}

function mostrar_stock() {
  let stock = "";

  for (let i = 0; i < arreglo_fruta.length; i++) {
    stock += arreglo_fruta[i].mostrar_catalogo_completo();
  }
  return stock;
}

//Array join

/*let Producto = ['Arroz', 'Jabon', 'Desodorante'];
let listaProducto = Producto.join(' ');
console.log(listaProducto); */

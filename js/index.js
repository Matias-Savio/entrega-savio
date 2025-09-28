const notebook = [
  {
    id: 1,
    nombre: "HP",
    precio: 111111,
    imagen: "../img/1.jpg",
  },
  {
    id: 2,
    nombre: "LG",
    precio: 222222,
    imagen: "../img/2.jpg",
  },
  {
    id: 3,
    nombre: "Noblex",
    precio: 333333,
    imagen: "../img/3.jpg",
  },
  {
    id: 4,
    nombre: "Mac",
    precio: 444444,
    imagen: "../img/4.jpg",
  },
];

const contenedorTarjetas = document.getElementById("productos-container");

function crearTarjetasProductosInicio(productos) {
  productos.forEach((producto) => {
    const nuevaNotebook = document.createElement("div");
    nuevaNotebook.classList = "tarjeta-producto";
    nuevaNotebook.innerHTML = `
     <img src="${producto.img}">
     <h3>${producto.nombre}</h3>
     <p>$${producto.precio}</p>
     <button>Agregar al carrito</button>
    `;
    contenedorTarjetas.appendChild(nuevaNotebook);
    nuevaNotebook
      .getElementsByTagName("button")[0]
      .addEventListener("click", () => agregarAlCarrito(producto));
  });
}

crearTarjetasProductosInicio(notebook);

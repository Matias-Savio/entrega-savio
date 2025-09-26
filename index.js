const productos = [
  {
    nombre: "Auriculares Bluetooth Pokemon",
    precio: 40000.0,
    imagen:
      "https://res.cloudinary.com/duvzoazz3/image/upload/v1752366019/1366_2000_hjircp.jpg",
  },

  {
    nombre: "Pc Intel Core i5 10400-H510-8Gb-Ssd 960GB-KIT",
    precio: 800000.0,
    imagen:
      "https://res.cloudinary.com/duvzoazz3/image/upload/v1752365960/D_NQ_NP_837002-MLA81819412766_012025-O_inozsl.webp",
  },

  {
    nombre: "Funda Personalizada Mountain",
    precio: 300.0,
    imagen:
      "https://res.cloudinary.com/duvzoazz3/image/upload/v1752365790/iphone-10_-1024-x-10241-54822b3337921767db16673096333111-1024-1024_jgjv53.jpg",
  },

  {
    nombre: "Funda Personalizada Messi",
    precio: 700.0,
    imagen:
      "https://res.cloudinary.com/duvzoazz3/image/upload/v1752365680/Carcasa-Celular-Para-Sublimar-removebg-1_ixfm0t.png",
  },
];

function imprimirProductosEnHTML(productos) {
  const contenedor = document.getElementById("container");
  for (const producto of productos) {
    const card = document.createElement("div");
    card.innerHTML = `
					<img src="${producto.img}"
					<h3>${producto.nombre}</h3>
					<!-- Aquí generamos un nombre de id dinámico para cada botón
                    Esto lo hacemos para después poder obtenerlo y asignarle un evento -->
					<button id="${producto.nombre}${producto.id}">Comprar</button>
		`;

    contenedor.appendChild(card);
    const boton = document.getElementById(`${producto.nombre}${producto.id}`);
    boton.addEventListener("click", () => agregarAlCarrito(producto));
  }
}

imprimirProductosEnHTML(productos);

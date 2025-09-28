const contenedorTarjetas = document.getElementById("productos-container");

function crearTarjetasProductosInicio() {
  contenedorTarjetas, (innerHTML = "");
  const productos = JSON.parse(localStorage.getItem("notebook"));
  if (productos && productos.length > 0) {
    productos.forEach((producto) => {
      const nuevaNotebook = document.createElement("div");
      nuevaNotebook.classList = "tarjeta-producto";
      nuevaNotebook.innerHTML = `
     <img src="${producto.img}">
     <h3>${producto.nombre}</h3>
     <p>$${producto.precio}</p>
     <div>
        <button>-</button>
        <span class="cantidad">${producto.cantidad}</span>
        <button>+</button>
      </div>
    `;
      contenedorTarjetas.appendChild(nuevaNotebook);
      nuevaNotebook
        .getElementsByTagName("button")[1]
        .addEventListener("click", (e) => {
          const cuentaElement =
            e.target.parentElement.getElementsByTagName("span")[0];
          cuentaElement.innerText = agregarAlCarrito(producto);
        });
      nuevaNotebook
        .getElementsByTagName("button")[0]
        .addEventListener("click", (e) => {
          restarAlCarrito(producto);
          crearTarjetasProductosInicio();
        });
    });
  }
}

crearTarjetasProductosInicio();

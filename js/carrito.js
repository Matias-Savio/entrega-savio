function agregarAlCarrito(producto) {
  const memoria = JSON.parse(localStorage.getItem("notebook"));

  let cuenta = 0;
  if (!memoria) {
    const nuevoProducto = getNuevoProductoParaMemoria(producto);
    localStorage.setItem("notebook", JSON.stringify([nuevoProducto]));
    cuenta = 1;
  } else {
    const indiceProducto = memoria.findIndex(
      (notebook) => notebook.id === producto.id
    );

    const nuevaMemoria = memoria;
    if (indiceProducto === -1) {
      const nuevaMemoria = memoria;
      nuevaMemoria.push(getNuevoProductoParaMemoria(producto));
      cuenta = 1;
    } else {
      nuevaMemoria[indiceProducto].cantidad++;
      cuenta = nuevaMemoria[indiceProducto].cantidad;
    }
    localStorage.setItem("notebook", JSON.stringify(nuevaMemoria));
    return cuenta;
  }
  actualizarNumeroCarrito();
}

function restarAlCarrito(producto) {
  const memoria = JSON.parse(localStorage.getItem("notebook"));
  const indiceProducto = memoria.findIndex(
    (notebook) => notebook.id === producto.id
  );
  if (memoria[indiceProducto].cantidad === 1) {
    memoria.splice(indiceProducto, 1);
    localStorage.setItem("notebook", JSON.stringify(memoria));
  } else {
    memoria[indiceProducto].cantidad--;
  }
}

function getNuevoProductoParaMemoria(producto) {
  const nuevoProducto = producto;
  nuevoProducto.cantida = 1;
  return nuevoProducto;
}

const cuentaCarritoElement = document.getElementById("cuenta-carrito");
function actualizarNumeroCarrito() {
  const memoria = JSON.parse(localStorage.getItem("notebook"));
  const cuenta = memoria.reduce((acum, current) => acum + current.cantidad, 0);
  cuentaCarritoElement.innerText = cuenta;
}

actualizarNumeroCarrito();

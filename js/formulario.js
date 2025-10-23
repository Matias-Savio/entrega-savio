const form = document.getElementById("form-compra");
const resumen = document.getElementById("resumen-carrito");
const btnEnviar = document.getElementById("btn-enviar");
const btnCancelar = document.getElementById("btn-cancelar");
const btnVolver = document.getElementById("btn-volver");

// localStorage
const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// Mostrar productos en el resumen
if (carrito.length > 0) {
  carrito.forEach((producto) => {
    const item = document.createElement("div");
    item.className = "producto-resumen";
    item.innerHTML = `
        <img src="${producto.img}" width="60">
        <p><strong>${producto.nombre}</strong> — Cantidad: ${
      producto.cantidad
    } — $${producto.precio * producto.cantidad}</p>
      `;
    resumen.appendChild(item);
  });

  const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0);
  const totalDiv = document.createElement("p");
  totalDiv.innerHTML = `<strong>Total a pagar: $${total}</strong>`;
  resumen.appendChild(totalDiv);
} else {
  resumen.innerHTML = "<p>No hay productos en el carrito.</p>";
  btnEnviar.disabled = true;
}

// Enviar pedido
form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (carrito.length === 0) {
    Swal.fire({
      title: "Carrito vacío",
      text: "No hay productos para comprar.",
      icon: "warning",
      confirmButtonText: "Entendido",
    });
    return;
  }

  // Vaciar carrito
  localStorage.removeItem("carrito");
  localStorage.removeItem("carritoLength");

  Swal.fire({
    title: "¡Compra completada!",
    text: "Tu pedido fue enviado correctamente.",
    icon: "success",
    confirmButtonColor: "seagreen",
    confirmButtonText: "Volver al inicio",
  }).then(() => {
    location.href = "index.html";
  });
});

// Cancelar compra
btnCancelar.addEventListener("click", () => {
  Swal.fire({
    title: "¿Cancelar compra?",
    text: "Se eliminarán todos los productos del carrito.",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#d33",
    cancelButtonColor: "#3085d6",
    confirmButtonText: "Sí, cancelar",
    cancelButtonText: "No",
  }).then((result) => {
    if (result.isConfirmed) {
      localStorage.removeItem("carrito");
      localStorage.removeItem("carritoLength");
      resumen.innerHTML = "<p>Tu carrito está vacío.</p>";
      btnEnviar.disabled = true;
      Swal.fire("Compra cancelada", "El carrito fue vaciado.", "error");
    }
  });
});

// Volver al inicio
btnVolver.addEventListener("click", () => {
  location.href = "index.html";
});

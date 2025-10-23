const form = document.getElementById("form-compra");
const mensaje = document.getElementById("mensaje");
const resumen = document.getElementById("resumen-carrito");
const btnEnviar = document.getElementById("btn-enviar");
const btnCancelar = document.getElementById("btn-cancelar");
const btnVolver = document.getElementById("btn-volver");

// LocalStorage
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
  btnEnviar.disabled = true; // Desactiva el botón si no hay productos
}

// Envío del formulario
form.addEventListener("submit", (e) => {
  e.preventDefault();

  localStorage.removeItem("carrito");
  localStorage.removeItem("carritoLength");

  mensaje.textContent = "¡Compra realizada con éxito! Gracias por elegirnos";
  form.reset();

  setTimeout(() => {
    location.href = "index.html";
  }, 2500);
});

// Cancelar compra
btnCancelar.addEventListener("click", () => {
  localStorage.removeItem("carrito");
  localStorage.removeItem("carritoLength");
  resumen.innerHTML = "<p>Tu carrito está vacío.</p>";
  btnEnviar.disabled = true;
});

// Volver al inicio
btnVolver.addEventListener("click", () => {
  location.href = "index.html";
});

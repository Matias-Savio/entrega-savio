const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

if (carrito.length > 0) {
  imprimirCarritoEnHTML(carrito);
}

<form id="miFormulario">
  <label for="nombre">Nombre:</label>
  <input type="text" id="nombre" name="nombre"></input>

  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required></input>

  <button type="submit">Enviar</button>
</form>;

const formulario = document.getElementById("miFormulario");

formulario.addEventListener("submit", function (event) {
  event.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;

  console.log("Nombre:", nombre);
  console.log("Email:", email);

  formulario.reset();
});

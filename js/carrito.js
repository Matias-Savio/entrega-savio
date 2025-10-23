//Modal en header que guarda y elimina los productos
const pintarCarrito = () => {
  modalContainer.innerHTML = "";
  modalContainer.style.display = "flex";
  const modalHeader = document.createElement("div");
  modalHeader.className = "modal-header";
  modalHeader.innerHTML = `
   <h1 class="modal-header-title">Carrito</h1>
  `;
  modalContainer.append(modalHeader);

  const modalbutton = document.createElement("h1");
  modalbutton.innerText = "x";
  modalbutton.className = "modal-header-button";

  modalbutton.addEventListener("click", () => {
    modalContainer.style.display = "none";
  });

  modalHeader.append(modalbutton);
  //Modal con imagenes y nombre del producto,tambien con sus botenes para agregar, restar y eliminar productos
  carrito.forEach((product) => {
    let carritoContent = document.createElement("div");
    carritoContent.className = "modal-content";
    carritoContent.innerHTML = `
     <img src="${product.img}">
     <h3>${product.nombre}</h3>
     <p>$${product.precio}</p>
     <span class="restar"> - </span>
     <p>Cantidad: ${product.cantidad}</p>
     <span class="sumar"> + </span>
     <p>Total: ${product.cantidad * product.precio}</p>
     <span class="delete-product"> X </span>
    `;

    modalContainer.append(carritoContent);
    //suma,resta y eliminacion de los productos
    let restar = carritoContent.querySelector(".restar");

    restar.addEventListener("click", () => {
      if (product.cantidad !== 1) {
        product.cantidad--;
      }
      saveLocal();
      pintarCarrito();
    });

    let sumar = carritoContent.querySelector(".sumar");
    sumar.addEventListener("click", () => {
      product.cantidad++;
      saveLocal();
      pintarCarrito();
    });

    let eliminar = carritoContent.querySelector(".delete-product");

    eliminar.addEventListener("click", () => {
      eliminarProducto(product.id);
    });
  });

  const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0);

  const totalBuying = document.createElement("div");
  totalBuying.className = "total-content";
  totalBuying.innerHTML = `total a pagar: $${total} `;
  modalContainer.append(totalBuying);

  // Botones de compra y vaciar carrito
  const botonesContainer = document.createElement("div");
  botonesContainer.className = "botones-carrito";

  const vaciarBtn = document.createElement("button");
  vaciarBtn.innerText = "Vaciar carrito";
  vaciarBtn.className = "btn-vaciar";

  const finalizarBtn = document.createElement("button");
  finalizarBtn.innerText = "Finalizar compra";
  finalizarBtn.className = "btn-finalizar";

  botonesContainer.append(vaciarBtn, finalizarBtn);
  modalContainer.append(botonesContainer);

  // vaciar carrito y su notificacion
  vaciarBtn.addEventListener("click", () => {
    Swal.fire({
      title: "¿Vaciar carrito?",
      text: "Se eliminarán todos los productos del carrito.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Sí, vaciar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        carrito = [];
        localStorage.removeItem("carrito");
        carritoCounter();
        pintarCarrito();

        Swal.fire({
          title: "Carrito vacío",
          text: "Todos los productos fueron eliminados.",
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
        });
      }
    });
  });

  // Finalizar compra
  finalizarBtn.addEventListener("click", () => {
    location.href = "formulario.html";
  });
};

verCarrito.addEventListener("click", pintarCarrito);
// Eliminar un solo producto con su notificacion
const eliminarProducto = (id) => {
  const foundId = carrito.find((element) => element.id === id);

  Swal.fire({
    title: "¿Eliminar producto?",
    text: `¿Querés eliminar ${foundId.nombre} del carrito?`,
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#d33",
    cancelButtonColor: "#3085d6",
    confirmButtonText: "Sí, eliminar",
    cancelButtonText: "Cancelar",
  }).then((result) => {
    if (result.isConfirmed) {
      carrito = carrito.filter((carritoId) => carritoId !== foundId);

      carritoCounter();
      saveLocal();
      pintarCarrito();

      Swal.fire({
        title: "Eliminado",
        text: `${foundId.nombre} fue eliminado del carrito.`,
        icon: "success",
        timer: 1500,
        showConfirmButton: false,
      });
    } else {
      Swal.fire({
        title: "Operación cancelada",
        text: "El producto se mantiene con la misma cantidad.",
        icon: "info",
        timer: 1500,
        showConfirmButton: false,
      });
    }
  });
};

const carritoCounter = () => {
  cantidadCarrito.style.display = "block";

  const carritoLength = carrito.length;

  localStorage.setItem("carritoLength", JSON.stringify(carritoLength));

  cantidadCarrito.innerText = JSON.parse(localStorage.getItem("carritoLength"));
};

carritoCounter();

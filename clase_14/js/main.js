const btnSwal = document.getElementById("botonSwal"),
  btnToast = document.getElementById("botonToast"),
  horaActual = document.querySelector("#horaActual"),
  fechaActual = document.querySelector(".fecha-actual");

// Swal.fire("Hola")
btnSwal.addEventListener("click", () => {
  //  Swal.fire({
  //    title: "Estas sugoro de quitar este producto?",
  //    text: "Esta accion no se puede deshacer",
  //    icon: "question",
  //    footer: '<a href="www.google.com" target= "_blank">Consulta nuestras politicas</a>',
  //  });
  // alert("Agregaste el producto al carrito");
  // Swal.fire({
  //   imageUrl: "../img/favicon.ico",
  //   imageHeight: 150,
  //   imageAlt: "A tall image",
  // });
  // Swal.fire({
  //   title: "<strong>HTML <u>example</u></strong>",
  //   icon: "info",
  //   html: `
  //   You can use <b>bold text</b>,
  //   <a href="#" autofocus>links</a>,
  //   and other HTML tags
  // `,
  //   showCloseButton: false,
  //   // showCancelButton: true,
  //   focusConfirm: true,
  //   confirmButtonText: `
  //   <i class="fa fa-thumbs-up"></i> Great!
  // `,
  //   confirmButtonAriaLabel: "Thumbs up, great!",
  //   cancelButtonText: `
  //   <i class="fa fa-thumbs-down"></i>
  // `,
  //   cancelButtonAriaLabel: "Thumbs down",
  // });

  Swal.fire({
    title: "Estas seguro de eliminar este producto?",
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: "SI",
    denyButtonText: `No, no estoy seguro`,
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      //llamo a la funcion  que elimina el producto
      Swal.fire("Producto eliminado!", "", "success");
    } else if (result.isDenied) {
      Swal.fire("Buena decisión", "", "info");
    }
  });
});
const product = { nombre: "Computadora", precio: 50000 };

btnToast.addEventListener("click", () => {
  Toastify({
    text: `Producto:${product.nombre}`,
    duration: 2500, //1s = 1000ms
    // destination: "https://github.com/apvarun/toastify-js",
    // newWindow: true,
    // close: true,
    gravity: "top", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      // background: "linear-gradient(to right, #00b09b, #96c93d)",
      background: "green",
    },
    onClick: function () {
      Toastify({
        text: `Precio: $${product.precio}`,
        duration: 2500, //1s = 1000ms

        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          // background: "linear-gradient(to right, #00b09b, #96c93d)",
          background: "green",
        },
      }).showToast();
    }, // Callback after click
  }).showToast();
});

const DateTime = luxon.DateTime;

const ahora = DateTime.now();
const local = DateTime.local(2024, 1, 25, 12, 10);
// console.log(local);
// console.log(ahora);
const dt = DateTime.fromObject(
  { day: 12, month: 3 },
  { zone: "America/Buenos_Aires" }
);

console.log(ahora.toString());
console.log(ahora.year);
console.log(ahora.month);
console.log(ahora.day);

console.log(ahora.toLocaleString(DateTime.DATE_FULL));
console.log(ahora.toLocaleString(DateTime.TIME_SIMPLE));
console.log(ahora.setLocale('de').toLocaleString(DateTime.DATE_FULL));
console.log(ahora.setLocale('fr').toLocaleString(DateTime.DATETIME_SHORT));

const suma = ahora.plus({hours:5, minutes: 20})
console.log(suma.toLocaleString(DateTime.TIME_SIMPLE));


const dosMeseMAs = ahora.plus({ month: 2});
console.log(dosMeseMAs.toLocaleString(DateTime.DATE_FULL));
const inputNombre = document.querySelector("#nombre"),
  inputDescripcion = document.querySelector("#descripcion"),
  inputPrecio = document.querySelector("#precio"),
  inputImg = document.querySelector("#img"),
  inputTalle = document.querySelector("#select-talle"),
  btnGuardar = document.querySelector("#btnGuardar"),
  contenedor = document.querySelector("#contenedor");

const productos = [];
const talles = ["xs", "s", "sm", "m", "xl", "xxl"];

for (const talle of talles) {
  const option = document.createElement("option");
  option.value = talle;
  option.innerText = talle;

  inputTalle.appendChild(option);
}

function Producto(
  nombre,
  descripcion,
  precio,
  talle,
  img = "https://via.placeholder.com/250"
) {
  this.id = productos.length + 1;
  this.nombre = nombre; //{nombre:"remera"}
  this.descripcion = descripcion; //{descripcion:"remera dama"}
  this.precio = parseFloat(precio); //{precio:"12445"}
  this.talle = talle; //{talle:"xs"}
  //   if (img == "") {
  //     this.img = "https://via.placeholder.com/250";
  //   } else {
  //     this.img = img;
  //   } //{img:"remera.jpg"}
  this.img = img;
}
// const newProduct = new Producto(
//   "remera dama",
//   "Remera dama naranja",
//   12345,
//   "m"
// );
// console.log(newProduct);

//función crearHtml
function crearHtml(arr) {
  let html;
  for (const producto of arr) {
    const { img, precio, descripcion, nombre, talle, id } = producto;

    html = `
        <div class="col"> 
            <div class="card">
              <div class="card-image">
                <img class="responsive-img" src=img/${img} />
              </div>
            <div class="card-content">
                <span class="card-title">${nombre}</span>
                <p>${descripcion}
                  <p>Size: ${talle}</p>
                </p>
                <p>$${precio}</p>
            </div>
            <div class="card-action">
              <input type= "button" class="btn" id=${id} value="Comprar">
            </div>
          </div>
        </div>`;
  }
  //   contenedor.innerHTML = contenedor.innerHTML + html;
  contenedor.innerHTML += html;
}

btnGuardar.addEventListener("click", () => {

  const newProduct = new Producto(
    inputNombre.value,
    inputDescripcion.value,
    inputPrecio.value,
    inputTalle.value,
    inputImg.value
  );
  console.log(newProduct);
  productos.push(newProduct)
  console.log(productos);
  crearHtml(productos)
});

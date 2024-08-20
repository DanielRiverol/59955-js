const productos = [
  { id: 1, nombre: "arroz integral", precio: 360 },
  { id: 2, nombre: "papa", precio: 195 },
  { id: 3, nombre: "tomate", precio: 525 },
  { id: 4, nombre: "morrón", precio: 1800 },
  { id: 5, nombre: "pan", precio: 570 },
  { id: 6, nombre: "aceitunas", precio: 480 },
  { id: 7, nombre: "fideo", precio: 525 },
  { id: 8, nombre: "arroz", precio: 1050 },
  { id: 9, nombre: "avena", precio: 600 },
  { id: 10, nombre: "cebolla", precio: 135 },
  { id: 11, nombre: "zanahoria", precio: 270 },
  { id: 12, nombre: "brócoli", precio: 675 },
  { id: 13, nombre: "lechuga", precio: 180 },
  { id: 14, nombre: "espaguetis", precio: 525 },
  { id: 15, nombre: "rabano", precio: 12525 },
];
const servicios = [
  { id: 1, nombre: "limpieza de cutis", precio: 1200, img: "limpieza.jpg" },
  { id: 2, nombre: "masajes", precio: 1800, img: "masajes.jpg" },
  { id: 3, nombre: "electrodos", precio: 2800, img: "electrodos.jpg" },
  { id: 4, nombre: "manicura", precio: 1500, img: "manicuria.webp" },
  { id: 5, nombre: "uñas", precio: 1200, img: "esculpidas.webp" },
  { id: 6, nombre: "mascarillas", precio: 1900, img: "mascarilla.jpeg" },
  { id: 7, nombre: "microblanding", precio: 5800, img: "microblanding.png" },
  {
    id: 8,
    nombre: "radiofrecuencia",
    precio: 12800,
    img: "radiofrecuencia.png",
  },
  {
    id: 9,
    nombre: "micropigmentación",
    precio: 7800,
    img: "micropigmentacion.jpeg",
  },
];
const personas = [
  "Juan",
  "Emma",
  "Carlos",
  "Olivia",
  "Pedro",
  "Sophia",
  "Luis",
  "Diego",
  "Isabella",
  "Miguel",
];

//Funciones de búsqueda
function buscarServicio(arr, filtro) {
  const encontrado = arr.find((el) => {
    return el.nombre.includes(filtro);
  });
  return encontrado;
}
function filtrarServicio(arr, filtro) {
  const filtrado = arr.filter((el) => {
    return el.nombre.includes(filtro);
  });
  return filtrado;
}

const titulo = document.getElementById("principal");
const secundario = document.getElementById("secundario");
const contenedor = document.getElementById("contenedor");
const ul = document.querySelector("#lista");

ul.className = "flex";
// ul.style.backgroundColor="red"
function message() {
  alert("soy un mensaje");
}

for (const producto of productos) {
  const li = document.createElement("li");
  li.innerHTML = `<div class='card'>
  <h2>Producto: ${producto.nombre}</h2>
  <p>Precio: $${producto.precio}</p>
  <button class='btn' id='btn-${producto.id}'>Comprar</button>
  </div>`;
  // ul.appendChild(li)
}
//addEventListener('evt',funcion)

// titulo.addEventListener("click", ()=>{
//   alert("soy un mensaje distinto");
// });

//prefijo onevento
titulo.onclick = () => alert("soy un mensaje distinto");

///mouse
const caja = document.getElementById("caja");
const pais = document.getElementById("pais");

const btnSearch = document.getElementById("btnSearch");
const inputs = document.querySelectorAll("input");
const inputSearch = inputs[0];

// caja.addEventListener("mousedown", function () {
//   console.log("presionaste el mouse");
// });
// caja.addEventListener("mouseup", function () {
//   console.log("soltaste el mouse");
// });

// caja.addEventListener("mouseenter", () => {
//   caja.style.backgroundImage = "url(./img/estados.jpg)";
//   pais.innerText = "ESTADOS";
// });

// caja.addEventListener("mouseleave", () => {
//   caja.style.backgroundImage = "url(./img/australia.jpg)";
//   pais.innerText = "AUSTRALIA";
// });
// caja.addEventListener("click", () => {
//   caja.style.backgroundImage = "url(./img/pum.png)";
//   pais.innerText = "PUM";
// });
inputSearch.addEventListener('input', ()=>{
  console.log(inputSearch.value);

})
//render servicio
function renderServicio(servicio) {
  caja.innerHTML = `<div class='card'>
    <img src="./img/${servicio.img}"/>
  <h2>Producto: ${servicio.nombre}</h2>
  <p>Precio: $${servicio.precio}</p>
  <button class='btn' id='btn-${servicio.id}'>Comprar</button>
  </div>`;
}
//validar cuando no encuentra el servicio

btnSearch.addEventListener("click", () => {
  const encontrado = buscarServicio(servicios, inputSearch.value);
  console.log(encontrado);
  renderServicio(encontrado);
});

//change
const paises = [
  "Argentina",
  "Colombia",
  "Brasil",
  "México",
  "Uruguay",
  "Venezuela",
  "Perú",
  "Chile",
  "Polonia",
  "Canadá",
  "Sudáfrica",
];
const info = document.querySelector("#info");
const select = document.querySelector("#paises");
for (const pais of paises) {
  const option = document.createElement("option");
  option.value = pais;
  option.innerText = pais;
  select.append(option);
}

select.addEventListener("change", () => {
  const paisSelect = select.options[select.selectedIndex].value;
  info.innerHTML = "Seleccionaste: " + paisSelect;
});
//submit
const formulario = document.querySelector("form");
console.log(formulario);

formulario.addEventListener("submit", (e) => {
  e.preventDefault()
  console.log(e.target[0].value);
  console.log(e.target[1].value);
  
  console.log("Form enviado");
});
//input
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
// selector por id
const titulo = document.getElementById("principal");
const secundario = document.getElementById("secundario");
const contenedor = document.getElementById("contenedor");
// console.log(titulo);
// console.log(secundario);
// console.log(contenedor);

//selector por class
const lista = document.getElementsByClassName("lista");
const paises = document.getElementsByClassName("pais");
// console.log(lista);
// console.log(paises);
// for (const pais of paises) {
//   console.log(pais.innerHTML);
// }
//selector por tagname
const divs = document.getElementsByTagName("div");
// console.log(divs);
paises[1].innerHTML = "<em>URUGUAY</em>";
// paises[1].className = "card box"
//crear nodos
const parrafo = document.createElement("p");

parrafo.innerHTML = "<em>Soy un parrafo creado desde JS</em>";

contenedor.appendChild(parrafo);

// titulo.remove()

//acceder al valor de los inputs
const inputs = document.querySelectorAll('input[type="text"]');

const nombre = inputs[0];
nombre.value ="DANI"
console.log(nombre.value);

const listAlumnos = document.querySelector("#nombres");

personas.push("Gonza")
personas.push("Julieta")
for (const persona of personas) {
  const li= document.createElement('li')
  li.innerText= persona

  listAlumnos.appendChild(li)
}
const producto = {
  nombre: "Papas",
  precio: 230,
};
let concatenado =
  "Producto: " + producto.nombre + ", precio: $" + producto.precio;

  let template= `PRODUCTO: ${producto.nombre}, 
  PRECIO: $ ${producto.precio}`;//interpolacion
// contenedor.innerText = concatenado;
contenedor.innerText = template;

contenedor.innerHTML = `<div class=""box>
  <h3>${producto.nombre}</h3>
  <p>${producto.precio}</p>
</div>`;
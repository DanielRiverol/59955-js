const servicios = [
  { id: 1, nombre: "limpieza de cutis", precio: 1200, img: "limpieza.jpg" },
  { id: 2, nombre: "masajes", precio: 1800, img: "masajes.jpg" },
  { id: 3, nombre: "electrodos", precio: 2800, img: "electrodos.jpg" },
  { id: 4, nombre: "manicura", precio: 1500, img: "manicuria.webp" },
  { id: 5, nombre: "uñas", precio: 1300, img: "esculpidas.webp" },
  { id: 6, nombre: "mascarillas", precio: 1900, img: "mascarilla.jpeg" },
  { id: 7, nombre: "microblanding", precio: 5800, img: "microblanding.png" },
  {
    id: 8,
    nombre: "mascarillas completa",
    precio: 2300,
    img: "mascarilla.jpeg",
  },
];

//funciones de búsqueda
// let sumar= asignarOperacion('+') //(a, b)=> a + b
// sumar(2,5)

// servicios.forEach((el)=> console.log(el.nombre))

// // const encontrado=servicios.find(el=> el.nombre == "mascarillas")
// const encontrado = servicios.find((el) => el.nombre.includes("m"));

// function buscarServicios(arr, filtro) {
//   return arr.find((el) => el.nombre.includes(filtro));
// }
// // const encontrado2= buscarServicios(servicios, "mas")
// // console.log(encontrado2);

// function filtrarServicios(arr, filtro) {
//   return arr.filter((el) => el.nombre.includes(filtro));
// }
// let param= prompt('INgresa el servicio')
// const filtrados = filtrarServicios(servicios, param);
// console.log(filtrados);

// const existe = servicios.some((el) => el.precio > 20000);

// // console.log(existe);

// //map devuelve un nuevo array
// const precioActualizado = servicios.map((el) => {
//   return {
//     id: el.id,
//     nombre: el.nombre,
//     img: el.img,
//     precio: el.precio * 1.15
//   };
// });
// console.table(servicios);
// console.table(precioActualizado);

//reduce

let cargoFijo = 250;
const total = servicios.reduce((acc, el) => {
  return acc + el.precio;
}, cargoFijo); //valor de acc

// console.log(total);
// Clase 7 MIRAR METODO SORT
//Math
// const num = [0, 3, -99];
// console.log(Math.PI);
// console.log(Math.E);
// console.log(Math.min(0, 6, 7, -34, 5, -99, Infinity));
// console.log(Math.max(0, 6, 7, -34, 5, -99, Infinity));
// console.log(Math.sqrt(125));
// console.log(Math.cbrt(125));
function asignarOperacion(operacion) {
  switch (operacion) {
    case "+":
      return (a, b) => a + b;
    case "-":
      return (a, b) => a - b;
    case "raiz":
      return (a) => {
        if (a < 0) {
          return "No existe raiz cuadrada negativa";
        } else {
          return Math.sqrt(a);
        }
      };

      //hagamos la division (/)
    default:
      return () => "El operador no es válido";
  }
}
// let raizDe25 = asignarOperacion("raiz");

// console.log(raizDe25(-25));

// console.log(Math.ceil(4.000000000001));
// console.log(Math.floor(4.900000000001));
// console.log(Math.round(4.400000000001));

// console.log(Math.floor(Math.random() * 10 + 1));

const hexa = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];
//
let color = "";

for (let i = 0; i < 6; i++) {
  let aleatorio= Math.floor(Math.random() * hexa.length)
   color = color + hexa[aleatorio]
}

console.log("#"+color);

//Generar una funcion que genere un token aleartorio de 8 digitos

//Clase DATE trabajar fechas
const date=new Date()

console.log(date);
console.log(date.getFullYear());
console.log(date.getMonth() + 1);
console.log(date.getDate());
console.log(date.toString());
console.log(date.toLocaleString());
// console.log(date.getTime());

document.querySelector('h2').textContent= date.toLocaleDateString()


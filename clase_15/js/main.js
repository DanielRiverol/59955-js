const horaActual = document.querySelector("#horaActual"),
  fechaActual = document.querySelector(".fecha-actual");
const card = document.querySelector(".card");
const btn = document.querySelector("#btn"),
  contenedor = document.querySelector(".contenedor");

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

//asincronía
function square(num) {
  return num * num;
}

function logSquare(num) {
  console.log(square(num));
}

//logSquare(2);

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
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

// logSquare(2);

const DateTime = luxon.DateTime;

/*const ahora = DateTime.now();
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
console.log(dosMeseMAs.toLocaleString(DateTime.DATE_FULL));*/

const btnCalcular = document.getElementById("calcular"),
  dates = document.querySelectorAll('input[type="date"]');
const inicio = DateTime.now().toFormat("yyyy-MM-dd");

const fin = DateTime.now().plus({ month: 4 }).toFormat("yyyy-MM-dd");
dates.forEach((inputDate) => {
  inputDate.setAttribute("min", inicio);
  inputDate.setAttribute("max", fin);
});

//1000ms = 1s => 84600000 = 1d
function calcularEstadia(checkIn, checkOut) {
  let total = checkOut.diff(checkIn);
  return total.as("days");
}

btnCalcular.addEventListener("click", () => {
  const checkIn = DateTime.fromISO(dates[0].value);
  const checkOut = DateTime.fromISO(dates[1].value);
  const estadia = calcularEstadia(checkIn, checkOut);
  // console.log(estadia);
  Swal.fire({
    title: `El precio de tu estadia por ${estadia} dias es : ${estadia * 8000}`,
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonColor: "green",
    confirmButtonText: "Guardar",
    denyButtonText: `No quiero`,
  });
});

// console.log("Pongo el agua calentar");
// console.log('Preparo mate')
// console.log('Disfruto el mate');
//Eventloop
// setTimeout(() => {
//   console.log("Segunda ejecucion");
// }, 120000000); //me ejecuto en una pila diferente (soy el plato dificil)
// console.log("Primera ejecucion");
// console.log("Tercera ejecucion");

// btn.addEventListener("click", () => {
//   setTimeout(() => {
//     card.classList.remove("active");
//   }, 2500);
//   card.classList.add("active");
// });

// setTimeout(() => {
//   for (const letra of "HOLA") {
//     console.log(letra);
//   }
// }, 3000);
// setTimeout(() => {
//   for (const letra of "TAROLA") {
//     console.log(letra);
//   }
// }, 2000);

//tarea repetitiva

//clearInterval

// let contador = 0;
// let intervalo = setInterval(() => {
//   contador++;
//   console.log(contador);

//   if (contador == 5) {
//     clearInterval(intervalo);
//   }
// }, 1000);
// PROMESAS



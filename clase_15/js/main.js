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

// btnCalcular.addEventListener("click", () => {
//   const checkIn = DateTime.fromISO(dates[0].value);
//   const checkOut = DateTime.fromISO(dates[1].value);
//   const estadia = calcularEstadia(checkIn, checkOut);
//   // console.log(estadia);
//   Swal.fire({
//     title: `El precio de tu estadia por ${estadia} dias es : ${estadia * 8000}`,
//     showDenyButton: true,
//     showCancelButton: true,
//     confirmButtonColor: "green",
//     confirmButtonText: "Guardar",
//     denyButtonText: `No quiero`,
//   });
// });

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

// console.log(
//   new Promise((resolve, reject) => {
//     //cuerpo de la promesa
//   })
// );

// const eventoFuturo = (valor) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (valor == true) {
//         resolve("Promesa resuelta");
//       } else {
//         reject("Promesa Rechaza");
//       }
//     }, 3000);
//   });
// };

// console.log(eventoFuturo(true));
// console.log(eventoFuturo(false));

const devolverPrenda = (respuesta) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (respuesta == "si") {
        resolve("SI gracias por por prestame la campera");
      } else {
        reject("Uh no me acuerdo, no la tengo");
      }
    }, 3000);
  });
};

// console.log("Hola, te acordas la campera que te preste el sabado?");
// // console.log(devolverPrenda('si'));
// // console.log(devolverPrenda('no'));
// // console.log(devolverPrenda());
// // then / catch
// devolverPrenda("si")
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((error) => {
//     console.log(error);
//   }).finally(()=>{
//     console.log("Ok gracias");

//   });
const renderServicios = (arr) => {
  //validar que pasa cuando no recibo un array
  contenedor.innerHTML = "";
  let html;
  for (const item of arr) {
    const { id, nombre, img, precio } = item;
    html = `
        <div class="card">
      		<div class="card-image">
        	<img src="../img/${img}">
        	<span class="card-title">${nombre.toUpperCase()}</span>
       </div>
     	 <div class="card-content"> 
     		<p>$${precio}</p>
      </div>
      <div class="card-action">
        <button class="btn btn-normal" id="${id}">Comprar</button>
      </div>
     </div>
     `;
    contenedor.innerHTML += html;
  }
};
// renderServicios(servicios)

const pedirServicios = (arr) => {
  contenedor.innerHTML = "CARGANDO...⏱️ ";
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (arr) {
        resolve(arr);
      } else {
        reject("error de datos");
      }
    }, 3000);
  });
};

let servicioDesdeOtroLugar = [];

// pedirServicios(servicios)
//   .then((response) => {
//     servicioDesdeOtroLugar = response;
//     console.log(servicioDesdeOtroLugar);
//     renderServicios(servicioDesdeOtroLugar)
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//fetch
fetch("https://swapi.dev/api/people/5")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

    const { name, height: altura, skin_color : piel} = data;
    console.log(name);
    console.log(altura);
    console.log(piel);
    //renderPersonaje(data)
  });

console.log("Codigo siguiente");

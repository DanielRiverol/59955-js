const btnSearch = document.querySelector("#btnSearch"),
  inputIngreso = document.querySelector("#ingreso"),
  contenedor = document.querySelector("#contenedor");

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

// Función para crear estructura html
function crearHtml(arr) {
  contenedor.innerHTML = "";
  //validar qué pasa cuando no recibo ningun array
  let html;
  for (const el of arr) {
    const { img, id, nombre, precio } = el;

    html = `<div class="card">
                <img src=" ./img/${img}" alt="${nombre}">
                <hr>
                <h3>${nombre}</h3>
                <p>Precio: $${precio} </p>
                  <div class="card-action">
                    <button class="btn btn-success" id="${id}">Agregar</button>
                  </div>
              </div>`;
    //se la agrego al contenedor
    // contenedor.innerHTML = contenedor.innerHTML + html;
    contenedor.innerHTML += html;
  }
}
// crearHtml(servicios);

// localStorage.setItem('saludo', 'Hola Flanders')
// localStorage.setItem("isValid", true);
// localStorage.setItem("edad", 20);

// const numeros = [1, 23, 4, 5, 6, 7, 78];
// localStorage.setItem("numeros", numeros);

//ver los valores almacenados
const saludo = localStorage.getItem("saludo");
// console.log(typeof saludo);
const isValid = localStorage.getItem("isValid") === "true"; //trampa LS Guarda String
let igaulA = 5 == 10; //variable booleana
// console.log(isValid);
// const nums = localStorage.getItem("numeros").split(",");

// localStorage.setItem('darkMode', 'activo')
const toggleButton = document.getElementById("darkModeToggle");

if (localStorage.getItem("darkMode") === "activo") {
  document.body.classList.add("dark-mode");
}
///trabajar con el boton
toggleButton.addEventListener("click", () => {
  if (document.body.classList.contains("dark-mode")) {
    document.body.classList.remove("dark-mode");
    localStorage.setItem("darkMode", "inactivo");
  } else {
    document.body.classList.add("dark-mode");
    localStorage.setItem("darkMode", "activo");
  }
});

//limpiar el LS

// localStorage.removeItem("darkmode");
// localStorage.removeItem("saludo");
//localStorage.clear() //elimina todas claves
//sessionStorage
// sessionStorage.setItem("sesion", "activa");
const userObject = { nombre: "Pedro", edad: 36, pass: "1234" };

const userJson = JSON.stringify(userObject); //convierto a json
// localStorage.setItem("usuario", userJson);

// let user = localStorage.getItem("usuario");
// user = JSON.parse(user); //convierto a obj
// console.log(user.nombre);

const carrito = [];
carrito.push(servicios[5]);
carrito.push(servicios[3]);

// console.log(carrito);

localStorage.setItem("carrito", JSON.stringify(carrito));
const btnMostrar = document.querySelector(".btn.btn-success");
const btnLimpiar = document.querySelector(".btn.btn-delete");

btnMostrar.addEventListener("click", () => {
  const arrServ = JSON.parse(localStorage.getItem("carrito"));
  console.log(arrServ);
  crearHtml(arrServ);
});
btnLimpiar.addEventListener("click", () => {
  localStorage.removeItem("carrito");
});

const inputUser = document.querySelector("#user"),
  inputPass = document.querySelector("#pass"),
  checkbox = document.querySelector("#check"),
  form = document.querySelector("formulario");

//funcion para alamacenamiento
function guardarEnStorage(storage) {
  const user = {
    usuario: inputUser.value,
    pass: inputPass.value,
  };

  if (storage == "local") {
    localStorage.setItem("usuario", JSON.stringify(user));
  }

  if (storage == "session") {
    sessionStorage.setItem("usuario", JSON.stringify(user));
  }
}

form?.addEventListener("submit", (e) => {
  e.preventDefault();
  // if (checkbox.checked) {
  //   guardarEnStorage("local");
  // } else {
  //   guardarEnStorage("session");
  // }

  checkbox.checked ? guardarEnStorage("local") : guardarEnStorage("session");
});
//op ternario (condicion ? true : false)
let temp = 25;
// if (temp > 30) {
//   console.log("Dia caluroso");
// } else {
//   console.log("Dia agradabe");
// }
// temp > 30 ? console.log("Dia caluroso") : console.log("Dia agradable");

// console.log(temp > 30 ? "dia caluroso" : "dia agradable");
// contenedor.innerHTML = temp > 30 ? "dia caluroso" : "dia agradable";

const persona = {
  nombre: "Juanito",
  apellido: "Arcoiris",
  edad: 17,
  activo: false,
};
let permiso = persona.edad >= 18 ? true : false;

// permiso ? console.log("Podes entrar"):console.log("NO podes entrar");

//op AND &&
const almacen = [];

// if(almacen.length === 0){
//   console.log('Almacen vacio');
// contenedor.innerHTML = "Almacen vacio";
// }

// almacen.length === 0 && (contenedor.innerHTML = "Almacen vacio")

// persona.activo=true
// let estado= persona.activo && "CUOTA AL DIA"

// console.log(estado);

//OP OR ||

// const persona2 = {
//   nombre: "Juanito",
//   apellido: "Arcoiris",
//   edad: 17,
//   activo: false,
// }; //thruty

// const persona3 = null; //falsy

// console.log(persona2 || "NO existe esa persona");
// console.log(persona3 || "NO existe esa persona");

// let user = JSON.parse(localStorage.getItem("usuario")) || "NO hay usuario";

// console.log(user);

// let tienda;

// if (JSON.parse(localStorage.getItem("tienda"))) {
//   tienda = JSON.parse(localStorage.getItem("tienda"));
// } else {
//   tienda = [];
// }
// let tienda = JSON.parse(localStorage.getItem("tienda")) || [];

// console.log(tienda);

// // Nullish ??
// let opciones = {
//   limite: 0,
// };

// console.log(opciones.limite || 10);
// console.log(opciones.limite ?? 10);

// //op encadenamiento opcional  (?)
// console.log(persona3?.nombre);
// console.log(persona2.nombre);

//destructructuring
const persona1 = { nombre: "Homero" };
const persona2 = {
  id_persona: 3,
  nombre: "Juanito",
  apellido: "Arcoiris",
  edad: 17,
  activo: false,
  manager: persona1,
};
const clima = {
  location: "Buenos Aires",
  city: "CABA",
  latitude: -37,
  longitude: 50,
  tempe: { st: 2, t: 8 },
};

const { tempe } = clima;
console.log(tempe);

const { st: sensacion, t: temperatura } = tempe;
console.log(sensacion);
console.log(temperatura);

// console.log(persona2.nombre);
// console.log(persona2.apellido);

// const { edad, nombre, apellido, activo, manager, id_persona: id } = persona2;

// console.log(id);
// console.log(nombre);
// console.log(apellido);
// console.log(activo);
// console.log(edad);
// console.log(manager);
// //alias
// const { nombre: nombre_manager } = manager;
// console.log(nombre_manager);

// function desestructurar(obj) {
//   const { nombre, edad } = obj;
//   console.log(`Nombre: ${nombre}, edad: ${edad}`);
// }

//REACT como props
function desestructurar({ nombre, edad }) {
  console.log(`Nombre: ${nombre}, edad: ${edad}`);
}
desestructurar(persona2);

const numeros = [1, -4, 3, 7, 10];

// const [,,primero, ,segundo, tercero, cuarto] = numeros;

// console.log(numeros[0]);//equivale a
// console.log(primero);//esto
// console.log(segundo);
// console.log(cuarto);

//spread operator ...
const numerosPositivos = [2, 11, 17, 37];
const numerosNegativos = [-1, -4, -3, -7, -10];
console.log(Math.min(...numeros)); //1, 2, -4, 3, 7, 10
console.log(Math.max(...numeros)); //1, 2, -4, 3, 7, 10

// const conjuntoNumeros= numerosPositivos.concat(numerosNegativos)

const conjuntoNumeros = [...numerosPositivos, ...numerosNegativos];
console.log(conjuntoNumeros);

const persona5 = {
  nombre: "Lisa",
  edad: 8,
};
console.log(persona5);

const copiaPersona = {
  ...persona5,
  hobbie: "Tocar saxofon",
  edad: 9,
};

console.log(copiaPersona);

//parametros rest

function sumar(...nums){
  // console.log(nums);
  return nums.reduce((acc,num)=> acc + num, 0)
}


console.log(sumar(1, 4, 6, -2));
console.log(sumar(1));
console.log(sumar(1,2,6,0,9, 5.6));



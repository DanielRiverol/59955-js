// let n1 = prompt("ingrese el primer numero");
// let n2 = prompt("ingrese el segundo numero");
// // n1 = parseFloat(n1);
// // n2 = parseFloat(n2);
// // function suma(a, b) {
// //   return a + b;
// // }
// //funcion anonima
// // const suma = function (a,b){
// //   return a + b;
// // }

// function resta(a, b) {
//   return a - b;
// }
// //arrow function ()=>
// const suma = (a, b) => {
//   return a + b;
// };

// let resultado = suma(parseFloat(n1), +n2);
// console.log(resultado);

//objetos
//obj literal

const contacto1 = {
  nombre: "Kevin",
  edad: 20,
  tel: "1234567",
};

const contacto2 = {
  nombre: "Julieta",
  tel: "9876543223567",
  email: "juli@mail.com",
};
console.log(contacto1);
// console.log(contacto1.nombre);
// console.log(contacto1.edad);
// console.log(contacto1.email);
// console.log(contacto1["edad"]);
console.log(contacto1["tel"]);

// console.log(contacto2);
// console.log(contacto2.nombre);
// console.log(contacto2.edad);
// console.log(contacto2.email);
// console.log(contacto2["tel"]);
// console.log(contacto2["direccion"]);

// contacto1.email = "kevin@mail";
// contacto1.tel = "09876567";
// console.log(contacto1);
// console.log(contacto1.tel);

/// function constructora

function Personaje(nombre, direccion, edad, avatar) {
  this.nombre = nombre;
  this.direccion = direccion;
  this.edad = edad;
  this.avatar = avatar;

  //metodo
  this.saludar = function () {
    return "Hola soy " + this.nombre;
  };
}

let nombre = "Homero";
const personaje1 = new Personaje("Bart", "Av Siempre viva 742", 10, "img.jpg");
const personaje2 = new Personaje(
  nombre,
  "Av Siempre viva 742",
  38,
  "imghomero.jpg"
);
const personaje3 = new Personaje();
// console.log(personaje1);
// console.log(personaje1.nombre);
// console.log(personaje2);
// console.log(personaje2.nombre);
// console.log(personaje2.avatar);

// personaje3.nombre= "Marge"
// console.log(personaje3);

// let saludo = "Hola tarola";
// console.log(saludo);
// console.log(saludo.toLowerCase());
// console.log(saludo.length);
console.log(personaje1);

console.log(personaje1.saludar());

for (const propiedad in personaje1) {
  console.log(propiedad);
  console.log(personaje1[propiedad]);
}
//crear una funcion constructora de un libro : titulo, autor, editorail, anio. metodo que muestre todas la propiedades

//instanciar 3 libros (Los ingre4sos dela props van a ser por prompt)

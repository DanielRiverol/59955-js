// codigo js

// declaracion de variables
var nombre;
// var nombre;

// asignacion de valores
nombre = "Pedro"; //string o cadena
console.log("El nombre es: " + nombre);
let apellidoPaterno;
let apellidoMaterno = "Gonzalez"; //inicializacion

apellidoPaterno = "Perez";

let edad;
// console.log(edad);
edad = 20;
// console.log(edad);
edad = 21; //reasigando valores
// console.log(edad);

apellidoPaterno = "Rodriguez";

const PI = 3.1416;
// PI=10;//no se puede reasignar
const GRAVEDAD = 9.8;

let nombreCompleto = nombre + " " + apellidoPaterno; //concatenacion

let resultado = PI + GRAVEDAD;

edad = "24";

//metodos de entrada y dsalida de datos

// console.log(edad);

// console.log("--------");
// console.log(
//   "El resultado de la suma entre " + PI + " y " + GRAVEDAD + " es: " + resultado
// );
// console.log(PI + 4);

// alert("Hola el valor de resultado  es : "+ resultado)

// nombre =prompt("Hola, como te llamas?");
// console.log("El nombre es: " + nombre);

// let nombre2 = prompt("Hola, como te llamas?");

// console.log(nombre2);

let num1 = prompt("Ingrese el primer numero");
let num2 = parseFloat(prompt("Ingrese el segundo numero"));

//parsear
num1 = parseInt(num1);

let resultadoSuma = num1 + num2;
console.log("El resultado de la suma es: " + resultadoSuma);

//Variables
let nombre; //declaración => no números ni caracteres especiales salvo _ o $
nombre = "Pablo"; //asignación
let apellido = "López"; //inicialización

const CLAVE = "oruga"; //las constantes siempre se inicializan

// nombre=prompt("ingresa tu nombre")
// //alert(nombre)
// console.log(nombre);

// let nombre2 = prompt("Ingresa tu nombre en la constante");
// console.log(nombre2);
// nombre2 = prompt("Ingresa tu nuevo nombre en la constante");
// console.log(nombre2);
//CONDICIONALES si (condicion) entonces {algo}
if (false) {
  //bloque de ejeucion
  console.log("Hola mundo");
}

//operadores = asignacion  == comparacion

// if (CLAVE == "Oruga") {
//   //false
//   console.log("Pudiste ingresar");
// }

// let temp = 29;

// if (temp > 30) {
//   console.log("Hace Calor");
// } else {
//   console.log("Hace frio");
// }

// let talle = prompt("Ingresa la medida de tu cintura de pantalon");

// if (talle >= 100) {
//   console.log("Talle Xl");
// } else if (talle >= 80) {
//   console.log("Talle L");
// } else if (talle >= 60) {
//   console.log("Talle M");
// } else if (talle >= 40) {
//   console.log("Talle S");
// } else {
//   console.log("Talle XS");
// }

// let num= prompt("Ingresa tu edad")

// if(num === 18){
//     console.log("podes entrar");
// }

// if (isNaN(num)) {
//     console.log(num);
// }

// let valorBoleano=  5 === 5
// console.log(valorBoleano);
// if(valorBoleano){
//     console.log("Hola tarola");
// }

let usuarioGuardado = "Bart";
let passGuardado = "elbarto";

// let ingresoUsuario = prompt("Ingresa tu usuario");
// let ingresoPass = prompt("Ingresa tu password");

// //if anidado
// if (usuarioGuardado === ingresoUsuario) {
//    let ingresoPass = prompt("Ingresa tu password");
//   if (passGuardado === ingresoPass) {
//     console.log("Ya podes ingresar");
//   } else {
//     console.log("contrasena incorrecta");
//   }
// } else {
//   console.log("Usuario no encontrado");
// }

//modulo division %
//Operadores logicos &&   comparacion1 && comparacion2  devuelve true solo si las dos condiciones son true

//  if(10 == 10 && "Hola"=="hola"){//false
//     console.log('mensaje');
//  }
// let validacionUser = usuarioGuardado == ingresoUsuario;
// let validacionPass = passGuardado == ingresoPass;
// let validacionIngreso = validacionUser && validacionPass;

// if (validacionIngreso) {
//   console.log("Podes ingresar");
// } else {
//   console.log("credenciales incorrectas");
// }

//op OR || =>  comp1 || comp2,  true || true ,  true || false, false || true   #####  false | false => false

// if (
//   ingresoUsuario === "Bart" ||
//   ingresoUsuario == "bart" ||
//   ingresoUsuario === "BART"
// ) {
//   console.log("Hola Bart");
// }

//validacion de votantes

let edadObligatoria = 18;
let edadOptativa = 16;
let edadLimite = 69;
let edadUsuario = parseInt(prompt("Ingresa tu edad"));

if (edadUsuario >= edadObligatoria && edadUsuario <= edadLimite) {
  console.log("Esta obliggadom a votar");
} else if (edadUsuario >= edadOptativa || edadUsuario > edadLimite) {
  console.log("Podes voytar si queres");
} else {
  console.log("No podes votar");
}
//Pasar las comparaciones a variables booleanas
console.log("Fin del programa");

// let ingreso = prompt(
//   "Selecciona una bebida \n 1-Café \n 2- Té \n 3- Agua caliente"
// );

// if (ingreso == "1" || ingreso === "UNO") {
//   alert("Seleccionaste Café");
// } else if (ingreso == "2") {
//   alert("Seleccionaste Té");
// } else if (ingreso == "3") {
//   alert("Seleccionaste Agua caliente");
// } else {
//   alert("No seleccionaste una bebida");
// }

// switch (ingreso) {
//   case "1":
//   case "UNO"://no es tan comun
//     alert("Seleccionaste Café");
//     break;
//   case "2":
//     alert("Seleccionaste Té");
//     break;
//   case "3":
//     alert("Seleccionaste Agua caliente");
//   default:
//     alert("No seleccionaste una bebida");
//     break;
// }

//funcion => declaracion
// function saludar() {
//   //bloque de ejecucion
//   console.log("Hola tarola");
// }
function saludar() {
  //bloque de ejecucion
  let nombreIngresado = prompt("Ingresa tu nombre");
  console.log("Hola " + nombreIngresado);
}

//llamado
// saludar()
// saludar()
// saludar()
// saludar()

function saludarConParametros(taco) {
  console.log("Hola " + taco); //Julian, Pepe, Octavio
}
function saludarConMomento(momento, nombre) {
  console.log("Buenos/as " + momento + " " + nombre);
}
// let nombre = prompt("Ingresa tu nombre");
// let momento = prompt("Ingresa el momento del dia");
// // saludarConParametros("Julian")
// // saludarConParametros("Pepe")
// // saludarConParametros("Octavio")
// // saludarConParametros(1)
// // saludarConParametros(nombre)

// saludarConMomento(momento);

// let resultado = 0;

// function mostrar(valor) {
//   console.log(valor);
// }
// function sumar(n1, n2) {
//   resultado = n1 + n2;
// }

// console.log(resultado);

// sumar(3, 5);

// mostrar(resultado);

//devolver un valor o proceso
// function sumar(n1, n2) {
//   return n1 + n2;
// }
let resultado;
// console.log(resultado);
// resultado = sumar(2, 4);
// console.log(resultado);
// let resultado2= sumar(4,10)
// console.log(resultado2);

// console.log(sumar(resultado, resultado2));

//SCOPE o Ambito
// let variableGlobal = "Soy una variable global";
// console.log(variableGlobal);

// if (true) {
//     let variableGlobal = "Soy la variable local y solo vivo dentro del if";
//  console.log(variableGlobal);
// }

//  let index= "hola"
// for (let index = 0; index < 5; index++) {
//     console.log(index);

// }
// console.log(index);

// console.log(variableGlobal);

let res = 0;

function sumar(n1, n2) {
  let res = n1 + n2;
  return res;
}
function restar(n1, n2) {
  let res = n1 - n2;
  return res;
}
let resSuma=sumar(99,4)
console.log(resSuma);
restar(99,4)
console.log(res);



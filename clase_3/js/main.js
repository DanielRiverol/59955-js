//for (desde; hasta; actualizacion){}

// for (let i = 0; i <= 100; i = i + 1) {
//   console.log(i);
// }
// for (let i = 10; i >= 0; i = i - 1) {
//   console.log("Tiempo restante para el despegue: " + i);
// }
//i++ es igual a i=i+1
// for (let i = 1; i <= 3; i++) {
//   alert("Ya llegamos a la India");
//   alert("No");
// }
//Esto NO
// alert("Ya llegamos a la India");
// alert("No");
// alert("Ya llegamos a la India");
// alert("No");
// alert("Ya llegamos a la India");
// alert("No");

// alert("A ver... Ya!");

// let ingreso = prompt("Ingresa un numero");
// let limite = prompt(
//   "Ingresa un numero hasta donde queres el resulado de la tabla"
// );

// for (let i = -10; i <= limite; i++) {
//   let result = ingreso * i;
//   console.log(
//     "El resultado de la multiplicacion" + ingreso + " x " + i + " es: " + result
//   );
// }

//break

// for (let i = 0; i <= 10; i++) {
//     if (i == 5) {
//         // console.log(i);
//         break;
//     }
//     console.log(i);
// }

// let secret = "oruga";

// for (let i = 0; i < 3; i++) {
//   let ingreso = prompt("Ingresa la palabra secreta");
//   if (ingreso === secret) {
//     console.log("adivinaste");
//     break;
//   } else {
//     console.log("no adivinaste");
//   }
// }
//continue
// for (let i = 0; i <= 10; i++) {
//   if (i % 2 === 0) {
//     console.log("Es par");
//     continue;
//   }
//   console.log(i);
// }

//while
// let i = 0;
// while (i < 10) {
//   console.log(i);

//   //condicion de salida del bucle
//   i = i + 1; //i++
// }

// let ingreso = prompt("Ingresa un produto. Para salir ingresa 0");

// while (ingreso !== "0") {
//   console.log("El producto es " + ingreso);
//   //validar que el campo no este vacio

//   //condicion de salida del bucle
//   ingreso = prompt("Ingresa OTRO produto. Para salir ingresa 0");
// }

//do while

// let ingreso = "";//porque lo declare vacio
// do {
//   ingreso = prompt("Ingresa un produto. Para salir ingresa 0");

//     if (ingreso === "0") {
//       break;
//     }
//   console.log("El producto es " + ingreso);
// } while (ingreso !== "0");

// console.log("Compra finalizada");

//switch  //if elseif else
let ingreso = prompt("Ingresa tu nombre");
switch (ingreso) {
  case "Diego":
    console.log("Hola Diego");
    break;
  case "Daniel":
    console.log("Hola Daniel");
    break;
  case "Julieta":
    console.log("Hola Julieta");
  default:
    console.log("No conozco a " + ingreso);
    break;
}

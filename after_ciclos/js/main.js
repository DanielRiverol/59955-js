//El cajero automático
//Debemos generar un script para la operación de un cajero automático
/* El mismo tiene que: 
1- Mostrar un mensaje de bienvenida
2- Permitir hasta 3 intentos de ingreso con el PIN del cliente
  2a- Si ingresa correctamente dar mensaje de Bienvenida
  2b- Terminados los intentos informar al cliente que se comunique con el banco
3- Una vez ingresado mostrar las siguientes opciones en pantalla: 
  a- Saldo
  b- Retiro
  c- Depósito
  d- Salir 
4- Al finalizar mostrar mensaje
*/

// alert("Bienvenido al banco")
//Primer pantalla
let pinGuardado = "5701";
let ingresar = false;

for (let i = 3; i >= 1; i = i - 1) {
  let ingreso = prompt("Ingresa tu PIN");
  if (pinGuardado === ingreso) {
    alert("Bienvenido, ya podés operar");
    ingresar = true;
    break;
  } else {
    alert("Error ingrese nuevamente");
  }
}
console.log(ingresar);
// segunda pantalla
if (ingresar) {
  //true o un false
  let saldo = 20000;
  let opcion = prompt(
    "Elegí una opción: \n1 - Saldo. \n2 - Retiro de dinero. \n3 - Depósito. \nPresioná X para finalizar."
  );

  while (opcion != "x") {
    if (opcion == "1") {
      alert("Tu dsaldo es :" + saldo);
    } else if (opcion == "2") {
      let retiro = prompt("Ingresa el monto a depositar");

      if (retiro > saldo) {
        alert("Saldo insuficiente");
      } else {
        saldo = saldo - +retiro; //convertir a numero agregando el +
        alert("retiro exitoso tu saldo es " + saldo);
      }
    } else if (opcion == "3") {
      let deposito = prompt("Ingresa el monto a depositar"); // validar que el deposito no sea neagtivo
      saldo = saldo + +deposito;
    } else {
      alert("Opcion no valida");
    }

    //condicion de salida

    opcion = prompt(
      "Elegí una opción: \n1 - Saldo. \n2 - Retiro de dinero. \n3 - Depósito. \nPresioná X para finalizar."
    );
  }
} else {
  alert("Se te acabaron los intentos");
}

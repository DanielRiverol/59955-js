const horaActual = document.querySelector("#horaActual"),
  fechaActual = document.querySelector(".fecha-actual");


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
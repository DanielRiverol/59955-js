const servicios = [
  { id: 1, nombre: "limpieza de cutis", precio: 1200, img: "limpieza.jpg" },
  { id: 2, nombre: "masajes", precio: 1800, img: "masajes.jpg" },
  { id: 3, nombre: "electrodos", precio: 2800, img: "electrodos.jpg" },
  { id: 4, nombre: "manicura", precio: 1500, img: "manicuria.webp" },
  { id: 5, nombre: "uñas", precio: 1100, img: "esculpidas.webp" },
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
const cliente = {
  id: 234,
  nombre: "Julio",
  apellido: "Agostini",
  direccion: "Calle falsa 123",
  idPrestamo: 1
};
const cliente2 = {
  id: 235,
  nombre: "Julio",
  apellido: "Agostini",
  direccion: "Calle falsa 123",
  idPrestamo: [2, 3]
};

const prestamo = {
  id: 1,
  monto: 2000,
  plazo: 30,
  interes: 20,
  idCliente:234
};

// const prestamosActivos = []
// const carteClientes= []
// carteClientes.push(cliente,cliente2)
// prestamosActivos.push(prestamo)
// console.log(carteClientes);
// console.log(prestamosActivos);


// function buscarCliente(arr, id ){

//   //podre el id Del prestamo?
//   return arr.find(el => el.id === id)
// }

// buscarCliente(carteClientes, 234)

// const clienteEncontrado= buscarCliente(carteClientes, 234)

// console.log(clienteEncontrado);
// function buscarPrestamos(arr, id){
//   return arr.filter(el=> el.id===id)
// }

// console.log(buscarPrestamos(prestamosActivos, 1));//dentro de la funcion buscarPrestamos(arr idCliente)

function buscarPorNombre(arr, filtro){
//  return arr.find(el=> el.nombre === filtro)
 return arr.find(el=> el.nombre.includes(filtro.toLowerCase()))
}

const manicura= buscarPorNombre(servicios, "MaNiCuRa")
console.log(manicura);

class Book {
  constructor(title, author, isbn, year, cover) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.year = year;
    this.cover = cover;
  }

  getInfo = () => {
    return (
      "Título: " +
      this.title +
      "\nAutor: " +
      this.author +
      "\nISBN: " +
      this.isbn +
      "\nAño: " +
      this.year +
      "\nPortada: " +
      this.cover
    );
  };
}

const biblioteca = [];

const book1 = new Book(
  "Eloquent JavaScript",
  "Marijn Haverbeke",
  "978-1593279509",
  2018,
  "https://example.com/eloquent_javascript.jpg"
);

const book2 = new Book(
  "Clean Code: A Handbook of Agile Software Craftsmanship",
  "Robert C. Martin",
  "978-0132350884",
  2008,
  "https://example.com/clean_code.jpg"
);

const book3 = new Book(
  "The Pragmatic Programmer: Your Journey to Mastery",
  "Andrew Hunt, David Thomas",
  "978-0135957059",
  1999,
  "https://example.com/pragmatic_programmer.jpg"
);

const book4 = new Book(
  "JavaScript: The Good Parts",
  "Douglas Crockford",
  "978-0596517748",
  2008,
  "https://example.com/javascript_good_parts.jpg"
);

const book5 = new Book(
  "Design Patterns: Elements of Reusable Object-Oriented Software",
  "Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides",
  "978-0201633610",
  1994,
  "https://example.com/design_patterns.jpg"
);

// console.log(biblioteca);
biblioteca.push(book1, book2, book3, book4, book5);

// console.log(biblioteca);

//concat
const frutas = ["manzana", "pera"];
// console.log(frutas);

const verduras = ["apio", "brocoli"];
// console.log(verduras);

// const heladera=[]

// heladera.push(frutas)
// heladera.push(verduras)
const heladera = frutas.concat(verduras);
// console.log(heladera);

// for (let i = 0; i < heladera.length; i++) {
//   const element = heladera[i];
//   console.log(element);
// }

// for (const key in book1) {
//   console.log(key);
// }
//forof
for (const comida of heladera) {
  // console.log(comida);
}

function sumarRango(inicio, fin) {
  let total = 0;
  for (let i = inicio; i <= fin; i++) {
    total = total + i;
  }
  return total;
}



let total = 0;

// for (let i = 1; i <= 10; i++) {
//   total = total + i;
//   console.log("Valor de total en la vuelta " + i + " = " + total);
// }
// console.log("Valor de total = " + total);
// let total1 = 0;

// for (let i = 2; i <= 20; i++) {
//   total1 = total1 + i;
//   console.log("Valor de total en la vuelta " + i + " = " + total1);
// }
// console.log("Valor de total = " + total1);

// console.log(sumarRango(1, 10));
// console.log(sumarRango(2, 210));
// console.log(sumarRango(-10, 10));
// console.log(sumarRango(0, 1));

function mayorQue(n) {
  return (m) => m > n;
}
const mayorQueDiez = mayorQue(10); //(m)=> m > 10

// console.log(mayorQueDiez);

// console.log(mayorQueDiez(12)); //(12)=> 12 > 10 = true
// console.log(mayorQueDiez(8)); //(8)=> 8 > 10 = false

function asignarOperacion(operacion){
  switch (operacion) {
    case "+":
      return (n1, n2)=> n1 + n2;
      break;
    case "-":
      return (n1, n2)=> n1 - n2;
      break;
  
    default:
      return "Op no valida"
      break;
  }
}

// const sumar = asignarOperacion("+")
// const restar = asignarOperacion("-")

// console.log(sumar(12,4));
// console.log(restar(12,4));

//recibir unn funcion
const nums = [1, 3, 2, 5, 1, 3, 10];


// function porCadaUno(arr, fn){
//   for (const element of arr) {//nums
//     fn(element)//console.log(element)alert(element)
//   }
// }
// // porCadaUno(biblioteca, console.log)
// // porCadaUno(nums, console.log)

// const cuadruple= []
// function porCuatro(n){
//   return cuadruple.push(n * 4)
// }



// // porCadaUno(nums, porCuatro) //v1

// porCadaUno(nums, (el)=>{
//   cuadruple.push(el * 4)
// })
// console.log(nums);

// console.log(cuadruple);
const servicios = [
  { id: 1, nombre: "limpieza de cutis", precio: 1200, img: "limpieza.jpg" },
  { id: 2, nombre: "masajes", precio: 1800, img: "masajes.jpg" },
  { id: 3, nombre: "electrodos", precio: 2800, img: "electrodos.jpg" },
  { id: 4, nombre: "manicura", precio: 1500, img: "manicuria.webp" },
  { id: 5, nombre: "uñas", precio: 1300, img: "esculpidas.webp" },
  { id: 6, nombre: "mascarillas", precio: 1900, img: "mascarilla.jpeg" },
  { id: 7, nombre: "microblanding", precio: 5800, img: "microblanding.png" },
  { id: 8, nombre: "mascarillas", precio: 2300, img: "mascarilla.jpeg" },
];
const cuadruple = []
//.forEach()
servicios.forEach((servicio)=>{
  // console.log(servicio);
  
} )

// nums.forEach((num)=>{
//   return cuadruple.push( num * 4)
// })

// console.log(cuadruple);


//find() devuelve el primer elemento que coincida

const encontrado= servicios.find((el)=> el.precio > 2000)
const encontraElUno= nums.find(el=> el == 1)

console.log(encontrado);

// filter() devuelve un array con todas las coincidencia


const filtrar = servicios.filter(el=> el.precio > 2000)
const filtrarPorNombre = servicios.filter(el=> el.nombre.includes("ma"))

console.log(filtrarPorNombre);

filtrarPorNombre.forEach(el=>{
  console.log(el.nombre);
  
})
//aramr una funcion que compare por precio < o >
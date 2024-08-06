//crear una funcion constructora de un libro : titulo, autor, editorial, anio. metodo que muestre todas la propiedades.

//objeto literal
const dracula = {
  title: "Drácula",
  author: "Bram Stoker",
  isbn: 90288374938,
  year: 1897,
  cover: "img/dracula.jpg",
  getInfo: () => {
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
  },
};

// function Book(title, author, isbn, year, cover) {
//   this.title = title;
//   this.author = author;
//   this.isbn = isbn;
//   this.year = year;
//   this.cover = cover;

//   this.getInfo = () => {
//     return (
//       "Título: " +
//       this.title +
//       "\nAutor: " +
//       this.author +
//       "\nISBN: " +
//       this.isbn +
//       "\nAño: " +
//       this.year +
//       "\nPortada: " +
//       this.cover
//     );
//   };
// }

//class
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

const frankenstein = new Book(
  "Frankenstein",
  "Mary Shelley",
  90373674837,
  1818,
  "img/frank.png"
);

// console.log(dracula["title"]);
// console.log(dracula.getInfo());

// console.log(frankenstein.getInfo());

//arrays
const array = [];

// console.log(array);
const cajonCubiertos = ["tenedor", "cuchara", "cuchillo", "fosforos"];
// console.log(cajonCubiertos);
const numeros = [-31, 4, 2, 6, 7, 99, 24, 3];
// console.log(numeros);

const mixto = [1, "tenedor", true, ["manzana"], numeros];

// console.log(mixto);

//acceder a los elementos
// console.log(cajonCubiertos[3]);
// console.log(cajonCubiertos.length);

// console.log(numeros[0]);
// console.log(numeros.length);

console.log(mixto);
// console.log(mixto.length);
// console.log(mixto[3][0]);
// const array2 = mixto[3];

// console.log(array2[0]);

for (let i = 0; i < cajonCubiertos.length; i++) {
  const element = cajonCubiertos[i];
  // console.log(element);
}

// mixto[6]= "Banana"
// console.log(mixto);

// array[0]="hola"

console.log(array);

//metodos
// agregar elementos push(valor) al final

array.push("Juan");
array.push("Gustavo", "Pedro", "Julieta");

// console.log(array);
// // agregar elementos unshift(valor) al inicio

// array.unshift("Mario", "Serafina");
// console.log(array);

// // quitar elementos del final pop()

// array.pop();
// // array.pop()

// console.log(array);
// // quitar elementos del inicio shift()
// array.shift();

// console.log(array);

// //quitar de determinada posicion splice(pos, cant de elemetos)

// array.splice(1,2);
console.log(array);

//indexOf()
console.log(array.indexOf("Juan"));

//includes()

console.log(array.includes("Juan")); // esta juan? si o no
console.log(array.indexOf("Juan")); //donde esta?

//arrays de obj

const biblioteca = [dracula,{title:"Harry Potter 1"}];

biblioteca.push(frankenstein)


console.log(biblioteca.includes(dracula));//esta?
console.log(biblioteca.indexOf(dracula));//donde?

console.log(biblioteca[0]);//guardalo en una varible

//si el libro se vendio como lo quito de mi biblioteca?

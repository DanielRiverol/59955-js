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

function sumarRango(inicio, fin) {
  let total = 0;
  for (let i = inicio; i <= fin; i++) {
    total = total + i;
  }
  return total;
}

const nums = [1, 3, 2, 5, 1, 3, 10];


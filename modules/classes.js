import Book from './bookClass.js';

class Books {
  constructor() {
    this.books = [];
    this.id = 0;
  }

  addBook = (title, author) => {
    this.id += 1;
    const book = new Book(title, author, this.id);
    this.books.push(book);
    localStorage.setItem('local-books', JSON.stringify(this.books));
  }

  removeBook = (idd) => {
    this.books = this.books.filter((book) => book.id !== parseInt(idd, 10));
    if (this.books.length === 0) {
      this.id = 0;
    } else {
      this.id = this.books[this.books.length - 1].id;
    }
    localStorage.setItem('local-books', JSON.stringify(this.books));
  }
}

const allBooks = new Books();

export default allBooks;
let id = 0;

class Book {
  constructor(title, author, id) {
    this._title = title;
    this._author = author;
    this._id = id;
  }

  get title() {
    return this._title;
  }

  get author() {
    return this._author;
  }

  get id() {
    return this._id;
  }
}

class Books {
  constructor() {
    this.books = [];
  }

  addBook(title, author) {
    id++;
    const book = new Book(title, author, id);
    this.books.push(book);
    localStorage.setItem('local-books', JSON.stringify(this.books));
  }

  removeBook(idd) {
    this.books = this.books.filter((x) => x._id !== parseInt(idd));
    if (this.books.length === 0) {
      id = 0;
    } else {
      id = this.books[this.books.length - 1]._id;
    }
    localStorage.setItem('local-books', JSON.stringify(this.books));
  }
}

export const allBooks = new Books();

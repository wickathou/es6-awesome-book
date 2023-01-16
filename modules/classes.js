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
    this.id = 0;
  }

  addBook = (title, author) => {
    this.id++;
    const book = new Book(title, author, this.id);
    this.books.push(book);
    localStorage.setItem('local-books', JSON.stringify(this.books));
  }

  removeBook = (idd) => {
    this.books = this.books.filter((x) => x._id !== parseInt(idd));
    if (this.books.length === 0) {
      this.id = 0;
    } else {
      this.id = this.books[this.books.length - 1]._id;
    }
    localStorage.setItem('local-books', JSON.stringify(this.books));
  }
}

const allBooks = new Books();

export default allBooks
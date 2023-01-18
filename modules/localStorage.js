import bookElement from './dom.js';

const storedBooksCheck = (booksSource, localBooks, booksListed) => {
  if (localBooks?.length > 0) {
    booksSource.id = localBooks[localBooks.length - 1].id;
    booksSource.books = localBooks;
    booksSource.books.forEach((book) => {
      bookElement(booksListed, book);
    });
  }
};

export default storedBooksCheck;
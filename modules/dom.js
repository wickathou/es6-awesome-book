const bookElement = (booksListed, bookData) => {
  const bookItem = document.createElement('li');
  bookItem.id = `${bookData._id}`;
  bookItem.classList = 'books';
  const div = document.createElement('div');
  div.classList = 'books-info-div';
  const bookItemTitle = document.createElement('h2');
  bookItemTitle.textContent = `"${bookData._title}" by`;
  const bookItemAuthor = document.createElement('h3');
  bookItemAuthor.textContent = bookData._author;
  bookItemAuthor.classList = 'book-author';
  const bookRemoveButton = document.createElement('button');
  bookRemoveButton.textContent = 'Remove';
  bookRemoveButton.classList = `button ${bookData.id}`;
  div.append(bookItemTitle, bookItemAuthor);
  bookItem.append(div, bookRemoveButton);
  booksListed.appendChild(bookItem);
};

export default bookElement;
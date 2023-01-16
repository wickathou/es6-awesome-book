import bookElement from './dom.js';

const add = (booksSource, addBtn, title, author, booksListed) => {
  addBtn.addEventListener(('click'), ((e) => {
    e.preventDefault();
    if (author.value && title.value) {
      booksSource.addBook(title.value, author.value);
      bookElement(booksListed, { _title: title.value, _author: author.value, _id: booksSource.id });
      author.value = '';
      title.value = '';
    }
  }));
};

export default add;
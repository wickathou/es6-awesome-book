const booksAdd = document.querySelector('.books-add');
const bookStored = document.querySelector('.books-stored');
const contactForm = document.querySelector('.contact-form');

document.querySelector('.nav').addEventListener('click', ((e) => {
  if (e.target.innerText === 'List') {
    bookStored.classList.add('books-stored-appear');
    booksAdd.classList.add('books-add-disappear');
    contactForm.classList.add('contact-form-disappear');
  }
  if (e.target.innerText === 'Add new') {
    bookStored.classList.remove('books-stored-appear');
    booksAdd.classList.remove('books-add-disappear');
    contactForm.classList.add('contact-form-disappear');
  }
  if (e.target.innerText === 'Contact') {
    bookStored.classList.remove('books-stored-appear');
    booksAdd.classList.add('books-add-disappear');
    contactForm.classList.remove('contact-form-disappear');
  }
}));
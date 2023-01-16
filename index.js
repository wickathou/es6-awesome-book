import { allBooks } from './modules/classes.js';
import { add } from './modules/add.js';
import { remove } from './modules/remove.js';
import { storedBooksCheck } from './modules/localStorage.js';

// DOM elements
const addButton = document.getElementById('add');
const newBookTitle = document.getElementById('title');
const newBookAuthor = document.getElementById('author');
const bookList = document.getElementById('book-list');
const storedBooks = JSON.parse(localStorage.getItem('local-books'));

storedBooksCheck(allBooks, storedBooks, bookList);

add(allBooks, addButton, newBookTitle, newBookAuthor, bookList);

remove(allBooks, bookList);
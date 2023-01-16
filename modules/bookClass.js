// Removed to follow proper private property convention
/* eslint-disable no-underscore-dangle */

export default class Book {
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
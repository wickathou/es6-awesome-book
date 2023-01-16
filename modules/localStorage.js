export const storedBooksCheck = (localBooks) => {
  if (localBooks?.length > 0) {
    id = localBooks[localBooks.length - 1]._id;
    allBooks.books = localBooks;
    allBooks.books.forEach((x) => {
      bookElement(x);
    });
  }
}
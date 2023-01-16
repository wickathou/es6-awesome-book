const remove = (booksSource, booksListed) => {
  booksListed.addEventListener('click', ((e) => {
    if (e.target.classList[0] === 'button') {
      booksSource.removeBook(e.target.parentElement.id);
      e.target.parentElement.remove();
    }
  }));
};

export default remove;
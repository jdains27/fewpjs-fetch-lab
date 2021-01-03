const Url = 'https://anapioficeandfire.com/api/books';

const fetchBooks = () => {
  return fetch(Url)
    .then( (response) => response.json() )
    .then( (data) => renderBooks(data) );
}

const renderBooks = (books) => {
  const main = document.querySelector('main');
  books.forEach((book) => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  fetchBooks();
});
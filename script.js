//create empty array
const myLibrary = [];

//constructor funtion to build new Book objects
function Book(author, title, pages, read) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
  this.addBookToLibrary();
}

//adding method to Book prototype so all instances of Book can share function to push Book to array.
Book.prototype.addBookToLibrary = function () {
  myLibrary.push(this);
};

//function to display form when clicking button
function openForm() {
  document.getElementById('formHeader').style.display = 'block';
}

//function to close form after submitting book
function closeForm() {
  document.getElementById('formHeader').style.display = 'none';
}

//function to add new book to array
function addToArray() {
  const author = document.getElementById('author').value;
  const title = document.getElementById('title').value;
  const pages = document.getElementById('pages').value;
  const read = document.getElementById('read').value;

  //form validation; if one of the following are not present, alert and exit function
  if (author === '' || title === '' || pages === '') {
    alert('Please fill out all required fields: Author, Title, and Pages.');
    return;
  }

  //creating a new instance of book, also includes pushing new book to current array
  const newBook = new Book(author, title, pages, read);

  //resetting the form to add a new book
  document.getElementById('bookform').reset();

  //run the build table function, take in array that includes new book
  buildTable(myLibrary);

  //fun function to close form
  closeForm();
}

//function to build table
function buildTable(array) {
  //Grab the table container
  const tableContainer = document.getElementById('tableContainer');

  //Clear the table if there is one
  tableContainer.innerHTML = '';

  //Create a blank table
  const table = document.createElement('table');

  //create a header row
  const headerRow = document.createElement('tr');

  //create array that lists rows of header
  const headers = ['Author', 'Title', 'Pages', 'Read', 'Read Choice', 'Remove Book'];

  //create header cells and append them to the header row
  headers.forEach((headerText) => {
    const headerCell = document.createElement('th');
    headerCell.textContent = headerText;
    headerRow.appendChild(headerCell);
  });

  //append the header row to the table
  table.appendChild(headerRow);

  //create an array that creates each book row
  array.forEach((book, index) => {
    const row = document.createElement('tr');

    const authorCell = document.createElement('td');
    authorCell.textContent = book.author;
    row.appendChild(authorCell);

    const titleCell = document.createElement('td');
    titleCell.textContent = book.title;
    row.appendChild(titleCell);

    const pagesCell = document.createElement('td');
    pagesCell.textContent = book.pages;
    row.appendChild(pagesCell);

    const readCell = document.createElement('td');
    readCell.textContent = book.read;
    row.appendChild(readCell);

    const flipCell = document.createElement('td');
    const flipButton = document.createElement('button');
    flipButton.textContent = 'Flip Read';
    flipCell.appendChild(flipButton);
    flipButton.addEventListener('click', () => {
      book.read = book.read === 'Read' ? 'Not Read' : 'Read';
      buildTable(myLibrary);
    });
    row.appendChild(flipCell);

    const cancelCell = document.createElement('td');
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', () => {
      removeBook(index);
    });
    cancelCell.appendChild(removeButton);
    row.appendChild(cancelCell);

    table.appendChild(row);
  });

  tableContainer.appendChild(table);
}

function removeBook(index) {
  myLibrary.splice(index, 1);
  buildTable(myLibrary);
}

buildTable(myLibrary);

document.getElementById('bookform').addEventListener('submit', function (event) {
  event.preventDefault();
  addToArray();
});

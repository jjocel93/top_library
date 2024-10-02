function Book(author, title, pages, read) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
  this.addBookToLibrary();
}

Book.prototype.addBookToLibrary = function () {
  myLibrary.push(this);
};

const myLibrary = [];

const book1 = new Book('John Doe', 'A Good Book', '69 pages', 'Read');
const book2 = new Book('Jane Doe', 'A Great Book', '100 pages', 'Not Read');
const book3 = new Book('Bas Jansen', 'A Gezellig Book', '199 pages', 'Read');

function openForm() {
  document.getElementById('formHeader').style.display = 'block';
}

function closeForm() {
  document.getElementById('formHeader').style.display = 'none';
}

function buildTable(array) {
  const table = document.createElement('table'); //create empty table element

  const headerRow = document.createElement('tr');

  const headers = ['Author', 'Title', 'Pages', 'Read']; //array to list column headers
  headers.forEach((headerText) => {
    //loop through each header
    const headerCell = document.createElement('th'); //create header cell and content
    headerCell.textContent = headerText; //set text of header cell
    headerRow.appendChild(headerCell); //append header to row
  });

  table.appendChild(headerRow); //append header to table

  array.forEach((book) => {
    //loop through each book

    const row = document.createElement('tr'); //create table row tr

    const authorCell = document.createElement('td'); //create author cell and the content
    authorCell.textContent = book.author; //set text of cell to author
    row.appendChild(authorCell); //append cell to row

    const titleCell = document.createElement('td'); //create title cell and content
    titleCell.textContent = book.title; //set text of cell to title
    row.appendChild(titleCell); // append cell to row

    const pagesCell = document.createElement('td'); //create pages cell and content
    pagesCell.textContent = book.pages; //set text of cell to pages
    row.appendChild(pagesCell); //append cell to row

    const readCell = document.createElement('td'); //create read cell and content
    readCell.textContent = book.read; //set text of cell to read
    row.appendChild(readCell); //append cell to row

    table.appendChild(row); //append row to table
  });

  document.getElementById('tableContainer').appendChild(table); //append full table to container element in html
}

buildTable(myLibrary); //run function

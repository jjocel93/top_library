const myLibrary = [];

function Book(author, title, pages, read) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
  this.addBookToLibrary = function () {
    myLibrary.push(this);
  };
  this.addBookToLibrary();
}

const book1 = new Book('John Doe', 'A Good Book', '69 pages', 'Read');

const book2 = new Book('Jane Doe', 'A Great Book', '100 pages', 'Not Read');

const book3 = new Book('Bas Jansen', 'A Gezellig Book', '199 pages', 'Read');



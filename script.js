function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = () => {
    if (read == 'read') {
      return 'I have read it!';
    } else if (read == 'not read') {
      return 'not read yet';
    } else {
      return 'don\'t know if I have read it'
    }
  }
  this.info = () => `${this.title} by ${this.author}, ${this.pages} pages, ${this.read(read)}`;
}

const theHobbit = new Book('The Hobbit', 'J.R.R Tolkien', '295', 'not read');
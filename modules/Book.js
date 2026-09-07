const { randomUUID } = require('crypto');

class Book {
    constructor(title = '', description = '', authors = '', 
        favorite = '', fileCover = '', fileName = '', 
        fileBook = ''
     ) {
        this.id = randomUUID();
        this.title = title;
        this.description = description;
        this.authors = authors;
        this.favorite = favorite === "true";
        this.fileCover = fileCover;
        this.fileName = fileName;
        this.fileBook = fileBook;
    }
}

module.exports = Book;
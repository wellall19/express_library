const Book = require('../modules/Book');

const library = {
    books: [
        new Book('Book 1', 'Description 1', 'Author 1', 'true', 'cover1.jpg', 'file1.pdf', 'file1'),
        new Book('Book 2', 'Description 2', 'Author 2', 'false', 'cover2.jpg', 'file2.pdf', 'file2'),
        new Book('Book 3', 'Description 3', 'Author 3', 'true', 'cover3.jpg', 'file3.pdf', 'file3')
    ],
};

module.exports = library;
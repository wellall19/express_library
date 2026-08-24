const express = require('express');
const Book = require('./Book');

const library = {
    books: [
        new Book('Book 1', 'Description 1', 'Author 1', 'Yes', 'cover1.jpg', 'file1.pdf'),
        new Book('Book 2', 'Description 2', 'Author 2', 'No', 'cover2.jpg', 'file2.pdf'),
        new Book('Book 3', 'Description 3', 'Author 3', 'Yes', 'cover3.jpg', 'file3.pdf')
    ],
};

const app = express();
app.use(express.json());

app.post('/api/user/login', (req, res) => {
    res.status(201);
    res.json({id: 1, mail: "test@mail.ru"})
})

app.get('/api/books', (req, res) => {
    const {books} = library;
    res.json(books);
});

app.get('/api/books/:id', (req, res) => {
    const {books} = library;
    const {id} = req.params;
    const idx = books.findIndex(el => el.id === id);
    if ( idx !== -1) {
        res.json(books[idx]);
    } else {
        res.status(404);
        res.json('Code: 404');
    }
});

app.post('/api/books', (req, res) => {
    const {books} = library;
    const {title, description, authors, favorite, fileCover, fileName} = req.body;

    const newBook = new Book(title, description, authors, favorite, fileCover, fileName);
    books.push(newBook);

    res.json(newBook);
});

app.put('/api/books/:id', (req, res) => {
    const {books} = library;
    const {title, description, authors, favorite, fileCover, fileName} = req.body;
    const {id} = req.params;
    const idx = books.findIndex(el => el.id === id);

    if (idx !== -1) {
        books[idx] = {
            ...books[idx],
            title,
            description,
            authors,
            favorite,
            fileCover,
            fileName,
        };

        res.json(books[idx]);
    } else {
        res.status(404);
        res.json('Code: 404');
    }
});

app.delete('/api/books/:id', (req, res) => {
    const {books} = library;
    const {id} = req.params;
    const idx = books.findIndex(el => el.id === id);

    if (idx !== -1) {
        books.splice(idx, 1);
        res.json('ok')
    } else {
        res.status(404);
        res.json('Code: 404');
    }
})

const port = 3000;
app.listen(port);
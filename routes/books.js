const express = require('express');
const router = express.Router();
const library = require('../data/Library');
const Book = require('../modules/Book');
const fileMulter = require('../middleware/file');
const { route } = require('./books');

router.get('/', (req, res) => {
    const {books} = library;
    res.json(books);
});

router.get('/:id', (req, res) => {
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

router.get('/:id/download', (req,res) => {
    const {books} = library;
    const {id} = req.params;
    const idx = books.findIndex(el => el.id === id);
    if (idx !== -1) {
        res.download(books[idx].fileBook, books[idx].fileName);
    } else {
        res.status(404);
        res.json('Code: 404');
    }
});

router.post('/', 
    fileMulter.fields([
        {name: 'cover', maxCount: 1},
        {name: 'book', maxCount: 1}
    ]),
    (req, res) => {
    console.log(req.files)
    const {books} = library;
    const {title, description, authors, favorite} = req.body;
    const fileCover = req.files.cover[0].path;
    const fileName = req.files.book[0].originalname;
    const fileBook = req.files.book[0].path;

    const newBook = new Book(title, description, authors, favorite, fileCover, fileName, fileBook);
    books.push(newBook);

    res.json(newBook);
});

router.put('/:id', (req, res) => {
    const {books} = library;
    const {title, description, authors, favorite} = req.body;
    const {id} = req.params;
    const idx = books.findIndex(el => el.id === id);

    if (idx !== -1) {
        books[idx] = {
            ...books[idx],
            title,
            description,
            authors,
            favorite,
        };

        res.json(books[idx]);
    } else {
        res.status(404);
        res.json('Code: 404');
    }
});

router.delete('/:id', (req, res) => {
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
});


module.exports = router;
const express = require('express');
const router = express.Router();
const library = require('../data/Library');
const Book = require('../modules/Book');
const fileMulter = require('../middleware/file');

const COUNTER_URL = process.env.COUNTER_URL || 'http://localhost:3001';

router.get('/', (req, res) => {
    const {books} = library;
    res.render('books/index', {
        title: "Список книг",
        books: books,
    });
});

router.get('/create', (req, res) => {
    res.render('books/create', {
        title: "Новая книга",
        book: {},
    });
});

router.post('/create', (req, res) => {
    const {books} = library;
    const {title, description, authors} = req.body;

    const newBook = new Book(title, description, authors, false, "fileCover", "fileName", "fileBook");
    books.push(newBook);

    res.redirect('/books');
});

router.get('/update/:id', (req, res) => {
    const {books} = library;
    const {id} = req.params;
    const idx = books.findIndex(el => el.id === id);

    if (idx === -1) {
        return res.redirect('/404')
    }

    res.render('books/update', {
        title: "Редактирование книги",
        book: books[idx],
    });
});

router.post('/update/:id', (req, res) => {
    const {books} = library;
    const {id} = req.params;
    const {title, description, authors} = req.body;
    const idx = books.findIndex(el => el.id === id);

    if (idx === -1) {
        return res.redirect('/404')
    }

    books[idx] = {
        ...books[idx],
        title,
        description, 
        authors,
    };

    res.redirect(`/books/${id}`);
});

router.get('/:id', async (req, res) => {
    const {books} = library;
    const {id} = req.params;
    const idx = books.findIndex(el => el.id === id);
    
    if (idx === -1) {
        return res.redirect('/404');
    }

    let views = 0;
    try {
        const response = await fetch(`${COUNTER_URL}/counter/${id}/incr`, { method: 'POST' });
        const data = await response.json();
        views = data.count;
    } catch (err) {
        console.error('Не удалось связаться с counter-service:', err.message);
    }

    res.render('books/view', {
        title: "Книга",
        book: books[idx],
        views
    });
});

router.post('/delete/:id', (req, res) => {
    const {books} = library;
    const {id} = req.params;
    const idx = books.findIndex(el => el.id === id);

    if (idx === -1) {
        return res.redirect('/404');
    }
    books.splice(idx, 1);
    res.redirect('/books');
});

module.exports = router;
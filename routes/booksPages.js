const express = require('express');
const router = express.Router();
const Books = require('../modules/Book');
const fileMulter = require('../middleware/file');

const COUNTER_URL = process.env.COUNTER_URL || 'http://localhost:3001';

router.get('/', async (req, res) => {
    try {
        const library = await Books.find().select('-__v');
        res.render('books/index', {
        title: "Список книг",
        books: library,
        });
    } catch (e) {
        return res.redirect('/404')
    } 
});

router.get('/create', (req, res) => {
    res.render('books/create', {
        title: "Новая книга",
        book: {},
    });
});

router.post('/create', async (req, res) => {
    const {title, description, authors, favorite, fileCover, fileName} = req.body;
    const newBook = new Books({
        title: title,
        description: description,
        authors: authors,
        favorite: favorite,
        fileCover: fileCover,
        fileName: fileName,
    });
    try {
        await newBook.save();
        res.redirect('/books');
    } catch (e) {
        return res.redirect('/404')
    }
});

router.get('/update/:id', async (req, res) => {
    const {id} = req.params;
    try {
        const book = await Books.findById(id);
        if (!book) {
            return res.redirect('/404')
        } else {
            res.render('books/update', {
            title: "Редактирование книги",
            book: book,
        });
        }
    } catch (e) {
        return res.redirect('/404')
    }
});

router.post('/update/:id', async (req, res) => {
    const {id} = req.params;
    const {title, description, authors, favorite, fileCover, fileName} = req.body;
    const newBook = {
        title: title,
        description: description,
        authors: authors,
        favorite: favorite,
        fileCover: fileCover,
        fileName: fileName,
    };
    try {
        const updatedBook = await Books.findByIdAndUpdate(id, newBook, {new: true});
        if (!updatedBook) {
            return res.redirect('/404')
        } else {
            res.redirect(`/books/${id}`);
        }
    } catch (e) {
        return res.redirect('/404')
    }
});

router.get('/:id', async (req, res) => {
    const {id} = req.params;
    let views = 0;
    try {
        const book = await Books.findById(id);
        if (!book) {
            return res.redirect('/404')
        } else {
            try {
                const response = await fetch(`${COUNTER_URL}/counter/${id}/incr`, { method: 'POST' });
                const data = await response.json();
                views = data.count;
            } catch (err) {
                console.error('Не удалось связаться с counter-service:', err.message);
            }
            res.render('books/view', {
                title: "Книга",
                book: book,
                views
            });
        }
    } catch (err) {
        return res.redirect('/404')
    }
});

router.post('/delete/:id', async (req, res) => {
    const {id} = req.params;

    try {
        const book = await Books.findByIdAndDelete(id);
        if (!book) {
            return res.redirect('/404')
        } else {
            res.redirect('/books');
        }
    } catch (e) {
        return res.redirect('/404')
    } 
});

module.exports = router;
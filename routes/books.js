const { myContainer } = require('../container');
const { BooksRepository }= require('../dist/BooksRepository');
const express = require('express');
const router = express.Router();
const Books = require('../modules/Book');

router.get('/ioc/:id', async (req, res, next) => {
    try {
        const repo = myContainer.get(BooksRepository);
        const book = await repo.getBook(req.params.id);
        if (!book) {
            res.status(404).json('Code: 404');
        } else {
            res.json(book);
        }
    } catch (e) {
        res.status(500).json(e);
    }
})

router.get('/', async (req, res) => {
    try {
        const library = await Books.find().select('-__v');
        res.json(library)
    } catch (e) {
        res.status(500).json(e);
    }
});

router.get('/:id', async (req, res) => {
    const {id} = req.params;
    try {
        const book = await Books.findById(id).select('-__v');
        if (!book) {
            res.status(404).json('Code: 404');
        } else {
            res.json(book);
        }
    } catch (e) {
        res.status(500).json(e);
    }
});

router.post('/', async (req, res) => {
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
        res.json(newBook);
    } catch (e) {
        res.status(500).json(e);
    }
});

router.put('/:id', async (req, res) => {
    const {id} = req.params;
    const {title, description, authors, favorite, fileCover, fileName} = req.body;
    const updatedBook = {
        title: title,
        description: description,
        authors: authors,
        favorite: favorite,
        fileCover: fileCover,
        fileName: fileName,
    };
    try {
        const updatedBook = await Books.findByIdAndUpdate(id, updatedBook, {new: true});
        if (!updatedBook) {
            res.status(404).json('Code: 404');
        } else {
            res.json(updatedBook);
        }
    } catch (e) {
        res.status(500).json(e);
    }
});

router.delete('/:id', async (req, res) => {
    const {id} = req.params;
    try {
        await Books.findByIdAndDelete(id);
        res.json('ok')
    } catch (e) {
        res.status(500).json(e);
    }
});


module.exports = router;
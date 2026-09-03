const express = require('express');
const bookRouter = require('./routes/books.js');
const bookPagesRouter = require('./routes/booksPages.js');
const userRouter = require('./routes/user.js');
const errorMiddleware = require('./middleware/error.js');

const app = express();

app.use(express.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.use('/api/books', bookRouter);
app.use('/books', bookPagesRouter);
app.use('/api/user', userRouter);

app.get('/', (req, res) => {
    res.render('index', {title: 'Библиотека'});
});

app.use(errorMiddleware);

const port = 3000;
app.listen(port);
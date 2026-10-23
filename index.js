require('reflect-metadata');
const express = require('express');
const mongoose = require('mongoose');
const bookRouter = require('./routes/books.js');
const bookPagesRouter = require('./routes/booksPages.js');
const userRouter = require('./routes/user.js');
const errorMiddleware = require('./middleware/error.js');
const session = require('express-session');
const passport = require('./config/user.js');

const app = express();

app.use(session({
    secret: 'secret'
}));
app.use(passport.initialize());
app.use(passport.session());

app.use(express.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.use('/api/books', bookRouter);
app.use('/books', bookPagesRouter);
app.use('/api/user', userRouter);

app.get('/', (req, res) => {
    res.render('user/home', { title: 'Библиотека', user: req.user, username: req.user ? req.user.username : undefined });
});

app.use(errorMiddleware);

const port = 3000;

async function start() {
    try {
        await mongoose.connect(process.env.MONGO_URL || 'mongodb://root:example@localhost:27017/mydb?authSource=admin');
        app.listen(port, () => {
            console.log(`Server is running jn port ${port}`);
        })
    } catch (e) {
        console.log(e);
    }
}

start();
const express = require('express');
const bookRouter = require('./routes/books.js');
const userRouter = require('./routes/user.js');
const Book = require('./modules/Book');

const app = express();

app.use(express.json());

app.use('/api/books', bookRouter);
app.use('/api/user', userRouter);



const port = 3000;
app.listen(port);
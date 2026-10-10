require('reflect-metadata');
const { Container } = require('inversify');
const { BooksRepository } = require('./dist/BooksRepository');

const myContainer = new Container();
myContainer.bind(BooksRepository).toSelf();

module.exports = { myContainer };
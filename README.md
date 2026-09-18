## запрос(ы) для вставки данных минимум о двух книгах в коллекцию books

db.books.insertMany([
    {title: "Book 4", description: "Description 4", authors: "Author 4"},
    {title: "Book 5", description: "Description 5", authors: "Author 5"}
])

## запрос для поиска полей документов коллекции books по полю title

db.books.find({title: "Book 4"})

## запрос для редактирования полей: description и authors коллекции books по _id записи

db.books.updateOne(
    {_id: "123"},
    {$set: {description: "New Description", authors: "New Author"}}
)

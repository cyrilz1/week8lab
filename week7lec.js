let express =require('express');
let books =require('./routers/book');
let authors =require('./routers/authors');
let bodyParser =require('body-parser');
let mongoose = require('mongoose');
let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

let url = 'mongodb://localhost:27017/week7lec2'
mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true}, function(err){
    if (err) throw err;
})
app.listen(8080);

app.get('/books', books.getBooks);
app.post('/books', books.addNewBook);
app.post('/books/addAuthor/:bookId', books.addAuthor);
// app.get('/deleteAllBooks', books.deleteAll);

app.get('/authors', authors.getAuthors);
app.post('/authors', authors.addNewAuthor);

//obj.name


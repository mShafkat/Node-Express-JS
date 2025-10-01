const express = require('express');
const app = express();


app.listen(3000, () => {
    console.log('Succesfully run on port 3000!');
});

app.get('/', (req, res) => {
    res.send("<h1>Hello</h1>");
});

app.get('/user/:userid/book/:bookid', (req, res) => {
    res.send("Book ID: " + req.params.bookid + ", User ID: " + req.params.userid);
});



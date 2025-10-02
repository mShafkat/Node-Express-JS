const express = require('express');
const app = express();


app.listen(3000, () => {
    console.log('Succesfully run on port 3000!');
});

app.get('/', (req, res) => {
    const users = [
        {id: 1 , name: 'x'},
        {id: 2 , name: 'y'}
    ]

    res.json(users)
        
});

// app.get('/user/:userid/book/:bookid', (req, res) => {
//     res.send("Book ID: " + req.params.bookid + ", User ID: " + req.params.userid);
// });

// app.get('/search', (req, res) => {
//     const name = req.query.name;
//     const age = req.query.age;
//     res.send(`Search results for name : ${name}, age : ${age}`);
// });




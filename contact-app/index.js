const express = require('express');
const app = express();

// middlewares
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false })); // middleware to parse URL-encoded bodies
app.use(express.static('public')); // middleware to serve static files from 'public' directory

// routes for contact application
app.get('/', (req, res) => {
    res.render('home');
});

app.get('/show-contact', (req, res) => {
    res.render('show-contact');
});

app.get('/add-contact', (req, res) => {
    res.render('add-contact');
});

app.post('/add-contact', (req, res) => {
    res.send('Contact information submitted successfully.');
});


app.get('/update-contact', (req, res) => {
    res.render('update-contact');
});

app.post('/update-contact', (req, res) => {
    res.send('Contact information updated successfully.');
});

app.get('/delete-contact', (req, res) => {
    res.send('Delete your contact information here.');
});

app.listen(3000, () => {
    console.log('Succesfully run on port 3000!');
});
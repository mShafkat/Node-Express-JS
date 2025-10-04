import express from 'express';
const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('<h1>Home Page</h1>');
});


app.get('/about', (req, res) => {
    var users =[
        { name: 'Alice', age: 25 },
        { name: 'Bob', age: 30 },
        { name: 'Charlie', age: 35 }
    ];
    var items = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];
    res.render('about', { 
        title: 'About Page', 
        message: 'Welcome to the About Page',
        items: users,
    });
});

app.get('/profile', (req, res) => {
    res.render('profile', { title: 'Profile Page', message: 'Welcome to the Profile Page' });
});

app.get('/form', (req, res) => {
    res.render('form', { message: null });
});


app.post('/submit', (req, res) => {
    const name = req.body.name;
    
    const message = `Form submitted successfully! Name: ${name}`;
    res.render('form', { message: message });
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
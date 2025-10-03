const express = require('express');
const app = express();


app.listen(3000, () => {
    console.log('Succesfully run on port 3000!');
});

app.set('view engine', 'ejs');

app.use(express.json()); // middlewire to parse JSON bodies
app.use(express.urlencoded({ extended: false })); // middlewire to parse URL-encoded bodies

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

// app.get('/about', (req, res) => {
//     res.redirect(303, 'https://www.google.com');
// });

// app.get('/user', (req, res) => {
//     res.render('user');
// });

// // app.get('/download', (req, res) => {
// //     res.download('./files/Assignment-1.pdf', 'MyAssignment.pdf'); // direct download
// // });

// app.get('/download', (req, res) => {
//     res.sendFile(__dirname + '/files/Assignment-1.pdf'); // open in another tab
// });

// app.post('/about', (req, res) => {
//     res.send(req.body);
// });

app.get('/about', (req, res) => {
    res.send(req.hostname); // returns the hostname of the request
});

app.get('/contact', (req, res) => {
    res.send(req.ip); // returns the IP address of the request
});

app.get('/help', (req, res) => {
    res.send(req.ips); // returns the array of IP addresses in case of proxy
});

app.get('/services', (req, res) => {
    res.send(req.method); // returns the HTTP method of the request
});

app.get('/products', (req, res) => {
    res.send(req.originalUrl); // returns the original URL of the request
});

app.get('/items', (req, res) => {
    res.send(req.protocol); // returns the protocol of the request
});

app.get('/orders', (req, res) => {
    res.send(req.secure ? 'Secure' : 'Not Secure'); // returns if the request is secure (HTTPS) or not (HTTP)
});

app.get('/categories', (req, res) => {
    res.send(req.route); // returns the route of the request
});

app.get('/brands', (req, res) => {
    if (req.accepts('html')) {
        res.send('<h1>Brands</h1>');
    } else if (req.accepts('json')) {
        res.send({ message: 'Brands json' });
    } else if (req.accepts('xml')) {
        res.send('message: <brands> Brands xml</brands>');
    } else {
        res.send("Content type not supported");
    }
});

app.get('/test', (req, res) => {
    res.send(req.headers); // returns the headers of the request
});
const express = require('express');
const mysql = require('mysql2');
const app = express();

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// mySQL connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'contactsdb'
});

db.connect((err) => {
    if (err) {
        console.log('Database connection error:' + err.stack);
        return;
    }
    console.log('Connected to database ');
});


// read all contacts
app.get('/contacts', (req, res) => {
    db.query('SELECT * FROM contacts', (err, rows) => {
        if (err) {
            console.error('Error fetching contacts:', err);
            return res.status(500).json({ error: 'Internal server error' });
        }
        res.send(rows);
    });
});


// read single contacts
app.get('/contacts/:id', (req, res) => {
    const { id } = req.params;
    db.query('SELECT * FROM contacts WHERE id = ?', [req.params.id], (err, rows) => {
        if (err) return res.status(500).send(err);
       
        if (rows.length === 0) return res.status(404).send('Contact not found');
        res.send(rows[0]);
    });
});


// create contacts
app.post('/contacts', (req, res) => {
    const { first_name, last_name, email, phone, address } = req.body;
    const query = 'INSERT INTO contacts (first_name, last_name, email, phone, address) VALUES (?, ?, ?, ?, ?)';
    db.query(query, [first_name, last_name, email, phone, address], (err, result) => {
        if (err) {
            console.error('Error creating contact:', err);
            return res.status(500).json({ error: 'Internal server error' });
        }
        res.status(201).json({ id: result.insertId, first_name, last_name, email, phone, address });
    });
});

// update contacts
app.put('/contacts/:id', (req, res) => {
    const { id } = req.params;
    const { first_name, last_name, email, phone, address } = req.body;
    const query = 'UPDATE contacts SET first_name = ?, last_name = ?, email = ?, phone = ?, address = ? WHERE id = ?';
    db.query(query, [first_name, last_name, email, phone, address, id], (err, result) => {
        if (err) return res.status(500).send(err);

        if (result.affectedRows === 0) return res.status(404).send('Contact not found');
        res.send({
            message : 'Contact updated successfully'
        });
    });
});


// delete contacts
app.delete('/contacts/:id', (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM contacts WHERE id = ?', [req.params.id], (err, result) => {
        if (err) return res.status(500).send(err);

        if (result.affectedRows === 0) return res.status(404).send('Contact not found');
        res.send({
            message : 'Contact deleted successfully'
        });
    });
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
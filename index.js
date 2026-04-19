const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();
app.use(express.json());

const PORT = 5000;

// Sample books database
let books = {
    "1": {
        title: "Things Fall Apart",
        author: "Chinua Achebe",
        reviews: {}
    },
    "2": {
        title: "The Alchemist",
        author: "Paulo Coelho",
        reviews: {}
    }
};

let users = [];

/* =========================
   GET ALL BOOKS (FIXED)
========================= */
app.get('/books', (req, res) => {
    res.send(books);
});

/* =========================
   GET BOOK BY ISBN
========================= */
app.get('/isbn/:isbn', (req, res) => {
    res.send(books[req.params.isbn]);
});

/* =========================
   GET BOOKS BY AUTHOR
========================= */
app.get('/author/:author', (req, res) => {
    const result = Object.values(books).filter(
        b => b.author === req.params.author
    );
    res.send(result);
});

/* =========================
   GET BOOKS BY TITLE
========================= */
app.get('/title/:title', (req, res) => {
    const result = Object.values(books).filter(
        b => b.title === req.params.title
    );
    res.send(result);
});

/* =========================
   GET BOOK REVIEWS
========================= */
app.get('/review/:isbn', (req, res) => {
    res.send(books[req.params.isbn].reviews);
});

/* =========================
   REGISTER USER
========================= */
app.post('/register', (req, res) => {
    users.push(req.body);
    res.send("User registered successfully");
});

/* =========================
   LOGIN USER (FIXED ROUTE)
========================= */
app.post('/login', (req, res) => {
    const user = users.find(
        u => u.username === req.body.username &&
             u.password === req.body.password
    );

    if (user) {
        const token = jwt.sign({ username: user.username }, "secret");
        return res.json({ token });
    }

    res.status(401).send("Invalid credentials");
});

/* =========================
   ADD OR MODIFY REVIEW
========================= */
app.put('/review/:isbn', (req, res) => {
    books[req.params.isbn].reviews["user"] = req.body.review;
    res.send(books[req.params.isbn].reviews);
});

/* =========================
   DELETE REVIEW
========================= */
app.delete('/review/:isbn', (req, res) => {
    delete books[req.params.isbn].reviews["user"];
    res.send("Review deleted");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
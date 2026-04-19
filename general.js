const axios = require('axios');

// Get all books
async function getAllBooks() {
    const res = await axios.get('http://localhost:5000/');
    return res.data;
}

// Get by ISBN
async function getBookByISBN(isbn) {
    const res = await axios.get(`http://localhost:5000/isbn/${isbn}`);
    return res.data;
}

// Get by Author
async function getBooksByAuthor(author) {
    const res = await axios.get(`http://localhost:5000/author/${author}`);
    return res.data;
}

// Get by Title
async function getBooksByTitle(title) {
    const res = await axios.get(`http://localhost:5000/title/${title}`);
    return res.data;
}

module.exports = {
    getAllBooks,
    getBookByISBN,
    getBooksByAuthor,
    getBooksByTitle
};
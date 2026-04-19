const axios = require('axios');

const baseURL = 'http://localhost:5000';

// Get all books
const getAllBooks = async () => {
    try {
        const res = await axios.get(`${baseURL}/books`);
        console.log("All Books:", res.data);
    } catch (err) {
        console.log(err);
    }
};

// Get book by ISBN
const getBookByISBN = async (isbn) => {
    try {
        const res = await axios.get(`${baseURL}/isbn/${isbn}`);
        console.log("Book by ISBN:", res.data);
    } catch (err) {
        console.log(err);
    }
};

// Get books by author
const getBooksByAuthor = async (author) => {
    try {
        const res = await axios.get(`${baseURL}/author/${author}`);
        console.log("Books by Author:", res.data);
    } catch (err) {
        console.log(err);
    }
};

// Get books by title
const getBooksByTitle = async (title) => {
    try {
        const res = await axios.get(`${baseURL}/title/${title}`);
        console.log("Books by Title:", res.data);
    } catch (err) {
        console.log(err);
    }
};

// Run all functions
getAllBooks();
getBookByISBN(1);
getBooksByAuthor("Chinua Achebe");
getBooksByTitle("The Alchemist");

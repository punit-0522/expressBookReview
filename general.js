const axios = require('axios');

const baseURL = 'http://localhost:5000';

const getAllBooks = async () => {
    const res = await axios.get(`${baseURL}/books`);
    console.log("ALL BOOKS:", res.data);
};

const getBookByISBN = async (isbn) => {
    const res = await axios.get(`${baseURL}/isbn/${isbn}`);
    console.log("ISBN BOOK:", res.data);
};

const getBooksByAuthor = async (author) => {
    const res = await axios.get(`${baseURL}/author/${author}`);
    console.log("AUTHOR BOOKS:", res.data);
};

const getBooksByTitle = async (title) => {
    const res = await axios.get(`${baseURL}/title/${title}`);
    console.log("TITLE BOOKS:", res.data);
};

// RUN SEQUENTIALLY (VERY IMPORTANT)
const runAll = async () => {
    await getAllBooks();
    await getBookByISBN(1);
    await getBooksByAuthor("Chinua Achebe");
    await getBooksByTitle("The Alchemist");
};

runAll();

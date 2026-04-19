const axios = require('axios');

const baseURL = 'http://localhost:5000';

const run = async () => {
    console.log("\n========== BOOK API TEST ==========\n");

    const books = await axios.get(`${baseURL}/books`);
    console.log("ALL BOOKS:");
    console.log(JSON.stringify(books.data, null, 2));

    const isbn = await axios.get(`${baseURL}/isbn/1`);
    console.log("\nISBN RESULT:");
    console.log(JSON.stringify(isbn.data, null, 2));

    const author = await axios.get(`${baseURL}/author/Chinua%20Achebe`);
    console.log("\nAUTHOR RESULT:");
    console.log(JSON.stringify(author.data, null, 2));

    const title = await axios.get(`${baseURL}/title/The%20Alchemist`);
    console.log("\nTITLE RESULT:");
    console.log(JSON.stringify(title.data, null, 2));

    console.log("\n========== END ==========\n");
};

run();

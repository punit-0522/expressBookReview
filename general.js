console.log("🔥 SCRIPT STARTED");

const axios = require('axios');

const baseURL = 'http://localhost:5000';

console.log("🔥 ABOUT TO CALL API");

(async () => {
    try {
        console.log("🔥 ENTERED ASYNC FUNCTION");

        const books = await axios.get(`${baseURL}/books`);
        console.log("🔥 BOOKS OK:", books.data);

        const isbn = await axios.get(`${baseURL}/isbn/1`);
        console.log("🔥 ISBN OK:", isbn.data);

        const author = await axios.get(`${baseURL}/author/Chinua%20Achebe`);
        console.log("🔥 AUTHOR OK:", author.data);

        const title = await axios.get(`${baseURL}/title/The%20Alchemist`);
        console.log("🔥 TITLE OK:", title.data);

        console.log("🔥 ALL DONE SUCCESSFULLY");

    } catch (err) {
        console.log("❌ ERROR OCCURRED:");
        console.log(err.message);
    }
})();

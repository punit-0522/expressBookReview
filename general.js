const axios = require('axios');

const baseURL = 'http://localhost:5000';

const run = async () => {
    try {
        console.log("\n--- GET ALL BOOKS ---");
        let res = await axios.get(`${baseURL}/books`);
        console.log(res.data);

        console.log("\n--- GET BOOK BY ISBN ---");
        res = await axios.get(`${baseURL}/isbn/1`);
        console.log(res.data);

        console.log("\n--- GET BOOKS BY AUTHOR ---");
        res = await axios.get(`${baseURL}/author/Chinua%20Achebe`);
        console.log(res.data);

        console.log("\n--- GET BOOKS BY TITLE ---");
        res = await axios.get(`${baseURL}/title/The%20Alchemist`);
        console.log(res.data);

    } catch (err) {
        console.log("ERROR:", err.message);
    }
};

run();

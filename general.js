const axios = require('axios');

const baseURL = 'http://localhost:5000';

/* =========================
   API CALL HANDLER
========================= */
const fetchData = async (url, label) => {
    try {
        const response = await axios.get(url);
        const data = response.data;

        if (
            !data ||
            (Array.isArray(data) && data.length === 0) ||
            (typeof data === 'object' && Object.keys(data).length === 0)
        ) {
            console.log(`${label}: No data found`);
        } else {
            console.log(`\n${label}: SUCCESS`);
            console.log(data);
        }

    } catch (error) {
        if (error.response && error.response.status === 404) {
            console.log(`${label}: NOT FOUND (404)`);
        } else {
            console.log(`${label}: ERROR`);
            console.log(error.message);
        }
    }
};

/* =========================
   MAIN EXECUTION
========================= */
const run = async () => {
    console.log("\n===== BOOK API CLIENT STARTED =====\n");

    // GET ALL BOOKS
    await fetchData(`${baseURL}/books`, "ALL BOOKS");

    // GET BY ISBN
    const isbn = 1;
    await fetchData(`${baseURL}/isbn/${isbn}`, `BOOK BY ISBN (${isbn})`);

    // GET BY AUTHOR
    const author = "Chinua Achebe";
    await fetchData(
        `${baseURL}/author/${encodeURIComponent(author)}`,
        `BOOKS BY AUTHOR (${author})`
    );

    // GET BY TITLE
    const title = "The Alchemist";
    await fetchData(
        `${baseURL}/title/${encodeURIComponent(title)}`,
        `BOOKS BY TITLE (${title})`
    );

    console.log("\n===== BOOK API CLIENT FINISHED =====\n");
};

run();

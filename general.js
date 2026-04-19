const axios = require('axios');

// Base URL of the backend server
const baseURL = 'http://localhost:5000';

console.log("🚀 BOOK API CLIENT STARTED");

/* =====================================================
   FUNCTION: fetchData
   PURPOSE: Reusable API caller with error handling
===================================================== */
const fetchData = async (url, label) => {
    try {
        // Calling API using axios (async/await)
        const response = await axios.get(url);

        // Extract response data
        const data = response.data;

        // Check if data is empty or not found
        if (
            !data ||
            (Array.isArray(data) && data.length === 0) ||
            (typeof data === "object" && Object.keys(data).length === 0)
        ) {
            console.log(`❌ ${label}: No data found`);
        } else {
            console.log(`\n✅ ${label} SUCCESS`);
            console.log(data);
        }

    } catch (error) {
        // Handle API errors properly
        if (error.response && error.response.status === 404) {
            console.log(`❌ ${label}: NOT FOUND (404)`);
        } else {
            console.log(`❌ ${label}: ERROR OCCURRED`);
            console.log(error.message);
        }
    }
};

/* =====================================================
   MAIN FUNCTION: Executes all API calls
===================================================== */
const run = async () => {

    console.log("\n===== FETCHING BOOK DATA =====\n");

    // 1. Get ALL books
    await fetchData(`${baseURL}/books`, "ALL BOOKS");

    // 2. Get book by ISBN
    const isbn = 1;
    await fetchData(`${baseURL}/isbn/${isbn}`, `BOOK BY ISBN (${isbn})`);

    // 3. Get books by AUTHOR (important: encode special characters)
    const author = "Chinua Achebe";
    await fetchData(
        `${baseURL}/author/${encodeURIComponent(author)}`,
        `BOOKS BY AUTHOR (${author})`
    );

    // 4. Get books by TITLE
    const title = "The Alchemist";
    await fetchData(
        `${baseURL}/title/${encodeURIComponent(title)}`,
        `BOOKS BY TITLE (${title})`
    );

    console.log("\n===== API CALLS COMPLETED =====\n");
};

// Run the script
run();

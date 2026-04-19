console.log("🔥 FILE IS RUNNING");

const axios = require('axios');

console.log("🔥 AXIOS LOADED");

const baseURL = 'http://localhost:5000';

const run = async () => {
    console.log("🔥 FUNCTION ENTERED");

    const res = await axios.get(`${baseURL}/books`);

    console.log("🔥 RESPONSE RECEIVED:");
    console.log(res.data);
};

run();

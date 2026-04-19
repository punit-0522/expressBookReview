console.log("GENERAL JS STARTED");

const axios = require('axios');

const baseURL = 'http://localhost:5000';

const run = async () => {
    console.log("RUN FUNCTION ENTERED");

    const res = await axios.get(`${baseURL}/books`);
    console.log(res.data);
};

run();

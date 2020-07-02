const express = require('express');

const app = express();

app.get('/', (request, response) => {
    return response.json('Api Running...');
});

app.listen(3001, () => {
    console.log('LIstening on port 3001');
});
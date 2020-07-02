const express = require('express');

const authController = require('./controllers/auth');

const app = express();

app.use('/auth', authController);

app.get('/', (request, response) => {
    return response.json('Api Running...');
});

app.listen(3001, () => {
    console.log('LIstening on port 3001');
});
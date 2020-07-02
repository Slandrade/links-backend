const express = require('express');
const db = require('./models');

const authController = require('./controllers/auth');
const e = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/auth', authController);

app.get('/', (request, response) => {
    return response.json('Api Running...');
});

db.sequelize.sync().then(() => {
    app.listen(3001, () => {
        console.log('LIstening on port 3001');
    });
});
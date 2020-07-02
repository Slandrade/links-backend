const express = require('express');
const bcrypt = require('bcrypt');
const { Account } = require('../models');

const router = express.Router();

const saltRounds = 10;

router.get('/sign-in', (request, response) => {
    return response.json('Sign in!');
});

router.get('/sign-up', async (request, response) => {

    const email = 'silaslsouza@gmail.com';
    const password = '123456';
    
    const hash = bcrypt.hashSync(password, saltRounds);
    console.log(hash);

    const result = await Account.create({ email, password: hash });
    

    return response.json(result);
});

module.exports = router;
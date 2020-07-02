const express = require('express');
const bcrypt = require('bcrypt');
const { Account } = require('../models');

const router = express.Router();

const saltRounds = 10;

router.get('/sign-in', (request, response) => {
    return response.json('Sign in!');
});

router.get('/sign-up', async (request, response) => {

    const { email, password } = request.body;

    const account = await Account.findOne({ where: { email } });
    if(account) return response.json('Account already exists');

    const hash = bcrypt.hashSync(password, saltRounds);
    const newAccount = await Account.create({ email, password: hash });


    return response.json(newAccount);
});

module.exports = router;
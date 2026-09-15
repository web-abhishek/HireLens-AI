const express = require('express');
const authRouter = express.Router();
const authcontroller = require('../controllers/auth.controller');

// For register a new user
authRouter.post('/register', authcontroller.registerUserController);

// For login user
authRouter.post('/login', authcontroller.loginUserController);


module.exports = authRouter;
console.log('Auth Router ready to use')
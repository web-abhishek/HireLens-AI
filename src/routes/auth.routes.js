const express = require('express');
const authRouter = express.Router();
const authcontroller = require('../controllers/auth.controller');
const authmiddleware = require('../middlewares/auth.middleware')

// For register a new user
authRouter.post('/register', authcontroller.registerUserController);

// For login user
authRouter.post('/login', authcontroller.loginUserController);

// For Logout user
authRouter.get('/logout', authcontroller.logoutUserController);

// Get User details
authRouter.get('/get-me',authmiddleware.authUser, authcontroller.getmeUserController);

module.exports = authRouter;
console.log('Auth Router ready to use')
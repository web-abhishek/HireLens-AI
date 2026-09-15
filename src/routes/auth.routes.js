const express = require('express');
const authRouter = express.Router();
const authcontroller = require('../controllers/auth.controller');

// For register a new user
authRouter.post('/register', authcontroller.registerUserController);



module.exports = authRouter;
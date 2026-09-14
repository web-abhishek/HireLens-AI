const express = require('express');
const authRouter = express.Router();
const authcontroller = require('../controllers/auth.controller');

authRouter.post('/register', authcontroller.registerUserController);



module.exports = authRouter;
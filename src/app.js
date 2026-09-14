const express = require("express");

const app = express();

app.use(express.json());

const authRouter = require('./routes/auth.routes');

app.get('/', (req, res) => {
    res.send(`<h1>Mern project</h1>`)
})

app.get('/api/auth', authRouter);

module.exports = app;
const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();

app.use(express.json());
app.use(cookieParser());

const authRouter = require('./routes/auth.routes');

app.get('/', (req, res) => {
    res.send(`<h1>Mern Project</h1>`)
})

app.use('/api/auth', authRouter);

module.exports = app;
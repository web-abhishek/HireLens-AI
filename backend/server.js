require('dotenv').config();
const app = require('./src/app');
const connectToDB = require('./src/config/database');
const generateInterviewReport = require('./src/services/ai.service');

const { resume, selfDescription, jobDescription } = require('./src/services/temp');

connectToDB();

generateInterviewReport({ resume, selfDescription, jobDescription });

app.listen(3000, () => {
    console.log("Server Started at port 3000")
});
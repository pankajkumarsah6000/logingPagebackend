// bcrypt dotenv jsonwebtoken express nodemon cors
require('dotenv').config(); // Agar aap .env file use kar rahe hain database/JWT ke liye

const express = require('express');
const app = express();
const routes = require('./Routes/UserRoutes');
const cors = require('cors');

// CORS setup - Allow all for now
app.use(cors({
    origin: '*'
}));

app.use(express.json());  // body-parser

app.get("/", (req, res) => {
    res.send("Backend is working fine!");
});

app.use('/pages', routes);

// Dynamic port for Render deployment
const PORT = process.env.PORT || 8888;
app.listen(PORT, () => {
    console.log(`Server is running fine at ${PORT}`);
});

const express = require('express');
const dotenv = require('dotenv');
const authRoutes = require('./api/auth');
const mongoose = require('mongoose');


dotenv.config();

mongoose.connect(process.env.MONGODB_URI)
.then (() => console.log("MONGODB connected"))
.catch(err => console.error('mongodb connection Error: ', err));

const app = express();
app.use(express.json());


app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server Running on port ${PORT}`)
})
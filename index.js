const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const port = 4000;

dotenv.config();

// Connect to DB
mongoose.connect(process.env.DB_CONNECT,)
    .then(() =>
            console.log('Connected to database!')
        )
    .catch((err) => console.log(err));

// Import Routes
const authRoute = require('./routes/auth');

// Route Middlewares
app.use('/api/user', authRoute);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
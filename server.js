const express = require('express')
const app = express()
const dotenv = require('dotenv').config();
const path = require('path');
const port = process.env.PORT || 5000

// Enable body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use('/api', require('./routes/genie'));

app.listen(port, () => console.log(`Server started on port ${port}`));

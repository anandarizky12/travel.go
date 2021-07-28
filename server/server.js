const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const router = require('./routes/router');
require('dotenv').config()

app.use(bodyParser.json())

app.use(cors());
app.use('/api',router);

const PORT = process.env.PORT
const DB_URI = process.env.MONGODBURI;

mongoose.connect(DB_URI, {
    useNewUrlParser :true ,
    useUnifiedTopology : true ,
    useCreateIndex : true,
    useFindAndModify: false
})
.then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
.catch(error => console.log(error.message) )
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const router = require('./routes/router');
const fileupload = require("express-fileupload");

require('dotenv').config()


app.use(bodyParser.json());
app.use(fileupload());
app.use(cors());
app.use("/Images", express.static("images"));
app.use('/api', router);
app.use("/Payment-Image", express.static("Payment-Image"));
app.use(bodyParser.urlencoded({ extended: false }));


const DB_URI = process.env.MONGODBURI;

mongoose.connect(DB_URI, {
    useNewUrlParser :true ,
    useUnifiedTopology : true ,
    useCreateIndex : true,
    useFindAndModify: false
})
.then(() => app.listen(process.env.PORT || 3000, function(){ console.log(`Server Running on Port: http://localhost:${PORT}`)}))
.catch(error => console.log(error.message) )


const express = require('express');
const app = express();
const router = require('./src/routes/api');
const cors = require('cors');
const helmet = require('helmet');
const mongoose = require('mongoose');
const rateLimit = require('express-rate-limit');
const hpp = require('hpp');
const cookieParser = require('cookie-parser');
const path = require('path');

app.use(cookieParser());
app.use(cors(
    {
        origin: ['https://crud-food-mern-assignment.vercel.app/'],
        methods: ['GET', 'POST'],
        credentials: true
    }
));
app.use(helmet());
app.use(hpp());

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb'}));

// Rate Limiter
const limiter = rateLimit({ windowMs: 15*60*1000, max: 3000});
app.use(limiter);


// Database Connection
let URI = "mongodb+srv://<username>:<password>@foodcrud.tiqnqzi.mongodb.net/FoodCrud";
let OPTION = { user: 'ia64744', pass: 'QUAFgAL4DvHMyCQp', autoIndex: true };

mongoose.connect(URI, OPTION).then((res) => {
    console.log("Database connected successfully");
}).catch((err) => {
    console.log(err);
});

app.set('etag', false);

app.use('/api', router);


module.exports = app;




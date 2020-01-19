const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


// routes 
const Items = require('./routes/api/Items');


const app = express();

//bodyParser Middleware

app.use(bodyParser.json());

// DB Config
const db = require('./config/keys').mongoURI;

// connect to mongo db 
mongoose.set('useUnifiedTopology', true);
mongoose
    .connect(db,{useNewUrlParser:true})
    .then(()=> console.log('MongoDB connected ...'))
    .catch(err => console.log(err))


// api cals

app.use('/api/items',Items);
const port = process.env.PORT || 5000;

app.listen(port,()=> console.log(`Server started on port ${port}`)); 
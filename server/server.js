const express    = require('express');
const mongoose   = require('mongoose');
const bodyParser = require('body-parser');
const cors       = require('cors')

 


// routes 
const User = require('./routes/api/User');


const app = express();
app.use(cors())
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

app.use('/api/user',User);
const port = process.env.PORT || 5000;

app.listen(port,()=> console.log(`Server started on port ${port}`)); 
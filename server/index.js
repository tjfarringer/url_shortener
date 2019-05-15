require('dotenv').config()
require('./models/UrlShorten')


const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const mongoURI = process.env.DB;
const connectOptions = { 
  keepAlive: true, 
  reconnectTries: Number.MAX_VALUE ,
  useNewUrlParser: true
}; 
//Connect to MongoDB 
mongoose.Promise = global.Promise; 
mongoose.connect(mongoURI, connectOptions, (err, db) => 
{ 
  if (err) console.log(`Error`, err); 
  console.log(`Connected to MongoDB`); 
});
// Require express module
app.use(bodyParser.json());
const PORT = 7000;
//Start server on Port 7000
app.listen(PORT, () => {
 console.log(`Server started on port`, PORT);
 console.log(process.env.DB); 
 app.get('/', async (req, res) => res.send('Hello World!'))
});



require("./routes/urlshorten")(app);


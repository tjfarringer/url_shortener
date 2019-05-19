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
var cors = require('cors');
app.use(cors());
const PORT = process.env.PORT || 3006 ;
//Start server on Port 3005
app.listen(PORT, () => {
 console.log(`Server started on port`, PORT);
 app.get('/', async (req, res) => res.send('Hello World!'))
});



require("./routes/urlshorten")(app);


const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes'); 
require('dotenv').config(); 

const app = express();
const PORT = process.env.PORT || 3001;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/api', routes);

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/socialNetworkDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


mongoose.set('debug', true);


app.listen(PORT, () => {
  console.log(`🌐 Server running on http://localhost:${PORT}`);
});



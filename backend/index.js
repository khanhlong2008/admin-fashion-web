const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

const fashionapp = require('./routers');

dotenv.config();

const app = express();

app.use(cors());
//{origin: 'http://localhost:3000', }
app.use(express.json());

//routes
app.use('/fashionapp', fashionapp);

mongoose
  .connect('mongodb://localhost/fashionapp', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('✅ Connected database from mongodb.');
    app.listen(5000, () => {
      console.log(`Server is running on port 5000`);
    });
  })
  .catch(err => {
    console.log('err', err);
  });

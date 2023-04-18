const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
require('dotenv').config();

const app = express();

app.use(express.static(__dirname + '/public'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());

app.get('/', (req, res) => {
  res.send('Hello World!');
}, (err) => {
  console.log(err);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`app listening on port: ${port}`);
});


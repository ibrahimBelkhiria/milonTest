const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const PORT = 3000;

// connect to DB 
require('./database/connection');
app.get('/', (req, res) => res.send('Hello World!'))

app.listen(PORT,()=>console.log('listen to port 3000'));
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const PORT = 5000;
// connect to DB 
require('./database/connection');
app.use(bodyParser.json());
const usersRoutes = require('./routes/users');
app.use('/api/users',usersRoutes);

app.listen(PORT,()=>console.log('listen to port 5000'));
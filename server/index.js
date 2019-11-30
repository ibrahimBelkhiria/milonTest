const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const PORT = 3000;
// connect to DB 
require('./database/connection');
app.use(bodyParser.json());
const usersRoutes = require('./routes/users');
app.use('/users',usersRoutes);

app.listen(PORT,()=>console.log('listen to port 3000'));
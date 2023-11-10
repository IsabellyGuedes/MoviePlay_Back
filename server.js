require('dotenv').config();
const express = require("express");
const app = express();
require('./src/config/database');


var path = require('path');
var logger = require('morgan');
const exp = require('constants');

const port = 3030

const userRouter = require('./src/routers/userRouter');
const contentRouter = require('./src/routers/contentRouter');

app.use(express.json())
app.use(userRouter)
app.use(contentRouter)
app.use(logger('dev'));
app.use(express.urlencoded({ extended: false}));
app.use(express.static(path.join(__dirname,'public')));


app.listen(port, () => {
  console.log(`O servidor está executando na porta ${port}`)
})
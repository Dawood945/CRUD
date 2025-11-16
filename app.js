import createError from 'http-errors';
import express, { json, urlencoded } from 'express';
import { config } from 'dotenv';
import db from './config/db-connect.js';

import cookieParser from 'cookie-parser';
import logger from 'morgan';

import userRoutes from "./routes/userRoutes.js"

var app = express();

config()
// view engine setup

app.use(logger('dev'));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', userRoutes);


app.use('/', async(req,res) => {

})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
db();
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server is running on Port ${port}`);
})

export default app;

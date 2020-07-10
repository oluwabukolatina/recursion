const createError = require('http-errors');
const express = require('express');
const logger = require('morgan');
const transactionRouter = require('./src/routes/transactions');

const app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.get('/', (req, res) => {
  res.status(200)
    .json({
      status: true,
      message: 'sherlock says hi. try this url if you dont where to go next... ',
    });
});
app.use('/retail24', transactionRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
module.exports = app;

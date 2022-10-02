import * as express from 'express';
import * as logger from 'morgan';
import * as cors from 'cors';
import table from './table/router';

const app = express();

app.use(logger('dev')); //Creating and running a server
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use('/api/table', table); //Adding an endpoint to the backend

app.use(function (req, res, next) {
  res.json({
    statusCode: 404,
  });
});

app.use(function (err, req, res, next) {
  res.json({
    statusCode: 500,
    message: err.message,
    stack: err.stack,
  });
});

export default app;

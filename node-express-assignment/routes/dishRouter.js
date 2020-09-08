const express = require('express');
const bodyParser = require('body-parser');

var dishRouter = express.Router();

dishRouter.route('/').all((req, res, next) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  next();
})
.get((req, res, next) => {
  res.end('Will send all dishes to you!');
})
.post((req, res, next) => {
  res.end('Will add the dish: '+ req.body.name + 'with details: ' + req.body.description);
})
.put((req, res, next) => {
  res.statusCode = 403;
  res.end('PUT operation not supported on /dishes');
})
.delete((req, res, next) => {
  res.end('Deleting all dishes');
});

dishRouter.route('/:dishId').get((req, res, next) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Will send details of dish: ' + req.params.dishId + 'to you!');
});

module.exports = dishRouter;

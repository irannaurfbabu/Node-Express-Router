const express = require('express');
const bodyParser = require('body-parser');

var promoRouter = express.Router();

promoRouter.route('/').all((req, res, next) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  next();
})
.get((req, res, next) => {
  res.end('Will send all promotion details to you!');
})
.post((req, res, next) => {
  res.end('Will add the promotion: '+ req.body.name + 'with details: ' + req.body.description);
})
.put((req, res, next) => {
  res.statusCode = 403;
  res.end('PUT operation not supported on /dishes');
})
.delete((req, res, next) => {
  res.end('Deleting all promotions details');
});

promoRouter.route('/:promoId').get((req, res, next) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Will send details of promotion: ' + req.params.promoId + 'to you!');
});

module.exports = promoRouter;

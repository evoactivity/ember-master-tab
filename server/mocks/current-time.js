/*jshint node:true*/
module.exports = function(app) {
  var express = require('express');
  var currentTimeRouter = express.Router();

  currentTimeRouter.get('/', function(req, res) {
    res.send({
      'currentTime': new Date().toISOString()
    });
  });

  app.use('/api/current-time', currentTimeRouter);
};

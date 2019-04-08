var express = require('express');
var router = express.Router();
var createError = require('http-errors');

/* GET home page. */
router.get('/test', function(req, res, next) {
  res.send({ a : 1 });
});

router.use('/user', require('./user'));

router.all('*', function(req, res, next){
  next(createError(404,'API를 찾을 수 없습니다.'));
});

module.exports = router;

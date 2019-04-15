var express = require('express');
var router = express.Router();
var createError = require('http-errors');

/* GET home page. */
router.get('/', function(req, res, next) {
  const us = [
    {
      name: '테스트1',
      age: 14
    },
    {
      name: '테스트2',
      age: 24
    }
  ]
  res.send({ users: us })
});

router.post('/', (req, res, next) => {
  console.log(req.query)
  console.log(req.body)
  res.send({ success: true, msg: 'post ok' })
});

router.put('/', (req, res, next) => {
  console.log(req.query)
  console.log(req.body)
  res.send({ success: true, msg: 'put ok' })
});

router.delete('/', (req, res, next) => {
  console.log(req.query)
  console.log(req.body)
  res.send({ success: true, msg: 'del ok' })
});

router.all('*', function(req, res, next){
  next(createError(404,'API를 찾을 수 없습니다.'));
});

module.exports = router;

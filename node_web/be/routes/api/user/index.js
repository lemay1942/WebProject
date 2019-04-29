var express = require('express');
var router = express.Router();
var createError = require('http-errors');
const User = require('../../../models/users')

/* GET home page. */
// router.get('/', function(req, res, next) {
//   const us = [
//     {
//       name: '테스트1',
//       age: 14
//     },
//     {
//       name: '테스트2',
//       age: 24
//     }
//   ]
//   res.send({ users: us })
// });

router.get('/', function(req, res, next) {
  User.find()
  .then(r => {
    res.send({success : true, users: r})
  })
  .catch(e => {
    res.send({success:false})
  })
});


router.post('/', (req, res, next) => {
  const {name, age} = req.body
  const u = new User({name, age})
  u.save()
  .then(r => {
    res.send({success : true, users: r})
  })
  .catch(e => {
    res.send({success:false, msg:e.message})
  })
  // console.log(req.query)
  // console.log(req.body)
  // res.send({ success: true, msg: 'post ok' })
});

router.put('/:id', (req, res, next) => {
  const id = req.params.id
  const { name, age } = req.body
  User.updateOne({ _id: id }, { $set: { name, age }})
  .then(r => {
    res.send({ success: true, msg: r})
  })
  .catch(e => {
    res.send({ success: false, msg: e.message })
  })
  // console.log(req.query)
  // console.log(req.body)
  // res.send({ success: true, msg: 'put ok' })
});

router.delete('/:id', (req, res, next) => {
  const id = req.params.id
  User.deleteOne({_id: id})
  .then(r => {
    res.send({success: true, msg: r})
  })
  .catch(e => {
    res.send({success: false, msg: e.message})
  })
  res.send({ success: true, msg: 'del ok' })
});

router.all('*', function(req, res, next){
  next(createError(404,'API를 찾을 수 없습니다.'));
});

module.exports = router;

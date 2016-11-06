var express = require('express');
var router = express.Router();
var Kitten = require('../models/kitten');


/* GET home page. */
router.get('/', function(req, res, next) {
  // Kitten.findOneAndUpdate({name: 'fluffy'}, {name: 'fluffed'}, function (err, kittens) {
  //   if (err) return console.error(err);
  // })

  Kitten.find(function (err, kittens) {
    if (err) return console.error(err);
    res.render('index', { title: 'Express', kittens: kittens });
  })
});

module.exports = router;

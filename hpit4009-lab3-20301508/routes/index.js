var express = require('express');
var router = express.Router();
var users = require('../users.json');

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', {
    title: 'Express (Chan Ka Ho .....)' ,
    email: 'kenchan8213@gmail.com'}); 
}); 

module.exports = router;

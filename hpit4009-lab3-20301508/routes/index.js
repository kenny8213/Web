var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express (Chan Ka Ho .....)' , email: 'kenchan8213@gmail.com'}); 
}); 

module.exports = router;

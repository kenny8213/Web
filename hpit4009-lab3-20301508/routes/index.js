var express = require('express');
var router = express.Router();
var users = require('../users.json');

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', {
    title: 'User Listing (Chan Ka Ho .....)',
    users: users
  }); 
}); 

module.exports = router;

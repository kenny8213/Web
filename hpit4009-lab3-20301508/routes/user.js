var express = require('express');
var router = express.Router();
var users = require('../users.json');

/* GET home page. */
router.get('/:id', (req, res, next) => {
    var selectedUser = users[req.params.id - 1];
    res.render('user', {
        title: "Single User Page",
        user: selectedUser
  }); 
}); 

module.exports = router;

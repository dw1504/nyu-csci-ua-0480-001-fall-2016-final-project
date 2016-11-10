var express = require('express');
var router = express.Router();
require('../db.js');
var mongoose = require('mongoose');
var UserList = mongoose.model('UserList');

/* GET home page. */
module.exports = router;

router.get('/addUser', function(req, res, next){
	UserList.find(function(err, users, count) {
		res.render('index', {users: users});
	});
});


router.post('/add', function(req, res, next){
	var newUserList = new UserList({
	});
	newUserList.UserArray.push({username: req.body.username, password: req.body.password});
	newUserList.save(function(err, user, count){
		res.redirect('/addUser');
	});;
});
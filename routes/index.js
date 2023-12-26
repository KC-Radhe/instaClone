var express = require('express');
var router = express.Router();

const userModel = require('./users');
const passport = require('passport');
const localStrategy = require('passport-local');

passport.use(new localStrategy(userModel.authenticate()));

router.get('/', function(req, res) {
  res.render('index', {footer: false});
});

router.get('/login', function(req, res) {
  res.render('login', {footer: false});
});

router.get('/feed', function(req, res) {
  res.render('feed', {footer: true});
});

router.get('/profile', function(req, res) {
  res.render('profile', {footer: true});
});

router.get('/search', function(req, res) {
  res.render('search', {footer: true});
});

router.get('/edit', function(req, res) {
  res.render('edit', {footer: true});
});

router.get('/upload', function(req, res) {
  res.render('upload', {footer: true});
});

router.post('/register', function(req, res){ 
  const userData = new userModel({ 
    username: req.body.username,
    name: req.body.name,
    email: req.body.email
  });
  userModel.register(userData, req.body.password)
    .then(function(){ 
      passport.authenticate('local')(req, res, function(){
        res.redirect('/profile');
       });
    });
});

module.exports = router;

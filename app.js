var express = require('express');
var app = express();
var swig = require('swig');
var chalk = require('chalk');
var Action = require('./public/js/actions');
var Models = require('./models');
var Player = Models.Player;
var Promise = require('bluebird');

swig.setDefaults({ cached: false});
app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/node_modules/'));
app.use(express.static('public'));

// root 
app.get('/', function(req, res, next){
	Models.Player.findAll({})
	.then(function(players){
		res.render('index', { players: players})
	})
});

app.get('/test', function(req, res, next){
	Action.movePlayers()
	.then(function(success){
		res.redirect('/');	
	})
	.catch()
});

//export app to mount on server
module.exports = app;
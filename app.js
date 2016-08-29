var express = require('express');
var app = express();
var swig = require('swig');
var chalk = require('chalk');
var GoogleMaps = require('googlemaps');

var Action = require('./public/js/getData');
var Models = require('./models');
var Player = Models.Player;
var Promise = require('bluebird');
var Map = require('./models/maps')


swig.setDefaults({ cached: false});

app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/node_modules/'));
app.use(express.static('public'));

// root 
app.get('/', function(req, res, next){
	console.log(chalk.magenta('at /'))
	res.render('index');
});

app.get('/test', function(req, res, next){
	Promise.all([Player.findAll({})])
	.then(function(data){
		res.send('made it here', data)
	})
});


//export app to mount on server
module.exports = app;
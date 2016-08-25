var express = require('express');
var app = express();
var swig = require('swig');
var chalk = require('chalk');
var GoogleMaps = require('googlemaps');
var Map = require('./models/maps')

swig.setDefaults({ cached: false});

app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/node_modules/'));

// root 
app.get('/', function(req, res){
	res.render('index');
});

//export app to mount on server
module.exports = app;
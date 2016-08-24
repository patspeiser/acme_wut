var express = require('express');
var app = express();
var swig = require('swig');
var chalk = require('chalk');
swig.setDefaults({ cached: false});

app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/node_modules/'));

// root 
app.get('/', function(req, res){
	//console.log(chalk.blue('/'));
	res.send('/')
});

module.exports = app;
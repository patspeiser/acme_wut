var Promise = require('bluebird');
var app = require('./app');
var Models = require('./models');
var chalk = require('chalk');

Promise.all([
	Models.Player.sync({force: true})
])
.then( function(){
	console.log(Models.People);
	Promise.map(Models.People, function(person){
		Models.Player.create(person)	
	})
})
.then(
	function(success){
		app.listen(process.env.PORT, function(){
			console.log(chalk.blue('LISTENING ON PORT: ' + process.env.PORT));
		})
	},
	function(error){
		console.log(chalk.red(error));
})
.catch()

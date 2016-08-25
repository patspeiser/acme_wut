var Promise = require('bluebird');
var app = require('./app');
var Models = require('./models');
var chalk = require('chalk');

//on server start seed players.
//after seed listen on port set in package.json file
Promise.all([
	Models.Player.sync({force: true})
])
.then( function(){
	Promise.map(Models.People, function(person){
		Models.Player.create(person)	
	})
})
.then(
	function(success){
		app.listen(process.env.PORT, function(){
			console.log(chalk.blue.bgWhite('player table seeded'));
			console.log(chalk.blue('LISTENING ON PORT: ' + process.env.PORT));
		})
	},
	function(error){
		console.log(chalk.red(error));
})
.catch()

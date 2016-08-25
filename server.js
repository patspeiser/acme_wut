var app = require('./app');
var Models = require('./models');
var chalk = require('chalk');


Promise.all([
	Models.User.sync({force: true}),
	Models.Location.sync({force: true}), 
	Models.Class.sync({force: true})
])
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

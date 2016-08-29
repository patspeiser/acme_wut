var Models = require('../../models')

var movePlayers = function(){
	return Models.Player.findAll({})
	.then(function(players){
		console.log('did it work?')
	})
}

module.exports = {
	movePlayers: movePlayers
}
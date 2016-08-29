var Models = require('../../models')

var movePlayers = function(next){
	return Models.Player.findAll({})
	.then(function(players){

		for (var player in players){
			console.log('before ', players[player].location)
			players[player].location = [
				players[player].location[0] + Math.floor(Math.random() * 10) - 10,
				players[player].location[1] + Math.floor(Math.random() * 10) - 10
			]
			console.log('after ', players[player].location)
		}
	})
	.catch(next)
}

module.exports = {
	movePlayers: movePlayers
}

movePlayers();
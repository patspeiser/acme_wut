var Models = require('../../models')

var movePlayers = function(next){
	return Models.Player.findAll({})
	.then(function(players){

		console.log('beginning to move players');
		for (var player in players){
			players[player].location = [
				players[player].location[0] + Math.floor(Math.random() * 10) - 10,
				players[player].location[1] + Math.floor(Math.random() * 10) - 10
			]
		}
		console.log('finished moving players.');
		return players;
	})
	.then(function(players){
		players.map(function(player){
			return Models.Player.update(
				{ location: player.location },	
				{ where: { id: player.id } }
			)
		})
	})
	.catch(next)
}

module.exports = {
	movePlayers: movePlayers
}

movePlayers();
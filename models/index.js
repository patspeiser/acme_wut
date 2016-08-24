var Sequelize = require('sequelize');
var db = new Sequelize(process.env.CONN);

var User = db.define('user', {
	name: Sequelize.STRING
});

var Class = db.define('class', {
	name: Sequelize.STRING
});

var Location = db.define('location', {
	coords: Sequelize.ARRAY(Sequelize.FLOAT)
})

module.exports = {
	User: User,
	Class: Class,
	Location: Location
}
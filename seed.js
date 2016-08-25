
var URL = 'postgres://postgres@localhost:5432/pat';
var Sequelize = require('sequelize');
var _db = new Sequelize(URL);

var Faker = require('Faker');

var CreateUser = function(userName, userLocation, userClass){
		this.name = userName,
		this.location = userLocation,
		this.class = userClass
}

var userClasses = ['spy', 'explorer', 'security', 'captain', 'bounty_hunter'];

var getRandomClass = function(){
	return userClasses[Math.floor(Math.random() * userClasses.length)]
}

var getRandomName = function(){
	return Faker.name.firstName();
}

var getRandomLocation = function(){
	return [Math.floor(Math.random() * 500), Math.floor(Math.random() * 500)]
}

var people = [];

for (var i = 0; i < 100; i++){
	people.push(new CreateUser(getRandomName(), getRandomLocation(), getRandomClass()));
}

console.log(people)

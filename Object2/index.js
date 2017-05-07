// Static object
var staticDog = {
	color: 'white',
	name: 'Muffin',

	getColor: function() {
		return this.color;
	},

	getName: function() {
		return this.name;
	}
};

console.log('This dog name is ' + staticDog.getName());
console.log('This dog is ' + staticDog.getColor());

// Living thing base class
var LivingThing = function(name) {
	this.name = name;
}
//Input.
LivingThing.prototype.getName = function() {
	return this.name;
};

// Dog extends LivingThing and replaces getName function
var Dog = function(name, color) {
	this.color = color;

	LivingThing.call(this, name);
};

Dog.prototype = Object.create(LivingThing.prototype);
Dog.prototype.getName = function () {
	return this.name + ' ' + this.color;
};

// Cat extends LivingThing but doesn't replace anything
var Cat = function(name) {
	LivingThing.call(this, name);
};

Cat.prototype = Object.create(LivingThing.prototype);

// Pony extends LivingThing and replaces getName function
var Pony = function(name, isStupid) {
	this.isStupid = isStupid || false;
	LivingThing.call(this, name);
};

Pony.prototype = Object.create(LivingThing.prototype);
Pony.prototype.getName = function () {
	return this.name + (this.isStupid ? ', but really stupid' : ' smart as hell');
};

// Create pontu instance of Dog class
var pontu = new Dog('Pontu', 'Roheline');
console.log(pontu.getName());

// Create julk instance of Cat class
var julk = new Cat('Julk');
console.log(julk.getName());

// Create smartPony instance of Pony class without adding isStupid argument to constructor
var smartPony = new Pony('Muhkel');
console.log(smartPony.getName());

// Create stupidPony instance of Pony class with adding isStupid as true to constructor
var stupidPony = new Pony('Pohl', true);
console.log(stupidPony.getName());
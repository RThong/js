function Animal(options) {
	this.name = options.name
}
Animal.prototype.eat = function() {
	console.log(this.name+'会吃')
}

function Dog(options) {
	Animal.call(this, options)
}
Dog.prototype = Object.create(Animal.prototype)
Dog.prototype.call = function() {
	console.log(this.name+'汪汪汪')
}

let dog = new Dog({name: '旺财'})
// console.dir(dog)
dog.call()
dog.eat()

let a = [1,2,3]

Array.prototype.forEach = function(fn) {
	for(let i = 0;i < this.length;i++) {
		fn.call(null, this[i], i, this)
	}
}

a.forEach((item, index, context) => {
	console.log(item, index, context);
})
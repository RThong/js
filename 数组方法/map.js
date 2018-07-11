Array.prototype.map = function(fn) {
	let result = []
	for(let i = 0;i < this.length;i++) {
		result.push(fn.call(null, this[i], i, this))
	}
	return result
}
let a = [1,2,3]
let b = a.map((item, index, context) => {
	console.log(item, index, context);
	return item + 1
})
console.log(b);
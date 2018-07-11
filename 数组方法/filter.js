Array.prototype.filter = function(fn) {
	let result = []
	let temp
	for(let i = 0;i < this.length;i++) {
		temp = fn.call(null, this[i], i, this)
		if(temp){
			result.push(this[i])
		}
	}
	return result
}

let a = [1,2,3,4,5,6,7,8,9,10]
let b = a.filter((item, index, context) => {
	console.log(item, index, context);
	return item % 2 === 0
})
console.log(b);
Array.prototype.join = function (str) {
	console.log('!!!');
	let result = '' + this[0]
	for(let i = 1;i < this.length;i++){
		result += str + this[i]
	}
	return result
}
console.log([1,2,3].join('-'))

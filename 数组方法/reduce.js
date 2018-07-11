// let a = [1,2,3,4,5,6,7,8]
// let b = a.reduce((result, item, index, context) => {
// 	console.log(result, item, index);
// 	result += item
// 	return result
// },1)
// console.log(b);

Array.prototype.reduce = function(fn, init) {
	let result
	if(init !== undefined){
		result = init 
		for(let i = 0;i < this.length;i++) {
			result = fn.call(null, result, this[i], i, this)
		}
	}
	else{
		result = this[0] 
		for(let i = 1;i < this.length;i++) {
			result = fn.call(null, result, this[i], i, this)
		}
	}
	return result
}

//reduce替代map
let a = [1,2,3]
// let b = a.map((item) => item + 1)
// console.log(b);
let b = a.reduce((result, item, index, context) => {
	result.push(item+1)
	console.log(result);
	return result
},[])


console.log(b);

//reduce替代filter
let c = [1,2,3,4,5,6,7,8,9,10]
// let d = c.filter(item => item % 2 === 0)
let d = c.reduce((result, item, index, context) => {
	if(item % 2 === 0){
		result.push(item)
	}
	return result
},[])
console.log(d);


//判断深拷贝不需要考虑对象是函数函数
function isRef(target) {
	return (Object.prototype.toString.call(target) === '[object Object]' || Object.prototype.toString.call(target) === '[object Array]')
}

function clone(obj) {
	if(!isRef(obj)) {
		return new Error('这不是一个对象或者数组')
	}
	let result = obj.constructor === Object ? {} : []
	for(let key in obj) {
		//函数直接复制
		result[key] = isRef(obj[key]) ? clone(obj[key]) : obj[key]
	}
	return result
}
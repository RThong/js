//将数组分为两组，递归将数组分解到length为1
function mergeSort(arr) {
	console.log(arr);
	const len = arr.length
	if(len < 2){
		return arr
	}
	const middle = Math.floor(len / 2)
	const left = arr.slice(0, middle)
	const right = arr.slice(middle)
	
	//执行过程是mergeSort(left)执行到底，再是mergeSort(right)执行到底，子过程也是如此逐步向外
	return merge(mergeSort(left), mergeSort(right))
}
//将两个排序好的数组合并排序成一个新的数组
function merge(left, right) {
	console.log('!!');
	let result = []

	while(left.length && right.length){
		if(left[0] < right[0]){
			result.push(left.shift())
		}
		else{
			result.push(right.shift())
		}
	}

	if(left.length){
		result.push(...left)
	}

	if(right.length){
		result.push(...right)
	}

	return result
}
let arr = [3,2,4,6,5]
console.log(mergeSort(arr));
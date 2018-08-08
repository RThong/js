//二分法需要目标数组有序
function getArr(length, max) {
	const arr = []
	for(let i = 0;i < length;i++) {
		arr[i] = Math.floor(Math.random() * max)
	}
	let temp
	for(let i = 0;i < length - 1;i++) {
		for(let j = 0;j < length - 1;j++) {
			if(arr[j] > arr[i+1]) {
				temp = arr[j]
				arr[j] = arr[i+1]
				arr[i+1] = temp
			}
		}
	}
	return arr
}

function dichotomy(arr, target) {
	let min = 0, max = arr.length - 1
	let mid
	//当min比max小说明还能继续分
	while(min <= max) {
		console.log(min, max)
		mid = Math.floor((max + min)/2)
		if(arr[mid] < target) {
			min = mid + 1
		}
		else if(arr[mid] > target) {
			max = mid - 1
		}
		else {
			return mid
		}
	}
	return -1
}

let arr = getArr(10, 20)
console.log(arr)
console.log(dichotomy(arr, 10))
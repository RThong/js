//插入排序：每轮拿出一个与之前的依次倒序比较，如果比它小就把他向后移动一位，否则就将它插入到后面，类似
//扑克牌排序的方法
//时间复杂度：n*n
function insertion(arr) {
	let temp
	for(let i = 1;i < arr.length;i++){
		temp = arr[i]
		for(let j = i - 1;j >= 0;j--){
			if(temp < arr[j]){
				arr[j+1] = arr[j]
				arr[j] = temp
			}
		}
	}
}

let arr = [3,2,2,6,5]
insertion(arr)
console.log(arr);
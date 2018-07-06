//选择排序：每轮各数与最小值进行比较，然后与当前值进行替换
//时间复杂度：n*n
function selection(arr) {
	let minIndex, temp
	for(let i = 0;i < arr.length - 1;i++){
		minIndex = i	
		for(let j = i + 1;j < arr.length;j++){
			if(arr[j] < arr[minIndex]){
				minIndex = j
			}
		}
		temp = arr[minIndex]
		arr[minIndex] = arr[i]
		arr[i] = temp
	}
}
let arr = [5,6,3,4,8]
selection(arr)
console.log(arr);
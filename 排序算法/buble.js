//冒泡排序：每轮相邻两两比较将最大的数排(冒泡)到末尾，每轮的比对数量-1
//时间复杂度：n*n		
function buble(arr) {
	let temp
	for(let i = 0;i < arr.length - 1;i++){ //遍历的轮数
		for(let j = 0; j < arr.length - i - 1;j++){ //每一轮两两对比
			if(arr[j] > arr[j+1]){
				temp = arr[j+1]
				arr[j+1] = arr[j]
				arr[j] = temp
			}
		}				
	}
}
let arr = [5,1,4,9,8]
buble(arr)
console.log(arr);
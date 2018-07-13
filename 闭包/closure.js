//因为定时器中的回调函数会在所有同步代码执行完成之后也就是循环之后执行，当执行回调的时候会在定义函数的位置开始沿着作用域链寻找变量i，这是的i的值是5，所以会每隔1秒打出5
//要按照需求每隔1秒打出1、2、3、4、5，需要在每次循环保存一个当前的i值，这就用到了闭包，通过立即执行函数将每个i单独保存一份，当执行回调时会寻找到立即执行函数里的变量i
    
for(var i = 0;i < 5;i++){
  setTimeout((function(j) {
    return function() {
      console.log(j);
    }
  })(i), 1000*i)
}

for(var i = 0;i < 5;i++){
  (function(i){
    setTimeout(function() {
      console.log(i)
    }, 1000*i)
  })(i)   
}
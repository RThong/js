//单例模式/闭包：只同时存在一个实例，在某些情况下全局只有一个组件会用到
let A = (function(){
  let instance = null
  function A(){
    this.id = Math.random()
    return instance || (instance = this)
  }
  A.prototype.show = function() {
    console.log(this.id);
  }
  return A
})()
// let createInstance = (function(){
//   let instance = null
//   return function() {
//     return instance || (instance = new A())
//   }
// })()

let a = new A()
a.show()
let b = new A()
b.show()
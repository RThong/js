//创建一个临时对象
//执行构造函数，并指定this为临时对象
//将临时对象的__proto__指向构造函数原型
//如果构造函数没有显示返回对象，就返回该临时对象

function A(options) {
  this.name = options.name
}
A.prototype.fn = function() {
  console.log(this.name);
}

function fakeNew() {
  const targetFn = arguments[0]
  const options = arguments[1] || undefined
  let instance = {}
  // let instance = Object.create(targetFn.prototype)

  let res = targetFn.call(instance, options)
  console.log(Object.setPrototypeOf(instance, targetFn.prototype))
  return typeof res === 'Object' ? res : instance
}

var instance = fakeNew(A, {name: 'hong'})
console.dir(instance);
instance.fn()
console.dir(new A({name: 'hong'}));
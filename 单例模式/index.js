let Singleton = (function () {
    let instance = null
    function CreateSingleton () {
        this.a = 1
        if (instance) {
            return instance
        }
        instance = this
    }
    CreateSingleton.prototype.fn = function () {
        console.log(1)
    }
    return CreateSingleton
})()
let instance1 = new Singleton()
let instance2 = new Singleton()
console.log(instance1 === instance2)
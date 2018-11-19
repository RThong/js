class EventHub {
    constructor() {
        this.eventList = {}
    }
    on (eventName, fn) {
        if (!this.eventList[eventName]) {
            this.eventList[eventName] = []
        }
        this.eventList[eventName].push(fn)
    }
    emit (eventName, param) {
        for (let key of Object.keys(this.eventList)) {
            if (key === eventName) {
                this.eventList[key].map((fn) => {
                    fn.call(this, param)
                })
                break
            }
        }
    }
    off (eventName, fn) {
        if (eventName === undefined) {
            this.eventList = {}
            return
        }
        for (let key of Object.keys(this.eventList)) {
            if (key === eventName) {
                if (!fn) {
                    delete this.eventList[key]
                    break
                    return
                }
                let callbackList = this.eventList[key]
                if (callbackList.indexOf(fn) !== -1) {
                    callbackList.splice(callbackList.indexOf(fn), 1)
                    break
                }
            }
        }
    }
}

// function EventHub() {
// 	this.eventList = {}
// }
// EventHub.prototype = {
// 	on(eventName, fn) {
// 		if (!this.eventList[eventName]) {
// 			this.eventList[eventName] = []
// 		}
// 		this.eventList[eventName].push(fn)
// 	},
// 	emit(eventName, param) {
// 		for (let key of Object.keys(this.eventList)) {
// 			if (key === eventName) {
// 				this.eventList[key].map((fn) => {
// 					fn.call(this, param)
// 				})
// 				break
// 			}
// 		}
// 	},
// 	off(eventName, fn) {
// 		if (eventName === undefined) {
// 			this.eventList = {}
// 			return
// 		}
// 		for (let key of Object.keys(this.eventList)) {
// 			if (key === eventName) {
// 				if (!fn) {
// 					delete this.eventList[key]
// 					break
// 					return
// 				}
// 				let callbackList = this.eventList[key]
// 				if (callbackList.indexOf(fn) !== -1) {
// 					callbackList.splice(callbackList.indexOf(fn), 1)
// 					break
// 				}
// 			}
// 		}
// 	}
// }


let eventHub = new EventHub()
let fn = function (e) {
    console.log(this, e)
}
eventHub.on('focus', () => {
    console.log('@@@@')
})
eventHub.on('click', () => {
    console.log('!!!!!!!')
})
eventHub.on('click', fn)

document.onclick = function () {
    eventHub.emit('click', 2)
    eventHub.emit('focus', 2)
    setTimeout(() => {
        eventHub.off()
    }, 1000)
}
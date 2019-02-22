/*
 * @Description: 
 * @Author: Tank
 * @GitHub: https://github.com/zhihuifanqiechaodan
 * @Date: 2019-02-22 13:46:25
 * @LastEditTime: 2019-02-22 14:38:16
 */
// events 事件模块||核心模块, 它下面有一个EventEmitter这个类, 这个类提供了一个模式 "发布订阅模式 || 观察者模式"
// node中很多模块都继承了events这个类
const EventEmitter = require('events').EventEmitter //发布订阅模式 || 观察者模式
const myEmitter = new EventEmitter() // 类的实例化

const fn = () => {
    console.log('这是某个异步的回调函数');
}
// 这里有一个异步操作
setTimeout(() => {
    // 触发someEvents事件
    myEmitter.emit('someEvents')
}, 2000)
// 监听事件触发fn函数
myEmitter.on('someEvents', fn)
/**
 * 这里要介绍 newListener 和 removeListener 事件
 * EventEmitter 实例在新的监听器被添加到其内部监听器数组之前，会触发自身的 'newListener' 事件。
 * 为 'newListener' 事件注册的监听器将传递事件名称和对要添加的监听器的引用
 * 当新增监听器时，会触发 'newListener' 事件；当移除已存在的监听器时，则触发 'removeListener' 事件。
 */
// 新的监听器被添加到其内部监听器会触发newListener事件
myEmitter.on("newListener", () => {
    console.log('myEmitter绑定了一个新的事件监听');
})
// myEmitter新添加了一个监听事件
myEmitter.on("fn1", () => {
    console.log('我是fn1的回调函数');
}) // myEmitter.on方法实际上就是myEmitter.addListener方法
myEmitter.emit('fn1')
/**
 * getMaxListeners() // 默认最大监听10个
 * 返回 EventEmitter 当前的监听器最大限制数的值，该值可以使用 myEmitter.setMaxListeners(n) 设置最大监听数量
 */
console.log(myEmitter.getMaxListeners()); // 监听数量为10
// 通过myEmitter.setMaxListeners(n) 设置最大监听数量
myEmitter.setMaxListeners(20)
console.log(myEmitter.getMaxListeners()); // 监听数量为20
/**
 * emitter.listeners(eventName) // 返回某个事件的所有回调
 * 返回名为 eventName 的事件的监听器数组的副本。
 */
console.log(myEmitter.listeners("fn1"));
const callback = (stream) => {
    console.log('已连接');
};
const callback1 = (stream) => {
    console.log('断开');
};
myEmitter.on('connection', callback);
myEmitter.on('connection', callback1);
myEmitter.emit('connection')
myEmitter.removeListener('connection', callback1)
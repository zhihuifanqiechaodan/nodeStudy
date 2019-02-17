/*
 * @Description: 
 * @Author: Tank
 * @GitHub: https://github.com/zhihuifanqiechaodan
 * @Date: 2019-02-16 11:16:57
 * @LastEditTime: 2019-02-17 14:27:38
 */
/**
 * Node简介:
 *  node是构建在chrome V8 引擎上的JavaScript 运行环境
 * 
 * Node 和 chrome 的区别:
 *  架构一样, 都是基于事件驱动的异步架构!
 *  浏览器主要是通过事件驱动来服务页面交互
 *  node 主要是通过事件驱动来服务 I/O
 *  注意: node 没有HTML/WebKit和显卡等等的UI技术支持 
 */
/**--------------------------------------------我是分割线------------------------------------------------ */
/**
 * I/O介绍:
 *  读写操作都可以理解为I/O操作
 * 
 * 并行 和 并发
 *  并行: 同一个时刻点同时做很多事情
 *  并发: 同一个时刻点有多个请求
 *  同一个时刻有超级多的请求需要完成 就是高并发
 * 
 * 进程 和 线程
 *  进程：是并发执行的程序在执行过程中分配和管理资源的基本单位，是一个动态概念，竞争计算机系统资源的基本单位。
 *  线程：是进程的一个执行单元，是进程内科调度实体。比进程更小的独立运行的基本单位。线程也被称为轻量级进程。
 *  注意: 一个程序至少一个进程，一个进程至少一个线程。
 * 
 *  I/O 密集型 大量读取数据 (适合做实时应用)
 *  CPU 密集型 大量的运算
 */
/**--------------------------------------------我是分割线------------------------------------------------ */
/**
 * 在node中每一个文件都是一个独立的模块, 每个模块的变量或方法都是不对外公开的, 要公开那一个都是由自己决定的
 * 在node中, 使用require()来导入模块(这是一个全局变量)
 * node中顶层对象是global
 *  在node中,模块中对外暴露的变量或者方法通过module.exports = {} 或者 exports.XXX来导出
 */
let common = require('./common')
console.log(common)
/**
 * AMD 和 CMD 的规范
 */
/**--------------------------------------------我是分割线------------------------------------------------ */
/**
 * 事件循环顺序
 *  同步代码执行结束后, 开始异步执行(也是有优先级的)
 *  函数都是同步执行的, 真正异步的是他们的回调函数
 *  macro-task队列: script(全部的代码) > setInterval || setTimeout > setImmediate I/O (执行优先级)
 *  注意: setInterval和setTimeout 这俩谁先注册谁的优先级高
 *  micro-task队列: process.nextTick > Promise的then方法(执行优先级)
 */

/**
 * node.js在执行初期相当于执行了一个while(true){ *事件循环*
 *  第一步: 执行 => macro-task队列中script(全部代码)
 *  第二步: 清空 => micro-task队列(执行这里所有的代码) 
 *  接下来: 执行 => macro-task队列中setInterval(所有的setInterval或者所有的setTimeout, 这俩谁先注册就先执行谁)
 *  仍  然: 清空 => micro-task队列(执行这里所有的代码)
 *  接下来: 执行 => macro-task队列中setInterval(所有的setImmediate方法)
 *  仍  然: 清空 => micro-task队列(执行这里所有的代码)
 *  接下来: 执行 => macro-task队列中setInterval(所有的I/O)
 *  仍  然: 清空 => micro-task队列(执行这里所有的代码)
 *  注  意: 如果micro-task队列没有需要执行的代码,则继续执行macro-task队列中的代码
 *  注  意: 如果异步嵌套异步同样按照以上顺序
 *  请执行callback.js文件查看示例(执行书序)
 *  src目录下执行 node callback.js
 * }
 * 异步执行优先级 process.nextTick > Promise.then > setTimeout/setTimeval > setImmediate > I/O
 * 
 * 事件观察者:
 *  idle观察者 > I/O观察者 > check观察者
 */
/*
 * @Description: 
 * @Author: Tank
 * @GitHub: https://github.com/zhihuifanqiechaodan
 * @Date: 2019-02-16 11:16:57
 * @LastEditTime: 2019-02-16 17:05:15
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
 */ 
let common = require('./common')
console.log(common.b)
console.log(common.a)
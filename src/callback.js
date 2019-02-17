/*
 * @Description: 
 * @Author: Tank
 * @GitHub: https://github.com/zhihuifanqiechaodan
 * @Date: 2019-02-17 10:24:12
 * @LastEditTime: 2019-02-17 14:06:31
 */

// Promise.resolve('1').then(res => {
//     console.log(res);
// })
// process.nextTick(() => {
//     console.log('2');
// })
// setTimeout(() => {
//     console.log('3');
// })
// console.log('4');

// 以上执行顺序为 4 2 1 3
setTimeout(() => {
    console.log('2');
})
let timer = setInterval(() => {
    console.log('1');
    clearInterval(timer)
}, 0)
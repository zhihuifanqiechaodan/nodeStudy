/*
 * @Description: 
 * @Author: Tank
 * @GitHub: https://github.com/zhihuifanqiechaodan
 * @Date: 2019-02-23 10:48:13
 * @LastEditTime: 2019-02-23 11:04:19
 */
// assert 模块提供了一组简单的断言测试，可用于测试不变量。
const assert = require('assert') // 断言

assert(true, "如果第一个参数的布尔值不为true, 这个字符串就是报错信息") // assert.ok() 的别名
assert.ok(1 + 2 === 3, "如果不相等就报错")

assert.equal(1 + 2, 3, "assert.equal()方法和assert.ok()一样,如果不相等就报错")
assert.notEqual(1 + 2, 2, "如果相等就报错")

// 以上判断都是按照 == 来判断的, 如果想要按照 === 来判断, 可按照如下写法:
assert.strictEqual(1 + 2, 3, "如果不是严格等于就会报错") // 严格等于 ===
assert.notStrictEqual(1 + 2, 2, "不严格等于") // 不严格等于 !==

// 判断对象的断言
assert.deepEqual({}, {}, "只要两个对象的属性和值都一一对象就相等") 
// 这里要注意,两个对象属性的值在比较的时候是按照不严格等于来判断的, 例如:
assert.deepEqual({a: '1'}, {a: 1}, "只要两个对象的属性和值都一一对象就相等") 

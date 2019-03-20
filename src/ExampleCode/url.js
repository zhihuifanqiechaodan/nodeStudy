/*
 * @Description: 
 * @Author: Tank
 * @GitHub: https://github.com/zhihuifanqiechaodan
 * @Date: 2019-02-22 15:53:29
 * @LastEditTime: 2019-03-01 20:56:50
 */
const {
    URL
} = require('url') // 使用解构赋值解构url模块下的URL, URL是一个构造函数
console.log(URL);
// 将需要解析的路径当作参数传递进去, 就会解析出标准规范的URL
const myURL = new URL('https://www.shiguangkey.com/video/1599?videoId=9398&classId=2356')
console.log(myURL);
/*URL {
    href: 'https://www.shiguangkey.com/video/1599?videoId=9398&classId=2356', //传进来要解析的地址
    origin: 'https://www.shiguangkey.com', // 协议 + 主机名
    protocol: 'https:', // 协议部分
    username: '',
    password: '',
    host: 'www.shiguangkey.com', // 主机
    hostname: 'www.shiguangkey.com', // 主机名字
    port: '', // 端口号
    pathname: '/video/1599', // 路径名字
    search: '?videoId=9398&classId=2356', // 传递的参数
    searchParams: URLSearchParams { // map对象
        'videoId' => '9398', 'classId' => '2356'
    },
    hash: '' // 哈希值
}*/
// 获取解析路径上的传参
console.log(myURL.search.slice(1)); // 这是获取所有的传参值,并且把 ? 切割出去
console.log(myURL.search.slice(1).split('&')); // 按照split方法以 = 等形式切割为数组,然后还要for循环去取每一项对应的值, 这样做太麻烦了, node提供了一个 querystring 模块下面的 parse 方法用来解析字符串
// 例如:   
const query = require('querystring') //导入这个模块
const queryObj = query.parse(myURL.search.slice(1)) // 通过 querystring 模块下的 parse 方法解析参数转为对象
console.log(queryObj); // 这时候 queryObj 就已经被解析为一个对象
console.log(queryObj.videoId); // 通过对象.属性名就可以获取你需要值
console.log(query.stringify(queryObj)); // 通过 querystring 模块下的 stringify 方法将一个对象转为查询字段



/**--------------------------------------------我是分割线-------------------------------------------------*/
const {
    resolve
} = require('url')
console.log(resolve("/user/", "node")); // 输出 /user/node
console.log(resolve("/user", "node")); // 输出 /node
console.log(resolve("/user/local/", "node")); // 输出 /user/local/node
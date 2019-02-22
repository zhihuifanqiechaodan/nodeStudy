/*
 * @Description: 
 * @Author: Tank
 * @GitHub: https://github.com/zhihuifanqiechaodan
 * @Date: 2019-02-22 14:41:10
 * @LastEditTime: 2019-02-22 15:29:15
 */
const path = require('path') // 也可以通过解构赋值 直接导入join模块 const { join } = require('path')
// __dirname 默认返回当前文件目录的绝对路径 
console.log(__dirname);
// __filename 默认返回当前文件的绝对路径
console.log(__filename);

// path.join()方法来拼接路径
path.join('a' + 'b')
console.log(path.join('a' + 'b')); //返回 a/b
console.log(path.join('a', './b', '..')); //返回 a  拼接过程为a拼接b, 然后 .. 返回上一层, 只剩下a
console.log('--------------------------------------------我是分割线------------------------------------------------ ');

/**--------------------------------------------我是分割线-------------------------------------------------*/
// path.resolve() 返回绝对路径
console.log(path.resolve(__dirname + './path.js'));
console.log('--------------------------------------------我是分割线------------------------------------------------ ');

/**--------------------------------------------我是分割线-------------------------------------------------*/
// path.parse() 解析路径
console.log(path.parse(__filename)); //返回以下数据
/*{
    root: 'C:\\', // 根目录
    dir: 'C:\\Users\\Designer\\Desktop\\node-study\\src', // 当前文件目录所在的绝对路径
    base: 'path.js', // 当前文件的文件名和扩展名
    ext: '.js', // 当前文件的后缀名
    name: 'path' // 当前文件的名字
}*/
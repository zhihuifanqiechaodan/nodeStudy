/*
 * @Description: 
 * @Author: Tank
 * @GitHub: https://github.com/zhihuifanqiechaodan
 * @Date: 2019-02-23 14:31:35
 * @LastEditTime: 2019-03-20 13:30:55
 */
// 原生模块: fs - 文件系统
// fs模块提供了一个 API，用于以模仿标准 POSIX 函数的方式与文件系统进行交互。
 
// console.log(fs);

// 读取文件 属于 I/O 操作
/**
 * 非阻塞读取文件 也就是异步获取的, 第一个参数写入要读取文件的路径, 第二个参数是一个编码集用来指定读取到数据的格式
 * 第三个参数是一个回调函数.
 * fs.readFile('路径', () => {})
 * 阻塞读取文件, 也就是同步获取的, 第一个参数写入要读取文件的路径
 * fs.readFileSync('路径')
 */
fs.readFile("./path.js", "UTF-8", function (err, data) { // 回调函数的错误对象永远是第一个参数
    // 如果说读取过程中发生错误, err 会是一个 JSON格式的对象, 里面包含错误信息
    // 反之如果没有发生错误, 那么 err === null
    console.log(err);
    // 读取成功, 读取到的文件是一个二进制的 Buffer对象
    console.log(data);
    // 一般情况下 我们需要判断错误信息来相应的抛出错误
    if (err) {
        return
    }
})
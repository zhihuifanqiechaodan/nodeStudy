/*
 * @Description: 
 * @Author: Tank
 * @GitHub: https://github.com/zhihuifanqiechaodan
 * @Date: 2019-03-20 15:23:08
 * @LastEditTime: 2019-03-20 16:52:10
 */
/**
 * http中发起请求
 */
const http = require('http')
const server = http.createServer((req, res) => {
    const obj = {
        a: 1,
        b: 2
    }
    res.write(JSON.stringify(obj))
    res.end()
})
server.listen(4001)
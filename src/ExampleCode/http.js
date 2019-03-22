/*
 * @Description: 
 * @Author: Tank
 * @GitHub: https://github.com/zhihuifanqiechaodan
 * @Date: 2019-03-20 10:02:57
 * @LastEditTime: 2019-03-21 10:06:32
 */
const http = require('http')
const request = require('http').request
const fs = require('fs')

// 代理跨域
const fn = response => {
    const options = {
        host: "localhost",
        port: 4001,
        method: "get",
        path: "/"
    }
    //执行就发起请求了
    const req = request(options, res => {
        // console.log(res);
        let data = {}
        res.setEncoding("utf8")
        res.on("data", (chunk) => {
            console.log(`响应主体:${chunk}`);
            // 将data赋值为第三方代理请求回来的数据
            data = chunk
        })
        res.on("end", (chunk) => {
            response.write(data)
            response.end()
        })
    })
    // 监听报错
    req.on("error", err => {
        console.log(err);
    })
    req.write("")
    req.end()
}

const server = http.createServer((request, response) => {
    // 和请求相关的信息都在 request 里面
    // 后台给客户端返回的数据, 都在 response 里面

    // CORS跨域  设置允许跨域
    response.setHeader("Access-Control-Allow-Origin", "*")

    // 设置响应头, 第一个参数 http 状态码, 第二个参数是一个对象
    // response.writeHead(2010, {
    //     "Content-Type": "text/pligin;charset=utf-8" //设置内容的类型
    // })
    // response.write()可以调用多次
    // response.write()0向客户端返回数据, 这里返回的中文会乱码,因此需要设置响应头
    // response.write("向客户端返回数据~~~")
    // response.write(request.url) // 请求路径
    // response.write(request.method) // 请求方式
    // response.write(JSON.stringify(request.headers)) // 请求头信息

    // response.end()结束响应, 不然会一直处于响应状态不结束, 只能调用一次
    // response.end("~~~我是response.end()返回的数据") // end也可以返回数据, 必须传字符串

    if (request.method === "GET") {
        response.writeHead(200, {
            "Content-Type": "text/html;charset=utf-8"
        })
        switch (request.url) {
            case "/":
                // response.write(fs.readFileSync("../demo/index.html", "utf8")) // 同步执行
                response.write(JSON.stringify({
                    a: 1,
                    b: 2
                })) // 同步执行
                response.end()
                break;
            case "/home":
                //home
                fs.readFile("../demo/index.html", "utf8", (err, data) => { // 异步执行
                    response.write(data)
                    response.end()
                })
                break
            case "/request": //代理跨域
                fn(response)
                break
            default:
                // 404
                response.write("<h1>404页面<h1>")
                response.end()
                break;
        }
    }
    // response.end()
    // 配置请求
})
// 监听3000端口
server.listen(4000, () => {
    console.log("服务监听在4000端口");
})
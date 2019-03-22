/*
 * @Description: 
 * @Author: Tank
 * @GitHub: https://github.com/zhihuifanqiechaodan
 * @Date: 2019-03-21 10:33:48
 * @LastEditTime: 2019-03-22 09:10:06
 */
const Koa = require('koa') // 导入的是一个构造函数
const request = require('superagent') // 主动发起请求的包
const cheerio = require('cheerio') // 这个包可以把HTML结构的字符串转为dom结构
const {
    join
} = require('path') // 拼接路径

const app = new Koa // 实例这个构造函数

// 中间件  通过app.use注册多个异步函数处理一个请求 按照注册顺序依次放到一个数组中,通过next执行下一个中间件

// 中间件1
// app.use(async (ctx, next) => {
//     // ctx 就是 context 上下文, 封装包含了request和response
//     ctx.body = '利用koa + superagent主动发起请求的包 + cheerio把HTML结构的字符串转为dom结构的包抓取页面数据'
//     next()
// })

// 中间件2
app.use(async (ctx, next) => {
    const arr = []
    const data = await new Promise(resolve => {
        // 抓取一个页面的数据
        request
            .get('http://www.wtown.com.cn/index.php/Reservation/Ticket/index.html')
            .end((err, res) => {
                console.log(res);
                
                // console.log(res); // res是抓到的页面数据
                const data = res.text
                const $ = cheerio.load(data)
                // 分析页面DOM结构抓取相应的数据
                $(".box ul li").each((i, v) => {
                    const $v = $(v)
                    const obj = {
                        img: join('http://www.wtown.com.cn/', $v.find('.ticket-left img').prop("src")),
                        src: join('http://www.wtown.com.cn/', $v.find('.ticket-right .fs24 a').prop("href")),
                        text: $v.find('.ticket-right .txt').text().trim(),
                        price: $v.find('.ticket-right p .fs24').text().trim(),
                    }
                    arr.push(obj)
                });
                resolve(arr)
            })
    })
    console.log(data);
    ctx.body = data
})


app.listen(3000)
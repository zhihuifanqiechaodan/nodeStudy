<!--
 * @Description:
 * @Author: Tank
 * @GitHub: https://github.com/zhihuifanqiechaodan
 * @Date: 2019-01-18 14:17:34
 * @LastEditTime: 2019-02-22 08:48:36
 -->

## 初步渐进的学习 node 的用法

#### 关于 node

简单的说 Node.js 就是运行在服务端的 JavaScript。

Node.js 是一个基于 Chrome JavaScript 运行时建立的一个平台。

Node.js 是一个事件驱动 I/O 服务端 JavaScript 环境，基于 Google 的 V8 引擎，V8 引擎执行 Javascript 的速度非常快，性能非常好。

#### 安装 Node.js

[Node.js 中文网](http://nodejs.cn//)

2. 打开命令窗口输入以下代码检查 Node 是否成功安装, Node 安装时会同时把 NPM 安装上

   ```javascript
   node - v; // 出现版本号说明 node 安装成功
   ```

   ```javascript
   npm - v; // 出现版本号说明 npm 安装成功
   ```

#### 使用 npm 管理我们的项目依赖

1. 在命令行运行以下代码, 初始化项目, 使用 npm 管理项目中的依赖包

   ```javascript
   npm init -y // 初始化项目的包管理器
   ```

2. 剩余关于各个配置介绍请查看 main.js 文件,有详细注释.

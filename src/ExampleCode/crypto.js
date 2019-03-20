/*
 * @Description: 
 * @Author: Tank
 * @GitHub: https://github.com/zhihuifanqiechaodan
 * @Date: 2019-02-23 13:24:12
 * @LastEditTime: 2019-02-23 13:44:51
 */
// 原生模块: crypto - 加密
// crypto 模块提供了加密功能，包括对 OpenSSL 的哈希、HMAC、加密、解密、签名、以及验证功能的一整套封装。

const crypto = require('crypto')

// md5 XXXXXXXXXX 这就是加密的方式

// 例如: 加密一段密码
const KEY = "zhihuifanqiechaodan"

// 利用加密模块下的哈希加密, 它有很多种, 如下
// console.log(crypto.getHashes());

// 这里我们使用常用的 md5 加密
const encipher = crypto.createHash("md5") // 利用 crypto 模块生成一个 md5 的加密对象

// 通过上面创建的加密对象下的update方法去加密的KEY
encipher.update(KEY)

/**
 * 通过上面创建的加密对象下的digest方法去输出我们加密的KEY, 它只可以输出一次
 * const encipherKey = encipher.digest()
 * 默认加密输出为 Buffer 对象, 对象里面存储的是二进制的数据, 这种数据不好存在数据库
 * 可以通过传参的形式, 将输出的加密对象转为对应的格式 例如: 'base64' 'hex'(16进制形式) 'latin1'
 */
const encipherKey = encipher.digest('hex')
console.log(encipherKey);






// 哈希加密方式
// ['DSA',
//     'DSA-SHA',
//     'DSA-SHA1',
//     'DSA-SHA1-old',
//     'RSA-MD4',
//     'RSA-MD5',
//     'RSA-MDC2',
//     'RSA-RIPEMD160',
//     'RSA-SHA',
//     'RSA-SHA1',
//     'RSA-SHA1-2',
//     'RSA-SHA224',
//     'RSA-SHA256',
//     'RSA-SHA384',
//     'RSA-SHA512',
//     'dsaEncryption',
//     'dsaWithSHA',
//     'dsaWithSHA1',
//     'dss1',
//     'ecdsa-with-SHA1',
//     'md4',
//     'md4WithRSAEncryption',
//     'md5',
//     'md5WithRSAEncryption',
//     'mdc2',
//     'mdc2WithRSA',
//     'ripemd',
//     'ripemd160',
//     'ripemd160WithRSA',
//     'rmd160',
//     'sha',
//     'sha1',
//     'sha1WithRSAEncryption',
//     'sha224',
//     'sha224WithRSAEncryption',
//     'sha256',
//     'sha256WithRSAEncryption',
//     'sha384',
//     'sha384WithRSAEncryption',
//     'sha512',
//     'sha512WithRSAEncryption',
//     'shaWithRSAEncryption',
//     'ssl2-md5',
//     'ssl3-md5',
//     'ssl3-sha1',
//     'whirlpool'
// ]
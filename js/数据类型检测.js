/*
 * @Author: xiehongchen 1754581057@qq.com
 * @Date: 2024-02-01 15:00:58
 * @LastEditors: xiehongchen 1754581057@qq.com
 * @LastEditTime: 2024-02-01 16:43:02
 * @FilePath: /TestCase/js/数据类型检测.js
 * @Description: typeof x、x instanceof y、x.constructor.name、Object.prototype.toString.call(x).slice(8, -1)
 * 认真学习每一天
 */
const obj = {name: 'xie'}
const num = 1
const str = '12'
const sym = Symbol(1)
const big = BigInt(123123)
const bool = true
const func = () => {}
const time = new Date()
const nu = null
const und = undefined
const reg = new RegExp()
const arr = []

console.log('---typeof---')
console.log(typeof obj) // object
console.log(typeof num) // number
console.log(typeof str) // string
console.log(typeof sym) // symbol
console.log(typeof big) // bigint
console.log(typeof bool) // boolean
console.log(typeof func) // function
console.log(typeof time) // object
console.log(typeof nu) // object
console.log(typeof und) // undefined
console.log(typeof reg) // object
console.log(typeof arr) // object
console.log('---instanceof---')
// instanceof只对object类型生效，数组也可以
console.log(obj instanceof Object) // true
console.log(arr instanceof Array) // true
console.log(func instanceof Object) // true
console.log(num instanceof Number) // false
console.log('---constructor---')
console.log(obj.constructor.name) // Object
console.log(num.constructor.name) // Number
console.log(str.constructor.name) // String
console.log(sym.constructor.name) // Symbol
console.log(big.constructor.name) // BigInt
console.log(bool.constructor.name) // Boolean
console.log(func.constructor.name) // Function
console.log(time.constructor.name) // Date
// console.log(nu.constructor.name) // 报错
// console.log(und.constructor.name) // 报错
console.log(reg.constructor.name) // RegExp
console.log(arr.constructor.name) // Array
console.log('--Object.prototype.toString.call(x).slice(8, -1)--')
console.log(Object.prototype.toString.call(obj).slice(8, -1)) // Object
console.log(Object.prototype.toString.call(func).slice(8, -1)) // Function
console.log(Object.prototype.toString.call(nu).slice(8, -1)) // Null
console.log(Object.prototype.toString.call(und).slice(8, -1)) // Undefined
console.log(Object.prototype.toString.call(arr).slice(8, -1)) // Array
// 1、 this与普通函数执行
// 1.1  函数体在非严格模式下的全局函数执行，this指向window
// function fn () {
//   console.log(this)
// }
// fn() 

// 1.2  函数体在严格模式下的全局函数执行，this指向undifined
// 'use strict';
// function fn () {
//   console.log(this)
// }
// fn() 

// 1.3  函数体在非严格模式下的函数中的函数执行，this执行window
// function fn1 () {
//   function fn2 () {
//     console.log(this)
//   }
//   fn2()
// }
// fn1()

// 1.4  函数体在严格模式下的函数中的函数执行，this指向undifined
// 'use strict'
// function fn1 () {
//     function fn2 () {
//         console.log(this)  
//     } 
//     fn2()
// }
// fn1() 

// 1.5 函数体在非严格模式下，而函数调用在严格模式下时, this依然指向window
// function fn () {
//   console.log(this)
// }
// (function () {
//   'use strict'
//   fn()    
// })()

// 2、this与对象中的方法执行
// 2.1 无论是否是严格模式，当函数引用有上下文对象时，隐式绑定规则会把函数调用中的this绑定到这个上下文对象。
// 2.1.1 函数直接在对象中声明
// var obj = {
//   a: 1,
//   test: function () {
//       console.log(this.a)
//   }
// }
// obj.test(); // => 1


// 2.1.2 函数先声明，再由对象引用
// function test () {
//   console.log(this.a)
// }
// var obj = {
//   a: 1,
//   test: test
// }
// obj.test();    // => 1

// 2.2 对象属性引用链中只有最顶层或者说只有最后一层会影响调用位置。
// 2.2.1 多层对象引用，this指向离函数调用最近的对象
// function test () {
//   console.log(this.a)
// }
// var obj2 = {
//   a: 2,
//   test: test
// }
// var obj1 = {
//   a: 1,
//   obj2: obj2
// }
// obj1.obj2.test()    // => 2
// 2.3 隐式丢失：被隐式绑定的函数可能会丢失绑定对象。
// 2.3.1 将obj.foo当作函数别名赋值给一个变量
// function foo () {
//   console.log(this.a)
// }
// var obj = {
//   a: 2,
//   foo: foo
// }
// var bar = obj.foo // 如果直接指向bar()，输出的是undifined，因为this指向的是全局
// var a = '全局属性'
// bar()   // => 全局属性


// 2.3.2 将obj.foo当作bar的回调函数。
// function foo () {
//   console.log(this.a)
// }
// function bar (fn) {
//   fn()
// }
// var obj = {
//   a: 2,
//   foo: foo
// }
// var a = '全局属性'
// bar(obj.foo)    // => 全局属性

// 3、this与call,apply
// 3.1   call
// var xw = {
//   name : "小王",
//   gender : "男",
//   age : 24,
//   say : function(school,grade) {
//       console.log(this.name + " , " + this.gender + " ,今年" + this.age + " ,在" + school + "上" + grade);                                
//   }
// }
// var xh = {
//   name : "小红",
//   gender : "女",
//   age : 12
// }

// xw.say.call(xh, "实验小学", "六年级")   // => 小红 , 女 ,今年12 ,在实验小学上六年级

// 3.2  apply
var xw = {
  name : "小王",
  gender : "男",
  age : 24,
  say : function(school,grade) {
      console.log(this.name + " , " + this.gender + " ,今年" + this.age + " ,在" + school + "上" + grade);                                
  }
}
var xh = {
  name : "小红",
  gender : "女",
  age : 12
}

xw.say.apply(xh,["实验小学","六年级"])  // => 小红 , 女 ,今年12 ,在实验小学上六年级
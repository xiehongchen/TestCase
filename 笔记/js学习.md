## js学习

### js执行过程

1. 词法分析：将代码的字符串分析得到词法单元token
2. 语法分析：将词法单元流解析成AST（抽象语法树），该过程包括词法作用域的生成、变量提升等阶段
3. 代码生成：AST转换成字节码，这部分有V8中的lgnition解释器来生成的
4. 代码执行：逐条解释执行字节码，注意了，当 V8 发现有大量重复字节码时（热点代码 HotSpot ），会将其编译成机器码（由引擎中 TurboFan 编译器进行编译），下次再碰到类似字节码不需要解释，直接执行，这种与解释器配合的过程也称为 ***JIT （即时编译）***。
5. 垃圾回收



### js作用域与作用域链

在es5之前，js只有**全局作用域**及**函数作用域**。es6引入了块级作用域。但是这个块级别作用域需要注意的是不是`{}`的作用域，而是`let`，`const`关键字的**块级作用域**

作用域链：[[scope]]中所存储的执行期上下文对象的`集合`，这个集合呈`链式连接`，我们把这种链式连接叫做`作用域链`



### 词法环境

词法环境是一个包含标识符变量映射的结构。（这里的标识符表示变量/函数的名称，变量是对实际对象【包括函数类型对象】或原始值的引用）。在词法环境中，有两个组成部分：（1）环境记录（environment record） （2）对外部环境的引用

- 环境记录是存储变量和函数声明的实际位置。
- 对外部环境的引用意味着它可以访问其外部词法环境。(实现作用域链的重要部分)
  

词法环境有两种类型：

- **全局环境**（在全局执行上下文中）是一个没有外部环境的词法环境。全局环境的外部环境引用为 null。它拥有一个全局对象（window 对象）及其关联的方法和属性（例如数组方法）以及任何用户自定义的全局变量，this 的值指向这个全局对象。
- **函数环境**，用户在函数中定义的变量被存储在环境记录中。对外部环境的引用可以是全局环境，也可以是包含内部函数的外部函数环境。

变量环境 Variable Environment

它也是一个词法环境，其 `EnvironmentRecord` 包含了由 `VariableStatements` 在此执行上下文创建的绑



变量环境组件（VariableEnvironment） 是用来登记var function变量声明，词法环境组件（LexicalEnvironment）是用来登记let const class等变量声明。

在ES6之前都没有块级作用域，ES6之后我们可以用let const来声明块级作用域，有这两个词法环境是为了实现块级作用域的同时不影响var变量声明和函数声明，具体如下：

1. 首先在一个正在运行的执行上下文内，词法环境由LexicalEnvironment和VariableEnvironment构成，用来登记所有的变量声明。

2. 当执行到块级代码时候，会先LexicalEnvironment记录下来，记录为oldEnv。

3. 创建一个新的LexicalEnvironment（outer指向oldEnv），记录为newEnv，并将newEnv设置为正在执行上下文的LexicalEnvironment。

4. 块级代码内的let const会登记在newEnv里面，但是var声明和函数声明还是登记在原来的VariableEnvironment里。

5. 块级代码执行结束后，将oldEnv还原为正在执行上下文的LexicalEnvironment。
   


### 浅拷贝、深拷贝

```js
const obj = {
  name: 'test',
  age: 18,
  height: 188,
  money: {
    jijing: 5000
  }
}
// 引用赋值，修改obj2的值，obj的值也会改，本质上obj和ibj2都指向同一个堆数据
const obj2 = obj
console.log('obj', obj2)
obj2.name = 'dawei'
console.log('obj', obj2)
console.log('obj', obj)

// 浅拷贝，值拷贝第一层，其他的依旧是引用赋值
const obj3 = {
  ...obj
}
console.log('obj', obj3)
obj3.name = 'dawei'
obj3.money.jijing = 10000
console.log('obj', obj3)
console.log('obj', obj)

// 深拷贝，完全独立的一个
const obj4 = JSON.parse(JSON.stringify(obj))
console.log('obj', obj4)
obj4.name = 'dawei'
obj4.money.jijing = 10000
console.log('obj', obj4)
console.log('obj', obj)
```



### ES8-对象相关的属性

```js
const obj = {
  name: "why",
  age: 18,
  height: 1.88,
  address: "广州市"
}

// 1.获取所有的key
const keys = Object.keys(obj)
console.log(keys)
//["name","age","height","address"]

// 2.ES8 Object.values
const values = Object.values(obj)
console.log(values)
//["why",18,1.88,"广州市"]

// 3.ES8 Object.entries
// 3.1. 对对象操作
const entries = Object.entries(obj)
console.log(entries)
//[["name","why"],["age",18],["height",1.88],[="address",="广州市"]]
for (const entry of entries) {
  const [key, value] = entry
  console.log(key, value)
  //name why
	//age 18
	//height 1.88
	//address 广州市
}

// 3.2. 对数组/字符串操作(了解)
console.log(Object.entries(["abc", "cba"]))
//[["0","abc"],["1","cba"]]
console.log(Object.entries("Hello"))
//[["0","H"],["1","e"],["2","l"],["3","l"],["4","o"]]
```



### 事件循环机制

> promise本身是一个同步的代码，只有它后面调用的then()方法里的回调才是微任务
>
> await右边的表达式还是会
>
> script标签本身是一个宏任务，当页面出现多个script标签的时候，浏览器会把script标签作为宏任务来解析
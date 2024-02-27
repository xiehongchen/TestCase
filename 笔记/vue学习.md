# 为什么要使用`ref()`函数来声明响应式状态

> **[为什么要使用ref ?](https://cn.vuejs.org/guide/essentials/reactivity-fundamentals.html#why-refs)**
>
> 当你在模板中使用了一个 ref，然后改变了这个 ref 的值时，Vue 会自动检测到这个变化，并且相应地更新 DOM。这是通过一个基于依赖追踪的响应式系统实现的。当一个组件首次渲染时，Vue 会**追踪**在渲染过程中使用的每一个 ref。然后，当一个 ref 被修改时，它会**触发**追踪它的组件的一次重新渲染。
>
> 在标准的 JavaScript 中，检测普通变量的访问或修改是行不通的。然而，我们可以通过 getter 和 setter 方法来拦截对象属性的 get 和 set 操作。
>
> 该 `.value` 属性给予了 Vue 一个机会来检测 ref 何时被访问或修改。在其内部，Vue 在它的 getter 中执行追踪，在它的 setter 中执行触发。从概念上讲，你可以将 ref 看作是一个像这样的对象：
>
> ```js
> // 伪代码，不是真正的实现
> const myRef = {
> _value: 0,
> get value() {
> track()
> return this._value
> },
> set value(newValue) {
> this._value = newValue
> trigger()
> }
> }
> ```
>
> 另一个 ref 的好处是，与普通变量不同，你可以将 ref 传递给函数，同时保留对最新值和响应式连接的访问。当将复杂的逻辑重构为可重用的代码时，这将非常有用。



# computed和watch、watchEffect

| 对比依据              | computed | watch            | watchEffect |
| --------------------- | -------- | ---------------- | ----------- |
| 是否自动收集依赖（1） | 自动     | 需要指定依赖对象 | 自动        |
| 有无返回值            | 有       | 无               | 有          |
| 是否可以赋值          | 可以     | 不能             | 不能        |
| 使用场景              | 简单情况 | 复杂情况         | 简单情况    |
| 是否立即执行          | 是       | 看参数（2）      | 是          |
| 本质                  | class    | function         | function    |

（1）依赖：指的是响应性依赖，也就是侦听 ref、reactive 这类具有响应性的对象。

（2）watch：默认情况下，被侦听对象变化时才会执行，但是可以通过 options 参数设置为可以立即执行

> computed的缓存原理：就是ComputedRefImpl上有私有成员`_value`，执行get方法时，会吧返回值存入`_value`，template直接从`_value`属性获取数据，在需要更新缓存的时候才会调用`getter`方法



# vue的模版编译

模板字符串 -> 解析器 -> AST -> 优化器 -> AST -> 代码生成器 -> 渲染函数



# vue的响应式原理



# pinia和vuex

## pinia

- pinia专门为vue3设计开发，支持Componention API，支持TypeScript，支持类型推断，是一个轻量级的状态管理解决方案
- 只有state、getter、actions，可以直接使用，更加的的API，更少的规范
- 在不重新加载页面的情况下可以修改store，支持热模块更换



## vuex

- vuex为vue2设计开发的
- 有state、getter、mutation、action四个，只有mutation才能变更状态，action是提交mutation。action包含异步操作
- 还有一个module，模块，将一些一起的都集合到一个模块，有点像vue3的Componention API


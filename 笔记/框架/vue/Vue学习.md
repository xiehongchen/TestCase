# 为什么要使用`ref()`函数来声明响应式状态

> **[为什么要使用ref ?](https://cn.vuejs.org/guide/essentials/reactivity-fundamentals.html#why-refs)**
>
> 当你在模板中使用了一个 ref，然后改变了这个 ref 的值时，Vue 会自动检测到这个变化，并且相应地更新 DOM。这是通过一个基于依赖追踪的响应式系统实现的。当一个组件首次渲染时，Vue 会**追踪**在渲染过程中使用的每一个 ref。然后，当一个 ref 被修改时，它会**触发**追踪它的组件的一次重新渲染。
>
> 在标准的 JavaScript 中，检测普通变量的访问或修改是行不通的。然而，我们可以通过 getter 和 setter 方法来拦截对象属性的 get 和 set 操作。
>
> 该 `.value` 属性给予了 Vue 一个机会来检测 ref 何时被访问或修改。在其内部，Vue 在它的 getter 中执行追踪，在它的 setter 中执行触发。从概念上讲，你可以将 ref 看作是一个像这样的对象：
>
> js
>
> ```js
> // 伪代码，不是真正的实现
> const myRef = {
>   _value: 0,
>   get value() {
>     track()
>     return this._value
>   },
>   set value(newValue) {
>     this._value = newValue
>     trigger()
>   }
> }
> ```
>
> 另一个 ref 的好处是，与普通变量不同，你可以将 ref 传递给函数，同时保留对最新值和响应式连接的访问。当将复杂的逻辑重构为可重用的代码时，这将非常有用。



# computed和watch对比



# vue的模版编译

模板字符串 -> 解析器 -> AST -> 优化器 -> AST -> 代码生成器 -> 渲染函数


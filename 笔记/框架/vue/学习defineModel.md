# defineModel
这个需要vue3.4才有的宏，本质上就是`v-on`和`v-bind`的简化版，`v-model`
```js
<Child :value="value" @changeValue="changeValue">
```
这个宏可以用来声明一个双向绑定 prop，通过父组件的 v-model 来使用

在底层，这个宏声明了一个 model prop 和一个相应的值更新事件。如果第一个参数是一个字符串字面量，它将被用作 prop 名称；否则，prop 名称将默认为 "modelValue"。在这两种情况下，你都可以再传递一个额外的对象，它可以包含 prop 的选项和 model ref 的值转换选项。

```js
// 声明 "modelValue" prop，由父组件通过 v-model 使用
const model = defineModel()
// 或者：声明带选项的 "modelValue" prop
const model = defineModel({ type: String })

// 在被修改时，触发 "update:modelValue" 事件
model.value = "hello"

// 声明 "count" prop，由父组件通过 v-model:count 使用
const count = defineModel("count")
// 或者：声明带选项的 "count" prop
const count = defineModel("count", { type: Number, default: 0 })

function inc() {
  // 在被修改时，触发 "update:count" 事件
  count.value++
}
```

如果为 defineModel prop 设置了一个 default 值且父组件没有为该 prop 提供任何值，会导致父组件与子组件之间不同步。在下面的示例中，父组件的 myRef 是 undefined，而子组件的 model 是 1：

```js
// 子组件：
const model = defineModel({ default: 1 })

// 父组件
const myRef = ref()
html
<Child v-model="myRef"></Child>
```
## 修饰符和转换器
为了获取 v-model 指令使用的修饰符，我们可以像这样解构 defineModel() 的返回值：

```js
const [modelValue, modelModifiers] = defineModel()

// 对应 v-model.trim
if (modelModifiers.trim) {
  // ...
}
```
当存在修饰符时，我们可能需要在读取或将其同步回父组件时对其值进行转换。我们可以通过使用 get 和 set 转换器选项来实现这一点：

```js
const [modelValue, modelModifiers] = defineModel({
  // get() 省略了，因为这里不需要它
  set(value) {
    // 如果使用了 .trim 修饰符，则返回裁剪过后的值
    if (modelModifiers.trim) {
      return value.trim()
    }
    // 否则，原样返回
    return value
  }
})
```
在 TypeScript 中使用 ​
与 defineProps 和 defineEmits 一样，defineModel 也可以接收类型参数来指定 model 值和修饰符的类型：

```ts
const modelValue = defineModel<string>()
//    ^? Ref<string | undefined>

// 用带有选项的默认 model，设置 required 去掉了可能的 undefined 值
const modelValue = defineModel<string>({ required: true })
//    ^? Ref<string>

const [modelValue, modifiers] = defineModel<string, "trim" | "uppercase">()
//                 ^? Record<'trim' | 'uppercase', true | undefined>
```
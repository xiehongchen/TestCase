const obj = {
  name: "John",
  age: 30,
  address: {
    street: "123 Main St",
    city: "Anytown",
    state: "Anystate"
  },
  date: new Date(123),
  move () {
    console.log('111')
  }
}
function func() {
  console.log('222')
}
/**
 * 原生js structuredClone接口
 * 缺点：
 * 1、不能拷贝函数或方法（就拷贝对象里面有就报错）
 * 2、不能拷贝DOM节点
 * 3、原型链不能被遍历或拷贝
 * 优点：
 * 1、支持的拷贝类型较多：JS内置对象（Array、Date等）
 * 2、Error类型
 * 3、Web/API类型
 */
// const copy1 = structuredClone(obj);
// const copy1 = structuredClone(func);
// console.log(copy1)
// console.log(copy1 === obj)  // false

/**
 * 只有一层时，为深拷贝，两层的是浅拷贝
 * 修改copy2第二层的数据，会改变obj的数据，因为第二次是浅拷贝，为引用类型属性
 */
// const copy2 = Object.assign({}, obj)
// copy2.move()
// console.log(copy2)
// console.log(copy2 === obj)

/**
 * 和Object.assign一样
 */
// const copy3 = {...obj}
// copy3.address.city = '111'
// console.log(copy3)
// console.log(obj)
// console.log(copy3 === obj) 

/**
 * 深拷贝
 * 缺点：
 * 1、会忽略Symbol和undefined和function
 * 2、不能拷贝循环引用的对象
 * 3、不能序列化函数，拷贝出来的对象的属性顺序可能会和源对象不一致
 * 4、拷贝Date对象，得到的是字符串；拷贝RegExp对象，得到的是{}
 * 5、对象中含有NaN，Infinity会变成null
 */
// const copy4 = JSON.parse(JSON.stringify(obj))
// console.log(copy4)
// console.log(copy4 === obj)

/**
 * 手写浅拷贝
 * 如果属性是基本数据类型，则拷贝基本类型的值；如果属性是引用类型，拷贝的就是内存地址 ，会受拷贝对象（本体）的影响
 */
function shallowCopy(obj) {
  if (typeof obj !== 'object') return;
  let newObj = Array.isArray(obj) ? [] : {};
  for (let key in obj) {
      if (obj.hasOwnProperty(key)) { 
          newObj[key] = obj[key];
      }
  }
  return newObj;
}
// let copy5 = shallowCopy(obj)
// copy5.name = 'dunny'
// copy5.address.city = 'adasd'
// console.log(copy5);
// console.log(obj); 


/**
 * 手写深拷贝
 * 原始类型直接拷贝，引用类型递归
 */
function deepCopy(obj) {
  if (typeof obj !== 'object') return obj;
  if (obj == null) return obj;
  let newObj = Array.isArray(obj) ? [] : {};
  // 拷贝Date对象
  if (obj instanceof Date) {
      newObj = new Date(obj)
  }
  // 拷贝RegExp对象
  if (obj instanceof RegExp) {
      newObj = new RegExp(obj)
  }
  for (let key in obj) {
      if (obj.hasOwnProperty(key)) { //自己本身具有的属性
          newObj[key] = typeof obj[key] == 'object' ? deepCopy(obj[key]) : obj[key];
      }
  }
  return newObj;
}
const copy6 = deepCopy(obj)
copy6.name = '123'
copy6.address.city = 'qwe'
console.log(copy6)
console.log(obj)
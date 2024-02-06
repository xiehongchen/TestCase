/*
 * @Author: xiehongchen 1754581057@qq.com
 * @Date: 2024-02-06 14:29:09
 * @LastEditors: xiehongchen 1754581057@qq.com
 * @LastEditTime: 2024-02-06 14:29:14
 * @FilePath: /TestCase/js/输出顺序问题3.js
 * @Description: 
 * 认真学习每一天
 */
console.log('1')
setTimeout(() => {
    console.log('2');
}, 0)
requestAnimationFrame(() => {
    console.log('3') 
})
requestIdleCallback(() => {
    console.log('4')
})
new Promise(resolve => {
    console.log('5');
}).then(value => {
    console.log(value);
});
async function a() {
    console.log(await '7');
}
a()
console.log('8')
/**
 * 1 5 8 7 3 2 4
 */
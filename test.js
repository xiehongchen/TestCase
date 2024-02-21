/*
 * @Author: xiehongchen 1754581057@qq.com
 * @Date: 2023-11-17 11:08:53
 * @LastEditors: xiehongchen 1754581057@qq.com
 * @LastEditTime: 2024-02-20 16:30:50
 * @FilePath: /TestCase/test.js
 * @Description: 
 * 认真学习每一天
 */

const promises = [
    Promise.resolve('resolved'),
    Promise.reject('rejected'),
    Promise.resolve('resolved')
  ];
  
Promise.allSettled(promises)
.then(results => {
    console.log('results', results);
})
.catch(error => {
    console.error(error);
});
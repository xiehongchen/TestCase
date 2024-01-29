/*
 * @Author: xiehongchen 1754581057@qq.com
 * @Date: 2023-11-16 16:14:23
 * @LastEditors: xiehongchen 1754581057@qq.com
 * @LastEditTime: 2024-01-29 17:58:58
 * @FilePath: /TestCase/a.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

for (let i = 1; i <= 10; i++) {
  setTimeout(() => {
      console.log(i);
  }, i * 500); // 设置不同的延迟时间，每次递增500ms
}

for (let i = 1; i <= 10; i++) {
  (function (index) {
      setTimeout(() => {
          console.log(index);
      }, index * 500);
  })(i);
}

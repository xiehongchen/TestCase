/*
 * @Author: xiehongchen 1754581057@qq.com
 * @Date: 2024-02-06 14:16:31
 * @LastEditors: xiehongchen 1754581057@qq.com
 * @LastEditTime: 2024-02-06 14:16:44
 * @FilePath: /TestCase/js/获取页面上最多的元素.js
 * @Description: 
 * 认真学习每一天
 */
function findMostFrequentElement() {
  const elements = document.querySelectorAll('*');
  const counts = {};
  // 统计每个元素的出现次数
  elements.forEach(element => {
    const tag = element.tagName.toLowerCase();
    counts[tag] = (counts[tag] || 0) + 1;
  });

  let maxCount = 0;
  let mostFrequentElement = '';

  // 找到出现次数最多的元素
  for (const tag in counts) {
    if (counts[tag] > maxCount) {
      maxCount = counts[tag];
      mostFrequentElement = tag;
    }
  }

  return mostFrequentElement;
}
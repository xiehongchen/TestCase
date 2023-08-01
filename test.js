function removeLeastFrequentCharacter(str) {
  // Step 1: 统计每个字符出现的次数
  const charCount = {};
  for (let char of str) {
      charCount[char] = (charCount[char] || 0) + 1;
  }

  // Step 2: 找到出现次数最少的字符
  let minFrequency = Number.MAX_VALUE;
  for (let char in charCount) {
      if (charCount[char] < minFrequency) {
          minFrequency = charCount[char];
      }
  }

  // Step 3: 删除出现次数最少的字符，得到结果字符串
  const result = str.split('').filter(char => charCount[char] !== minFrequency).join('');
  return result;
}

const inputString = "abacada"; // 示例输入字符串
const resultString = removeLeastFrequentCharacter(inputString);
console.log(resultString); // 输出结果字符串

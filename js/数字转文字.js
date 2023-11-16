const NUMBER_MAP = {
  0: '零',
  1: '一',
  2: '二',
  3: '三',
  4: '四',
  5: '五',
  6: '六',
  7: '七',
  8: '八',
  9: '九',
};

const UNIT_MAP = {
  1: '',
  10: '十',
  100: '百',
  1000: '千',
  10000: '万',
  100000000: '亿',
};

function transNumberToChinese(num) {
  if (num === 0) {
      return NUMBER_MAP[0];
  }

  const MAX_NUMBER = 1000000000000; // 最大处理的数字范围，1万亿

  if (num < 0 || num >= MAX_NUMBER) {
      throw new Error('输入的数字超出有效范围');
  }

  let result = '';
  let isLastZero = false;

  let unit = 1;
  let temp = 1;
  while (num > 0) {
      const digit = num % 10;
      num = Math.floor(num / 10);

      if (digit === 0) {
          if (!isLastZero && num % 10 !== 0) {
              result = NUMBER_MAP[0] + result;
          }
          isLastZero = true;
      } else {
          isLastZero = false;
          result = NUMBER_MAP[digit] + UNIT_MAP[unit] + result;
      }
      unit *= 10;
      temp *= 10;
      if (unit === 1000000000 || unit === 100000) {
        unit = 10;
      }
      if (temp === 100000000) {
        unit = 100000000
      }
  }

  return result;
}

// 测试函数
const num = 123400789099;
console.log(transNumberToChinese(num)); // 输出：一亿二千三百四十五万六千七百八十九

/**
 * 两个超过整数存储范围的大正整数求和
 * @param {string} a
 * @param {string} b
 */
function sum(a, b) {
    let result = '';
    // 判断最大长度
    const len = Math.max(a.length, b.length);
    // 如果不够就前面补0
    a = a.padStart(len, '0');
    b = b.padStart(len, '0');
    // 进位
    let carry = 0;
    // 循环判断，因为从最小位开始，也就是最后一位
    for (let i = len - 1; i >= 0; i--) {
        // 同位相加，并加上进位值
        const n = +a[i] + +b[i] + carry;
        // 判断carry，如果n超过10，则进位，即carry为1，否则为0
        carry = Math.floor(n / 10);
        // 将本次相加结果的个位数放到result前面，后面累次就会变到最后
        result = n % 10 + result;
    }
    if (carry) {
        result = '1' + result;
    }
    return result;
}

console.log(sum('222298707092', '3444444444423141512341234444'));
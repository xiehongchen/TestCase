
function Test36Bin(s, t) {
    let chars = '0123456789abcdefghijklmnopqrstuvwxyz';
    let carry = 0;
    let result = '';
    for (let i = s.length - 1, j = t.length - 1; s[i] || t[j]; --i, --j) {
        console.log("数字",chars.indexOf(s[i]), chars.indexOf(t[j]));
        let sum = carry + (s[i] ? chars.indexOf(s[i]) : 0) + (t[j] ? chars.indexOf(t[j]) : 0);
        console.log("和",sum);
        carry = Math.floor(sum / 36)
        console.log("取整",carry);
        let r = sum % 36;
        console.log("求余",r);
        result += chars[r];
        console.log("最终和",result);
    }
    if (carry) {
        result += '1'
    }
    console.log("最终结果",result);
    return result.split('').reverse().join('');
}

console.log(Test36Bin('zzzy', 'zz')); // 3y
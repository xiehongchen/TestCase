/**
 * 问题：给你一个整数 x ，如果 x 是一个回文整数，返回 true ；否则，返回 false 。
 * 回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。
 * 例如，121 是回文，而 123 不是。
 * @param {number} x
 * @return {boolean}
 */
// 方法一：转换成字符串形式
var isPalindrome = function (x) {
    if (x < 0) {
        return false
    } else {
        console.log(x);
        console.log(x.toString());
        console.log(x.toString().split(''));
        x = x.toString().split('');
        console.log(x.toString());
        console.log(x.reverse().toString());
        if (x.toString() === x.reverse().toString()) {
            return true
        } else {
            return false
        }
    }
};

console.log(isPalindrome(12321));
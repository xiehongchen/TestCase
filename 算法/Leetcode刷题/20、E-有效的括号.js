/**
 * 问题：给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
    有效字符串需满足：
    左括号必须用相同类型的右括号闭合。
    左括号必须以正确的顺序闭合。
    每个右括号都有一个对应的相同类型的左括号。
 * 解决：1、左括号要有右括号闭合，因此字符串的长度必须是偶数，不能为false
 * @param {string} s
 * @return {boolean}
 */
// 方法一：循环长度判断，根据对半，只需要for循环s的长度的一半即可，每次都进行字符串替换为空
// 那么for循环之后,就可以得到最后的s，如果长度为0，则字符串有效，返回true
var isValid = function (s) {
    let len = s.length;
    if(len%2 !== 0){
        return false;
    }
    len = len / 2;
    for (let i = 0; i < len; i++) {
        // 将() 替换成 空字符串""
       s = s.replace("()","")
       s = s.replace("{}","")
       s = s.replace("[]","")
    }
    return s.length === 0;

};

console.log(isValid("(){"));
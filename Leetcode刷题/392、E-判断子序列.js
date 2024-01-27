/**
 * 问题：给定字符串 s 和 t ，判断 s 是否为 t 的子序列。

字符串的一个子序列是原始字符串删除一些（也可以不删除）字符而不改变剩余字符相对位置形成的新字符串。（例如，"ace"是"abcde"的一个子序列，而"aec"不是）。
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
    let i = 0;
    if (s.length === 0 || (s.length === 0 && t.length === 0) || s === t) return true
    for (let j = 0; j < t.length; j++) {
        if (s[i] == t[j]) {
            if (i === s.length - 1) {
                return true
            }
            i++;
        }
        console.log(i);
    }
    return false
}

console.log(isSubsequence("abc", "ahbgdc"));
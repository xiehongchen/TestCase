/**
 * 问题：编写一个函数来查找字符串数组中的最长公共前缀。如果不存在公共前缀，返回空字符串 ""。
 * @param {string[]} strs
 * @return {string}
 */
// 方法一:先将字符串数组的第一个作为参考字符串，然后for循环逐个与其他字符串比较，不相等就结束一个for循环（变量j的）
var longestCommonPrefix = function (strs) {
    if (strs.length == 0)
        return "";
    let ans = strs[0];
    console.log(ans);
    for (let i = 1; i < strs.length; i++) {
        let j = 0;
        for (; j < ans.length && j < strs[i].length; j++) {
            console.log(strs[i][j]);
            if (ans[j] != strs[i][j])
                break;
        }
        // substr(0, j)，删除，返回从下标0到j的字符串，也就是这两个字符串相同的字符，如第一个返回的是flow，第二个返回的是fl
        console.log(ans.substr(0, j));
        ans = ans.substr(0, j);
        if (ans === "")
            return ans;
    }
    return ans;
};

// 方法二:逐位比较
var longestCommonPrefix2 = function(strs) {
    var re = '';
    if (!strs.length) return re;
    for (var j=0;j<strs[0].length;j++){//第j位
        for (var i=1;i<strs.length;i++){//第i个
            if (strs[i][j]!=strs[0][j]) return re
        }
        re += strs[0][j];
    }
    return re;
};


console.log(longestCommonPrefix(["flower", "flow", "flight"]));
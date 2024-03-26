/**
 * 问题：给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。
 * @param {string} s
 * @return {number}
 */
// 方法一：滑动窗口，遍历字符串，判断字符是否在窗口数组里面，不在就push，在就删除该字符和该字符在窗口数组前的字符，然后再push，最后将max作为最长的子串长度
var lengthOfLongestSubstring = function (s) {
    let arr = []
    let max = 0
    for (let i = 0; i < s.length; i++) {
        let index = arr.indexOf(s[i])
        if(index != -1){
            // 删除索引号为0到index+1的元素
            arr.splice(0,index+1)
        }
        // 将该字符push到arr
        arr.push(s.charAt(i))
        // 判断大小
        max = Math.max(arr.length,max)
    }
    return max
};

// 方法二:和一类似
var lengthOfLongestSubstring1 = function(s) {
    let arr=[]
    let max=0;
    for(let i = 0;i<s.length;i++){
        if(!arr.includes(s[i])){
            arr.push(s[i])
            max = Math.max(arr.length,max)
        }else{
           let index = arr.indexOf(s[i])
           arr.splice(0,index+1)
           arr.push(s[i])
        }
    }
    return max
};

// 方法三:使用map数据结构
var lengthOfLongestSubstring2 = function(s) {
    let map = new Map(), max = 0
    for(let i = 0, j = 0; j < s.length; j++) {
        if(map.has(s[j])) {
            i = Math.max(map.get(s[j]) + 1, i)
        }
        max = Math.max(max, j - i + 1)
        map.set(s[j], j)
    }
    return max
};


console.log(lengthOfLongestSubstring1("abcabcbb"));
console.log(lengthOfLongestSubstring1("pwwkew"));
function generatePalindromes(s) {
    const result = [];
    const count = new Map();
    
    // 统计每个字符的出现次数
    for (let char of s) {
        count.set(char, (count.get(char) || 0) + 1);
    }
    
    // 统计出现奇数次的字符
    let oddChar = '';
    let oddCount = 0;
    for (let [char, freq] of count) {
        if (freq % 2 === 1) {
            oddChar = char;
            oddCount++;
            if (oddCount > 1) return []; // 如果出现奇数次的字符超过一个，无法构成回文排列，直接返回空列表
        }
    }
    
    // 生成回文排列
    function backtrack(path) {
        console.log('path', path)
        if (path.length === s.length) {
            result.push(path);
            return;
        }
        
        for (let [char, freq] of count) {
            console.log('char', char, freq)
            if (freq > 0) {
                count.set(char, freq - 2);
                backtrack(char + path + char);
                count.set(char, freq);
            }
        }
    }
    
    // 如果存在出现奇数次的字符，将其放在回文排列的中间
    if (oddCount === 1) {
        count.set(oddChar, count.get(oddChar) - 1);
        console.log('count', count)
        backtrack(oddChar);
    } else {
        backtrack('');
    }
    
    return result;
}

const s = "aabbd";
const palindromes = generatePalindromes(s);
console.log(palindromes);


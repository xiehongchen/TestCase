/**
 * 题目：给你一个整数 n，请你每隔三位添加点（即 "." 符号）作为千位分隔符，并将结果以字符串格式返回。
 * @param {*} n 
 * @returns 
 */
//方法一:遍历整数的每一位，将其加到一个字符串当中，每隔三位就加上.,最后将得到的字符串变成数组进行取反再变成字符串
var thousandSeparator = function (n) {
    let count = 0;
    let ans = "";
    do {
        let cur = n % 10;
        n = Math.floor(n / 10);
        ans += cur.toString();
        ++count;
        if (count % 3 == 0 && n) {
            ans += '.';
        }
    } while (n);
    console.log(ans); // 与结果相反，654.321
    // 将ans取反，ans为字符串，通过split('')先将其转换成数组
    // 然后reverse()取反，因为reverse()只能对数组使用，因此一定要先将其转成数组形式
    // 最后join('')将其转换成字符串形式
    console.log(ans.split('')); //  (7) ['6', '5', '4', '.', '3', '2', '1']
    console.log(ans.split());   //  ['654.321']
    console.log(ans.split().reverse()); //  ['654.321']，不起作用
    console.log(ans.split('').reverse());   //  (7) ['1', '2', '3', '.', '4', '5', '6']，这样才能起作用
    console.log(ans.split('').reverse().join());    //  1,2,3,.,4,5,6
    console.log(ans.split('').reverse().join(''));  //  123.456
    return ans.split('').reverse().join('');
};

// 方法二:判断整数的长度，每隔三位就将其第一、二、三位和符号.加到数组当中，最后删除第一位，因为第一位是符号.    取反再转换成字符串形式
var thousandSeparator2 = function (n) {
    n = n + ''
    let arr = [];
    if (n.length == 1) return n;
    for (var i = n.length - 1; i >= 0; i -= 3) {
        arr.push(n[i]);
        arr.push(n[i - 1]);
        arr.push(n[i - 2]);
        arr.push('.');
    }
    arr.pop();
    console.log(arr.reverse().join(''));
    return arr.reverse().join('');
};

thousandSeparator(123456);
thousandSeparator2(123456);
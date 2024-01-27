/**
 * 问题：给你一个字符串 date ，它的格式为 Day Month Year ，其中：

Day 是集合 {"1st", "2nd", "3rd", "4th", ..., "30th", "31st"} 中的一个元素。
Month 是集合 {"Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"} 中的一个元素。
Year 的范围在 ​[1900, 2100] 之间。
请你将字符串转变为 YYYY-MM-DD 的格式，其中：

YYYY 表示 4 位的年份。
MM 表示 2 位的月份。
DD 表示 2 位的天数。
 * @param {string} date
 * @return {string}
 */
var reformatDate = function (date) {
    const m = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    // 切割，获取每一个
    let [day, month, year] = date.split(" ")
    // 获取月份下标并加1，因为数组是从0开始，月份从1开始，并加上'0',然后截取最后两位
    month = ('0' + (m.indexOf(month) + 1)).slice(-2)
    // 加上'0',截取最后第四位到最后两位
    day = ('0' + day).slice(-4, -2)
    // 返回模板字符串
    return `${year}-${month}-${day}`
}

console.log(reformatDate("20th Oct 2052"));

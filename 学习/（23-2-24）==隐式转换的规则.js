// ？位置应该怎么写才能输出true
// var a = ?;
// 第一种：等号的隐式转换
var a = {
    n: 1,
    // valueOf: function(){
    //     return this.n++;
    // }
    toString: function () {
        return this.n++;
    }
}
console.log(
    a == 1 &&
    a == 2 &&
    a == 3
);

// 第二种：with语法
var i = 0;
with ({
    get a() {
        return ++i;
    }
}) {
    console.log(
        a === 1 &&
        a === 2 &&
        a === 3
    )
}

// 第三种：数组形式
var a = [1, 2, 3];
a.join = a.shift;
console.log(a == 1 && a == 2 && a == 3);


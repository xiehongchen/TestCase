// function speak(name){
//     const map = {
//         老牛:()=>console.log('老牛'),
//         老虎:()=>console.log('操作','老虎'),
//         小猫:()=>console.log('操作','小猫'),
//         小狗:()=>console.log('操作','小狗')
//     };
//     if(map[name]){
//         map[name]();
//     }else{
//         console.log("操作错误！！");
//     }
// }

// speak('小狗');

function speak(name) {
    const map = [
        [
            () => name.includes('牛'),
            () => console.log('老牛'),
        ],
        [
            () => name.endsWith('虎'),
            () => console.log('操作', '老虎'),
        ],
        [
            () => name.endsWith('猫'),
            () => console.log('操作', '小猫'),
        ],
        [
            () => name.includes('狗'),
            () => console.log('操作', '小狗')
        ]
    ];
    const target = map.find((m) => m[0]());
    if (target) {
        target[1]()
    } else {
        console.log("操作错误！！");
    }
}
speak('小狗');
function fn(s) {
    const res = []
    let map = new Map()
    map.set('a', 2)
    map.set('b', 2)
    map.set('d', 1)
    const oddCount = 1
    const oddChar = 'd'
    function getTrack(path) {
        console.log('path', path)
        if (path.length === s.length) {
            res.push(path)
            return
        }
        for (let [char, count] of map) {
            console.log('char', char, count, map)
            if (count > 0) {
                map.set(char, count - 2)
                getTrack(char + path + char)
                map.set(char, count)
                console.log('map', map)
            }
        }
    }
    if (oddCount === 1) {
        map.set(oddChar, 0)
        getTrack(oddChar)
    }
    console.log('res', res)
    return res
}
fn('aabbd')

/**
if判断未通过，循环1，遍历map，a为2，a-2，递归（后续未执行）
if判断未通过，循环2，遍历map，a为0，b为2，b-2，递归（后续未执行）
if判断通过，加到res，循环2执行递归后面的代码，b为2（后续执行）
循环2继续执行，d为0，跳过（循环2结束）
循环1后续执行，a为2（后续执行）
循环1继续执行，b为2，b-2，递归（后续未执行）
if判断未通过，循环3，遍历map，a为2，a-2，递归（后续未执行）
if判断通过，加到res，循环3后续执行，a为2（后续执行）
循环3继续执行，b为0，跳过
循环3继续执行，d为0，跳过（循环3结束）
循环1后续执行，b为2
循环1继续真系，d为0
*/ 
function splitString(k, str) {
    let result = ''
    let temp = ''
    const arr = str.split('-')
    result = arr[0]
    arr.forEach((item, index) => {
        if (index !== 0) {
            temp = temp + item
        }
    });
    let b = temp.split('')
    let a = []
    for (let i = 0, j = 0; i < b.length; j++) {
        a[j] = b.splice(i, i + k)
    }
    const c = a.map(item => {
       return change(item.join(''))
    }).join('-')
    return result + '-' + c
    function change(str) {
        let upper = 0
        let lower = 0
        for (let i = 0; i < str.length; i++) {
            const char = str.charAt(i)
            if (char >= 'A' && char <= 'Z') {
                upper++
            } else if (char >= 'a' && char <= 'z') {
                lower++
            }
        }
        if (upper > lower) {
            return str.toUpperCase()
        } else if (upper < lower) {
            return str.toLowerCase()
        } else {
            return str
        }
    }
}

console.log(splitString(12, '12abc-abCABc-4aB@'))

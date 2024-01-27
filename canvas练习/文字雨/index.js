const cvs = document.querySelector('canvas')
const ctx = cvs.getContext('2d')

// 初始化画布
function init() {
    // 设置画布宽高，devicePixelRatio为屏幕缩放比例
    cvs.width = window.innerWidth * devicePixelRatio;
    cvs.height = window.innerHeight * devicePixelRatio;
}
init();

// 字体大小
const fontSize = 40 * devicePixelRatio;
// 设置画布字体大小
ctx.font = `${fontSize}px  "Roboto Mono"`;
// 获取列
const columnCount = Math.ceil(cvs.width / fontSize);
// 存储字符出现的位置数组
const charIndex = new Array(columnCount).fill(0);

// 画
function draw() {
    // 设置颜色，透明
    ctx.fillStyle = 'rgba(0,0,0,0.1)';
    // 绘制矩形
    ctx.fillRect(0, 0, cvs.width, cvs.height);
    // 字体颜色
    ctx.fillStyle = '#6BE445';
    // 设置绘制文本的当前文本基线
    ctx.textBaseline = 'top';
    for (let i = 0; i < columnCount; i++) {
        // 获取随机字符
        const text = getRandomChar();
        // 获取字符x轴
        const x = i * fontSize;
        // 获取字符y轴
        const y = charIndex[i] * fontSize;
        // 写字符
        ctx.fillText(text, x, y);
        // 判断字符是否超过视口，以及随机时间
        if (y > cvs.height && Math.random() > 0.99) {
            // 设置为0，从头开始
            charIndex[i] = 0;
        } else {
            // 进行累加，也就是向下走
            charIndex[i]++;
        }
    }
}

// 获取字符串中的随机一个
function getRandomChar() {
    const str = '123456789abcdefghijklmnopqrstuvwxyz';
    return str[Math.floor(Math.random() * str.length)];
}

draw();
// 一直循环
setInterval(draw,50);
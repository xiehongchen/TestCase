var lrc = `[00:01.06]难念的经
[00:03.95]演唱：周华健
[00:06.78]
[00:30.96]笑你我枉花光心计
[00:34.15]爱竞逐镜花那美丽
[00:36.75]怕幸运会转眼远逝
[00:39.32]为贪嗔喜恶怒着迷
[00:41.99]责你我太贪功恋势
[00:44.48]怪大地众生太美丽
[00:47.00]悔旧日太执信约誓
[00:49.66]为悲欢哀怨妒着迷
[00:52.56]啊 舍不得璀灿俗世
[00:57.66]啊 躲不开痴恋的欣慰
[01:02.86]啊 找不到色相代替
[01:08.09]啊 参一生参不透这条难题
[01:13.15]吞风吻雨葬落日未曾彷徨
[01:15.73]欺山赶海践雪径也未绝望
[01:18.23]拈花把酒偏折煞世人情狂
[01:20.90]凭这两眼与百臂或千手不能防
[01:23.76]天阔阔雪漫漫共谁同航
[01:26.09]这沙滚滚水皱皱笑着浪荡
[01:28.68]贪欢一刻偏教那女儿情长埋葬
[01:32.38]
[01:34.09]吞风吻雨葬落日未曾彷徨
[01:36.50]欺山赶海践雪径也未绝望
[01:39.07]拈花把酒偏折煞世人情狂
[01:41.69]凭这两眼与百臂或千手不能防
[01:44.68]天阔阔雪漫漫共谁同航
[01:46.93]这沙滚滚水皱皱笑着浪荡
[01:49.54]贪欢一刻偏教那女儿情长埋葬
[01:53.41]
[02:15.45]笑你我枉花光心计
[02:18.53]爱竞逐镜花那美丽
[02:21.14]怕幸运会转眼远逝
[02:23.76]为贪嗔喜恶怒着迷
[02:26.43]责你我太贪功恋势
[02:28.98]怪大地众生太美丽
[02:31.60]悔旧日太执信约誓
[02:34.26]为悲欢哀怨妒着迷
[02:36.90]啊 舍不得璀灿俗世
[02:42.04]啊 躲不开痴恋的欣慰
[02:47.34]啊 找不到色相代替
[02:52.52]啊 参一生参不透这条难题
[02:57.47]吞风吻雨葬落日未曾彷徨
[03:00.05]欺山赶海践雪径也未绝望
[03:02.64]拈花把酒偏折煞世人情狂
[03:05.27]凭这两眼与百臂或千手不能防
[03:08.22]天阔阔雪漫漫共谁同航
[03:10.49]这沙滚滚水皱皱笑着浪荡
[03:13.06]贪欢一刻偏教那女儿情长埋葬
[03:18.45]吞风吻雨葬落日未曾彷徨
[03:20.90]欺山赶海践雪径也未绝望
[03:23.54]拈花把酒偏折煞世人情狂
[03:26.21]凭这两眼与百臂或千手不能防
[03:29.07]天阔阔雪漫漫共谁同航
[03:31.32]这沙滚滚水皱皱笑着浪荡
[03:33.92]贪欢一刻偏教那女儿情长埋葬
[03:39.32]吞风吻雨葬落日未曾彷徨
[03:41.84]欺山赶海践雪径也未绝望
[03:44.38]拈花把酒偏折煞世人情狂
[03:47.04]凭这两眼与百臂或千手不能防
[03:49.99]天阔阔雪漫漫共谁同航
[03:52.20]这沙滚滚水皱皱笑着浪荡
[03:54.89]贪欢一刻偏教那女儿情长埋葬
[04:00.28]吞风吻雨葬落日未曾彷徨
[04:02.68]欺山赶海践雪径也未绝望
[04:05.25]拈花把酒偏折煞世人情狂
[04:07.90]凭这两眼与百臂或千手不能防
[04:10.85]天阔阔雪漫漫共谁同航
[04:13.08]这沙滚滚水皱皱笑着浪荡
[04:15.75]贪欢一刻偏教那女儿情长埋葬
[04:19.48]`;
/**
 * 解析歌词字符串
 * 得到一个歌词对象的数组
 * 每个歌词对象：
 * {time:开始时间, words: 歌词内容}
 */
function parseLrc() {
  var lines = lrc.split('\n');
  var result = []; // 歌词对象数组
  for (var i = 0; i < lines.length; i++) {
    var str = lines[i];
    var parts = str.split(']');
    var timeStr = parts[0].substring(1);
    var obj = {
      time: parseTime(timeStr),
      words: parts[1],
    };
    result.push(obj);
  }
  return result;
}

/**
 * 将一个时间字符串解析为数字（秒）
 * @param {String} timeStr 时间字符串
 * @returns
 */
function parseTime(timeStr) {
  var parts = timeStr.split(':');
  return +parts[0] * 60 + +parts[1];
}


var lrcData = parseLrc();

// 获取需要的 dom
var doms = {
  audio: document.querySelector('audio'),
  ul: document.querySelector('.container ul'),
  container: document.querySelector('.container'),
};

/**
 * 计算出，在当前播放器播放到第几秒的情况下
 * lrcData数组中，应该高亮显示的歌词下标
 * 如果没有任何一句歌词需要显示，则得到-1
 */
function findIndex() {
  // 播放器当前时间
  var curTime = doms.audio.currentTime;
  for (var i = 0; i < lrcData.length; i++) {
    if (curTime < lrcData[i].time) {
      return i - 1;
    }
  }
  // 找遍了都没找到（说明播放到最后一句）
  return lrcData.length - 1;
}

// 界面

/**
 * 创建歌词元素 li
 */
function createLrcElements() {
  var frag = document.createDocumentFragment(); // 文档片段
  for (var i = 0; i < lrcData.length; i++) {
    var li = document.createElement('li');
    li.textContent = lrcData[i].words;
    frag.appendChild(li); // 改动了 dom 树
  }
  doms.ul.appendChild(frag);
}

createLrcElements();

// 容器高度
var containerHeight = doms.container.clientHeight;
// 每个 li 的高度
var liHeight = doms.ul.children[0].clientHeight;
// 最大偏移量
var maxOffset = doms.ul.clientHeight - containerHeight;
/**
 * 设置 ul 元素的偏移量
 */
function setOffset() {
  var index = findIndex();
  var offset = liHeight * index + liHeight / 2 - containerHeight / 2;
  if (offset < 0) {
    offset = 0;
  }
  if (offset > maxOffset) {
    offset = maxOffset;
  }
  doms.ul.style.transform = `translateY(-${offset}px)`;
  // 去掉之前的 active 样式
  var li = doms.ul.querySelector('.active');
  if (li) {
    li.classList.remove('active');
  }

  li = doms.ul.children[index];
  if (li) {
    li.classList.add('active');
  }
}
// 时间变化
doms.audio.addEventListener('timeupdate', setOffset);


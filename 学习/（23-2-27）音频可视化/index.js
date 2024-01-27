const audioEle = document.querySelector('audio');
const cvs = document.querySelector('canvas');
const ctx = cvs.getContext('2d');

// 初始化canvas的尺寸
function initCvs(){
    cvs.width = window.innerWidth * devicePixelRatio;
    cvs.height =(window.innerHeight / 2) * devicePixelRatio;
}

initCvs();
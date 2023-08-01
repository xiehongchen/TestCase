async function async1() {
  console.log('async1 start');
  await async2();
  console.log('async1 end');
}
async function async2() {
  console.log('async2');
}
console.log('script start');
setTimeout(function () {
  console.log('setTimeout');
}, 0)
async1();
new Promise(function (resolve) {
  console.log('promise1');
  resolve();
  console.log('promise2')
}).then(function () {
  console.log('promise3');
});
console.log('script end');
// script start
// async1 start
// async2
// promise1
// promise2
// script end
// async1 end
// promise3
// setTimeout


async function async1() {
  console.log('1');
  await async2();
  console.log('2');
}
 
async function async2() {
  console.log('3');
}
 
console.log('4');
 
setTimeout(function() {
    console.log('5');
}, 0);  
 
async1();
 
new Promise(function(resolve) {
    console.log('6');
    resolve();
  }).then(function() {
    console.log('7');
});
 
console.log('8');
// 4
// 1
// 3
// 6
// 8
// 2
// 7
// 5
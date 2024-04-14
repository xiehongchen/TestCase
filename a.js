const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (line) => {
  const n = parseInt(line.trim());
  rl.once('line', (nums) => {
    const arr = nums.trim().split(" ").map(num => parseInt(num));
    const result = solution(arr);
    process.stdout.write(result);
  });
});

function solution(arr) {
  if (arr.length === 0 || arr.length === 1 || (arr.length === 2 && arr[0] !== arr[1])) {
    return "NO";
  }
  let min = arr[0];
  let sum = min;
  let temp = min;
  for (let i = 1; i < arr.length; i++) {
    sum += arr[i];
    min = Math.min(min, arr[i]);
    temp ^= arr[i];     console.log('sum',sum);
  console.log('min', min);
  console.log('temp', temp); 
  }

  if (temp !== 0) {
    return "NO";
  } else {
    return String(sum - min);
  }
}

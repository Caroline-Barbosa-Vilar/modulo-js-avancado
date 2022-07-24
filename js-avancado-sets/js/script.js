setTimeout(() => {
  alert('Console inside setTimeOut');
}, 2000);

console.log('Console after setTimeOut')

// 

setInterval(() => {
  console.log('run every 2 seconds')
}, 2000);

// 

let intervalId = setInterval(() => {
  alert('run every 2 seconds')
}, 2000);
console.log('run after setInterval')
console.log(intervalId);
clearInterval(intervalId);

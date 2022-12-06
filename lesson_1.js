const color = require('colors')

let [string1, string2] = process.argv.splice(2)
let arg1 = Number(string1);
let arg2 = Number(string2);
if (isNaN(arg1) || isNaN(arg2)) {
  console.log(`${color.red('Any parameter is not a number')}`);
  return;
}
const del = [2,3,5,7,11];
let counterLog = 0;
for(let i = arg1; i <= arg2; ++i) {
  let paramPrimeNumber = true
  del.forEach(del => {
    let number = i % del;
    let notDel = i - del;
    if (number === 0 && notDel !== 0) {
      paramPrimeNumber = false
    }
  })
  if (paramPrimeNumber) {
    ++counterLog;
    if (counterLog % 2 === 0) {
      console.log(`${color.yellow(i)}`);
    } else {
      if (counterLog % 3 === 0) {
        console.log(`${color.red(i)}`);
      } else {
        console.log(`${color.green(i)}`);
      }
    }
  }
}

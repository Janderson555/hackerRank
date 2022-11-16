function plusMinus(arr) {
  const arrLen = arr.length;

  let positiveNumbers = 0;
  let negativeNumbers = 0;
  arr.forEach((e) => {
    if(e < 0) {
      negativeNumbers += 1
    }
    if(e > 0) {
      positiveNumbers += 1
    }
  })
    
    console.log(+(positiveNumbers / arrLen).toFixed(6));
    console.log(+(negativeNumbers / arrLen).toFixed(6));
    console.log(+((arrLen- (positiveNumbers + negativeNumbers)) / arrLen).toFixed(6));
}
const arrNunbers = [-4, 3, -9, 0, 4, 1]

console.log(plusMinus(arrNunbers))
// 😎 check
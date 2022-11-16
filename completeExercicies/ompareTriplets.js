function compareTriplets(a, b) {
  let Alice = 0;
  let Bob = 0;
  a.forEach((e,i) => {
    if (e > b[i]) {
      Alice += 1
    }
    if (e < b[i]) {
      Bob += 1
    }
  });
  return [Alice, Bob]
};
const inputTestAline = [1, 2, 3]
const inputTestBob = [3, 2, 1]
console.log(compareTriplets(inputTestAline, inputTestBob))
// 😎 check

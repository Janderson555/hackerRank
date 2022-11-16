function aVeryBigSum(ar) {
  const result = ar.reduce((acc, e) => {
    return acc + e
  })
return result
}

const inputTestAline = [1, 2, 3]
console.log(aVeryBigSum(inputTestAline))
// 😎 check

const flattenDeep3 = (data) => data.toString().split(',').map(Number)
console.log(flattenDeep3([1, [2, [3, [4]], 5]]))



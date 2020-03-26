function flattenDeep4(arr, deepLength) {
    return arr.flat(deepLength)
}
console.log(flattenDeep4([1, [2, [3, [4]], 5]], 3));
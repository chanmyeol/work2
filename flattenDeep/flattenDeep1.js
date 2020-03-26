function flattenDeep(arr) {
    let deepArr = []
    arr.forEach(element => {
        if (Array.isArray(element)) {
            deepArr = deepArr.concat(flattenDeep(element))
        } else {
            deepArr.push(element)
        }
    });
    return deepArr
}
console.log(flattenDeep([1, [2, 3, [4, 5]]]))

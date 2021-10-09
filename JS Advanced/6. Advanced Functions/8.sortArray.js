function sortArr(arr, str) {
    return arr.sort((a, b) => {
        if (str == "asc") {
            return a - b;
        } else if (str == "desc") {
            return b - a
        }
    })
}
console.log(sortArr([14, 7, 17, 6, 8], 'asc'));
console.log(sortArr([14, 7, 17, 6, 8], 'desc'));

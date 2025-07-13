function nonDecreasingSubset(array) {
    let result = []
    let currentMax = array.shift();

    result.push(currentMax);

    for (let num of array) {
        if (num >= currentMax) {
            currentMax = num;
            result.push(num)
        }
    }
    console.log(result.join(" "));
}

nonDecreasingSubset([1, 3, 8, 4, 10, 12, 3, 2, 24]);
nonDecreasingSubset([1, 2, 3, 4]);
nonDecreasingSubset([20, 3, 2, 15, 6, 1]);
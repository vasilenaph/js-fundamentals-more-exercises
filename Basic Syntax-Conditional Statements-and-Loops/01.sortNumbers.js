function sortNumbers(number1, number2, number3) {
    let numbersArray = [number1, number2, number3];

    let sortedArr = numbersArray.sort((a, b) => (b - a));

    sortedArr.forEach(num => {
        console.log(num)
    });

}

sortNumbers(2, 1, 3);
console.log("-------");
sortNumbers(-2, 1, 3);
console.log("-------");
sortNumbers(0, 0, 2);
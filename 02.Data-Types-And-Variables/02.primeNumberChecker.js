function primeNumberChecker(number) {

    if (number < 2) {
        return false;
    }

    let divisible = Math.sqrt(number);

    for (let i = 2; i <= divisible; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(primeNumberChecker(7));
console.log(primeNumberChecker(8));
console.log(primeNumberChecker(81));
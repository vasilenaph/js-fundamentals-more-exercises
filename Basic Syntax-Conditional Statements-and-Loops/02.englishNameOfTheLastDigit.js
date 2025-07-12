function englishNameOfTheLastDigit(number) {
    let lastDigit = number % 10;

    let digitNames = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
    
    let name = digitNames[lastDigit];

    console.log(name)
}

englishNameOfTheLastDigit(512)
englishNameOfTheLastDigit(1)
englishNameOfTheLastDigit(43)
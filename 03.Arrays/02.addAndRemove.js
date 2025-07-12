function addAndRemove(array) {
    let newArr = [];
    let counter = 1;

    for (let i = 0; i < array.length; i++) {
        let command = array[i];

        if (command === "add") {
            let currentNum = counter;
            newArr.push(currentNum);
            counter++
        } else {
            newArr.pop();
            counter++
        }
    }
    console.log(newArr)
}

addAndRemove(['add', 'add', 'add', 'add']);
addAndRemove(['add', 'add', 'remove', 'add', 'add']);
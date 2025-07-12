function nextDay(year, month, day) {
    const currentDate = new Date(year, month - 1, day);
    currentDate.setDate(currentDate.getDate() + 1);

    const result = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}`;

    console.log(result);
}

nextDay(2016, 9, 30);
nextDay(2020, 3, 24);
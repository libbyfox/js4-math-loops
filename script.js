function generateRandomArray(length) {
    let randomNumbers = [];

    for (let i = 0; i < length; i++) {

        let randomNumber = Math.floor(Math.random() * 100) + 1;
        randomNumbers.push(randomNumber);

    }
         return randomNumbers;

}




console.log(generateRandomArray(5));

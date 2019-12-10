function checkIfIncrease(array, startingIndex) {
    if (startingIndex === array.length - 1) {
        return true;
    }

    if (array[startingIndex] <= array[startingIndex + 1]) {
        return checkIfIncrease(array, startingIndex + 1);
    }

    return false;
}

function numberToNumberArray(number) {
    return String(number).split('').map(x => Number(x));
}

function checkIfAdjacentMatch(array, startingIndex) {
    if (startingIndex === array.length - 1) {
        return false;
    }

    if (array[startingIndex] === array[startingIndex + 1]) {
        return true;
    }

    return checkIfAdjacentMatch(array, startingIndex + 1);
}

function validate(number) {
    if (typeof number !== 'number') {
        return false;
    }

    if (String(number).length !== 6) {
        return false;
    }

    if (number < 152085 || number > 670283) {
        return false;
    }

    if (!checkIfIncrease(numberToNumberArray(number), 0)) {
        return false;
    }

    if (checkIfAdjacentMatch(numberToNumberArray(number), 0)) {
        return true;
    }

    return false;
}

function fillRangeOfNumbers(start, end) {
    return Array((end - start) + 1).fill().map((x, i) => start + i);
}

function solveThePuzzle() {
    const range = fillRangeOfNumbers(152085, 670283);
    const validPasswords = range.filter(number => validate(number));
    return validPasswords.length;
}

console.log(solveThePuzzle());

module.exports = {
    checkIfAdjacentMatch,
    checkIfIncrease,
    numberToNumberArray,
    validate,
};

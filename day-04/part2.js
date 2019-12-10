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

function checkIfAdjacentMatch(array) {
    const { length } = array;
    const matches = {};

    for (let i = 0; i < length; i += 1) {
        if (array[i] === array[i + 1]) {
            if (matches[array[i]]) {
                matches[array[i]] = matches[array[i]].concat([i, i + 1]);
            } else {
                matches[array[i]] = [i, i + 1];
            }
        }
    }

    const { length: numberOfMatchesOf2 } = Object.keys(matches).filter(number => matches[number].length === 2);

    return numberOfMatchesOf2 > 0;
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

    if (!checkIfAdjacentMatch(numberToNumberArray(number), 0)) {
        return false;
    }

    return true;
}

function fillRangeOfNumbers(start, end) {
    return Array((end - start) + 1).fill().map((x, i) => start + i);
}

function solveThePuzzle() {
    const range = fillRangeOfNumbers(152085, 670283);
    const { length: numberOfValidPasswords } = range.filter(number => validate(number));
    return numberOfValidPasswords;
}

console.log(solveThePuzzle());

module.exports = {
    checkIfAdjacentMatch,
    checkIfIncrease,
    numberToNumberArray,
    validate,
};

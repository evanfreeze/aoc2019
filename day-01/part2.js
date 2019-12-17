/* eslint-disable no-use-before-define */
const pipeline = [divideBy3, roundDown, subtract2, createCheckValue()];

function callNextWithValue(val, fn) {
    return fn(val);
}

function calculateFuel(mass) {
    return pipeline.reduce(callNextWithValue, mass);
}

function divideBy3(x) {
    return x / 3;
}

function roundDown(x) {
    return Math.floor(x);
}

function subtract2(x) {
    return x - 2;
}

function createCheckValue() {
    let total = 0;

    const checkValue = (x) => {
        if (x > 0) {
            total += x;
            return calculateFuel(x);
        }
        const finished = total;
        total = 0;
        return finished;
    };

    return checkValue;
}

module.exports = {
    calculateFuel,
};

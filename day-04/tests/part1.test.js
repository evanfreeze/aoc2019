const { validate, numberToNumberArray, checkIfAdjacentMatch, checkIfIncrease } = require('../part1.js');

test('numberToNumberArray', () => {
    expect(numberToNumberArray(1234)).toEqual([1, 2, 3, 4]);
});

test('checkIfAdjacentMatch', () => {
    const input = numberToNumberArray(11234);
    expect(checkIfAdjacentMatch(input, 0)).toEqual(true);
});

test('checkIfIncrease', () => {
    const input = numberToNumberArray(12334);
    expect(checkIfIncrease(input, 0)).toEqual(true);
});

test('correctly sovles the puzzle', () => {
    expect(validate(111111)).toEqual(false);
    expect(validate(223450)).toEqual(false);
    expect(validate(123789)).toEqual(false);
    expect(validate(222222)).toEqual(true);
});

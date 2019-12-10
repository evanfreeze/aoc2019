const { validate, numberToNumberArray, checkIfAdjacentMatch, checkIfIncrease } = require('../part2.js');

test('numberToNumberArray', () => {
    expect(numberToNumberArray(1234)).toEqual([1, 2, 3, 4]);
});

test('checkIfAdjacentMatch but not 3 in a row', () => {
    const input1 = numberToNumberArray(112233);
    const input2 = numberToNumberArray(123444);
    const input3 = numberToNumberArray(111122);
    expect(checkIfAdjacentMatch(input1, 0)).toEqual(true);
    expect(checkIfAdjacentMatch(input2, 0)).toEqual(false);
    expect(checkIfAdjacentMatch(input3, 0)).toEqual(true);
});

test('checkIfIncrease', () => {
    const input = numberToNumberArray(12334);
    expect(checkIfIncrease(input, 0)).toEqual(true);
});

test('correctly sovles the puzzle', () => {
    expect(validate(111111)).toEqual(false);
    expect(validate(223450)).toEqual(false);
    expect(validate(123789)).toEqual(false);
    expect(validate(222445)).toEqual(true);
});

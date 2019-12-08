const { runProgram } = require('../part1');

const testCases = [
    {
        test: [1, 0, 0, 0, 99],
        expected: [2, 0, 0, 0, 99],
    },
    {
        test: [2, 3, 0, 3, 99],
        expected: [2, 3, 0, 6, 99],
    },
    {
        test: [2, 4, 4, 5, 99, 0],
        expected: [2, 4, 4, 5, 99, 9801],
    },
    {
        test: [1, 1, 1, 4, 99, 5, 6, 0, 99],
        expected: [30, 1, 1, 4, 2, 5, 6, 0, 99],
    },
];

test('returns the correct output', () => {
    for (let i = 0; i < testCases.length; i += 1) {
        const result = runProgram(0, testCases[i].test);
        expect(result).toEqual(testCases[i].expected);
    }
});

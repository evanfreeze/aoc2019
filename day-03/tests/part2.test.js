const {
    solveFinalPuzzle,
} = require('../part2');

test('final puzzle', () => {
    const testCases = [
        {
            wire1: ['R75', 'D30', 'R83', 'U83', 'L12', 'D49', 'R71', 'U7', 'L72'],
            wire2: ['U62', 'R66', 'U55', 'R34', 'D71', 'R55', 'D58', 'R83'],
        },
        {
            wire1: ['R98', 'U47', 'R26', 'D63', 'R33', 'U87', 'L62', 'D20', 'R33', 'U53', 'R51'],
            wire2: ['U98', 'R91', 'D20', 'R16', 'D67', 'R40', 'U7', 'R15', 'U6', 'R7'],
        },
    ];

    expect(solveFinalPuzzle(testCases[0].wire1, testCases[0].wire2)).toEqual(610);
    expect(solveFinalPuzzle(testCases[1].wire1, testCases[1].wire2)).toEqual(410);
});

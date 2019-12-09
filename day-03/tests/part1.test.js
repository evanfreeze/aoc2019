const {
    getManhattanDistance,
    parseDirectionSegment,
    updaters,
    drawLineToNextPoint,
    getPointsForWire,
    getIntersectionPoints,
    sortByClosestToOrigin,
    solveFinalPuzzle,
} = require('../part1');

test('manhattan distance', () => {
    expect(getManhattanDistance([0, 0], [2, 2])).toEqual(4);
    expect(getManhattanDistance([-2, -10], [24, 29])).toEqual(65);
});

test('direction parsing', () => {
    expect(parseDirectionSegment('R1009')).toEqual({
        updater: updaters.incX,
        distance: 1009,
    });
    expect(parseDirectionSegment('D57')).toEqual({
        updater: updaters.decY,
        distance: 57,
    });
});

test('next point ', () => {
    expect(drawLineToNextPoint([0, 0], 'U5')).toEqual([
        [0, 1],
        [0, 2],
        [0, 3],
        [0, 4],
        [0, 5],
    ]);

    expect(drawLineToNextPoint([23, 49], 'L3')).toEqual([
        [22, 49],
        [21, 49],
        [20, 49],
    ]);
});

test('points building', () => {
    const testwire = ['R1', 'U3'];
    expect(getPointsForWire(testwire)).toEqual([
        [0, 0],
        [1, 0],
        [1, 1],
        [1, 2],
        [1, 3],
    ]);
});

test('getting intersection points', () => {
    const testWire1 = ['R5', 'U5', 'L10', 'D10'];
    const testWire2 = ['L3', 'U20'];
    const expectedIntersection = [[-3, 5]];
    const result = getIntersectionPoints(testWire1, testWire2);
    expect(result).toEqual(expectedIntersection);
});

test('sort by closest to origin', () => {
    const testPoints = [[0, 1], [5, 10], [-1, -10]];
    const result = sortByClosestToOrigin(testPoints);
    expect(result).toEqual([
        {
            point: [0, 1],
            distance: 1,
        },
        {
            point: [-1, -10],
            distance: 11,
        },
        {
            point: [5, 10],
            distance: 15,
        },
    ]);
});

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

    expect(solveFinalPuzzle(testCases[0].wire1, testCases[0].wire2)).toEqual(159);
    expect(solveFinalPuzzle(testCases[1].wire1, testCases[1].wire2)).toEqual(135);
});

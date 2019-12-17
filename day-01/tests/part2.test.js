const { calculateFuel } = require('../part2.js');

test('calculates fuel correctly', () => {
    expect(calculateFuel(100756)).toEqual(50346);
    expect(calculateFuel(1969)).toEqual(966);
    expect(calculateFuel(14)).toEqual(2);
});

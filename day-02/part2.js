const { runProgram, input } = require('./part1');

const FINISHED_NUMBER = 19690720;

for (let noun = 0; noun < 100; noun += 1) {
    for (let verb = 0; verb < 100; verb += 1) {
        const newInput = [...input];
        newInput[1] = noun;
        newInput[2] = verb;
        const result = runProgram(0, newInput);
        if (result[0] === FINISHED_NUMBER) {
            console.log((100 * noun) + verb);
            return;
        }
    }
}

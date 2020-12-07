import Foundation

guard let rawInput = try? String(contentsOfFile: "./input.txt", encoding: .utf8) else {
	fatalError("Failed to load input file")
}

var input = rawInput
	.trimmingCharacters(in: .newlines)
	.components(separatedBy: ",")
	.map({ Int($0)! })
	
func runIntCodeProgram(with input: [Int]) -> [Int] {
    var memory = input
    var instructionPointer = 0
    var instruction = input[instructionPointer]
    
    while instruction != 99 {
        let param1 = memory[instructionPointer + 1]
        let param2 = memory[instructionPointer + 2]
        let store = memory[instructionPointer + 3]
        
        switch instruction {
        case 1:
            memory[store] = memory[param1] + memory[param2]
        case 2:
            memory[store] = memory[param1] * memory[param2]
        default:
            print("Encountered an unknown opcode: \(instruction)")
        }
        
        instructionPointer += 4
        instruction = memory[instructionPointer]
    }
    
    return memory
}

input[1] = 12
input[2] = 2

let finalResult = runIntCodeProgram(with: input)

print("PART 1: Position 0 after running program is \(finalResult[0])")

// PART 2

outer: for first in 0...99 {
    for second in 0...99 {
        var test = input
        test[1] = first
        test[2] = second
        
        let result = runIntCodeProgram(with: test)
        
        if result[0] == 19690720 {
            print("PART 2: \(100 * first + second)")
            break outer
        }
    }
}


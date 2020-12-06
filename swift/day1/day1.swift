import Foundation

guard let rawInput = try? String(contentsOfFile: "./input.txt", encoding: .utf8) else {
    fatalError("Failed to load input file")
}

let input = rawInput
    .trimmingCharacters(in: .newlines)
    .components(separatedBy: .newlines)
    .map({ Int($0)! })

// PART 1

func calculateFuel(mass: Int) -> Int {
    Int((Double(mass) / 3).rounded(.down) - 2)
}

let fuels = input.map({ calculateFuel(mass: $0) })
let result = fuels.reduce(0, +)

print("PART 1: Total fuel requirement is \(result)")

// PART 2

func calculateFuelWithFuel(mass: Int) -> Int {
    var currentMass = mass
    var fuel = 0
    
    while currentMass >= 0 {
        let currentFuel = Int((Double(currentMass) / 3).rounded(.down) - 2)
        if currentFuel > 0 {
            fuel += currentFuel
        }
        currentMass = currentFuel
    }
    
    return fuel
}

let fuelsP2 = input.map({ calculateFuelWithFuel(mass: $0) })
let resultP2 = fuelsP2.reduce(0, +)

print("PART 2: Total fuel requirement is \(resultP2)")

import Foundation

guard let rawInput = try? String(contentsOfFile: "./input.txt", encoding: .utf8) else {
    fatalError("Failed to load input file")
}

let input = rawInput
    .trimmingCharacters(in: .newlines)
    .components(separatedBy: .newlines)
    .map({ Int($0)! })

func calculateFuel(mass: Int) -> Int {
    Int((Double(mass) / 3).rounded(.down) - 2)
}

let fuels = input.map({ calculateFuel(mass: $0) })
let result = fuels.reduce(0, +)

print("PART 1: Total fuel requirement is \(result)")

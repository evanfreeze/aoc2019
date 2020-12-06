import Foundation

guard let rawInput = try? String(contentsOfFile: "./input.txt", encoding: .utf8) else {
    fatalError("Failed to load input file")
}

let input = rawInput
    .trimmingCharacters(in: .newlines)
    .components(separatedBy: .newlines)

func calculateFuel(mass: Int) -> Int {
    Int((Double(mass) / 3).rounded(.down) - 2)
}

let fuels = input.map({ calculateFuel($0) })
let result = input.reduce(fuels, +)

print("PART 1: Total fuel requirement is \(result)")

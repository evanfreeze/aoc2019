import Data.Sequence (update, fromList)
import Data.Foldable (toList)

input = [1,12,2,3,1,1,2,3,1,3,4,3,1,5,0,3,2,1,10,19,2,9,19,23,1,9,23,27,2,27,9,31,1,31,5,35,2,35,9,39,1,39,10,43,2,43,13,47,1,47,6,51,2,51,10,55,1,9,55,59,2,6,59,63,1,63,6,67,1,67,10,71,1,71,10,75,2,9,75,79,1,5,79,83,2,9,83,87,1,87,9,91,2,91,13,95,1,95,9,99,1,99,6,103,2,103,6,107,1,107,5,111,1,13,111,115,2,115,6,119,1,119,5,123,1,2,123,127,1,6,127,0,99,2,14,0,0]

test1 = [1,0,0,0,99] -- 2,0,0,0,99
test2 = [2,3,0,3,99] -- 2,3,0,6,99
test3 = [2,4,4,5,99,0] -- 2,4,4,5,99,9801
test4 = [1,1,1,4,99,5,6,0,99] -- 30,1,1,4,2,5,6,0,99

take4From start = take ((start + 4) - start) . drop start
updateListItem index newVal list = toList (update index newVal $ fromList list)
addProgram prog list = list!!(prog!!1) + list!!(prog!!2)
multProgram prog list = list!!(prog!!1) * list!!(prog!!2)

runProgram start sequence
    | opcode == 1 = runProgram nextStart (nextSeq addProgram)
    | opcode == 2 = runProgram nextStart (nextSeq multProgram)
    | opcode == 99 = newSeq
    where
        opcode = program!!0
        newSeq = [x | x <- sequence]
        program = take4From start newSeq
        nextStart = start + 4
        nextSeq op = updateListItem (program!!3) (op program newSeq) newSeq

result = runProgram 0 input

main = putStrLn $ "The answer is: " ++ show (result!!0)

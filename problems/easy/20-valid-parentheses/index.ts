
const bracketsMap = {
    ')': '(',
    ']': '[',
    '}': '{'
}

type ClosingBracket = keyof typeof bracketsMap

export function _isValid(s: string): boolean {


    let openBracketsStack = []

    for (let i = 0; i < s.length; i++) {
        const currentBracket = s[i]

        if (['(', '[', '{'].includes(currentBracket)) {
            openBracketsStack.push(currentBracket)
        } else if (openBracketsStack.pop() !== bracketsMap[currentBracket as ClosingBracket]) {
            return false
        }
    }
    return !openBracketsStack.length
};

export function isValid(s: string): boolean {
    let temp = [];

    for(let i = 0; i < s.length; i++) {
        const tempLength = temp.length
        const lastTempChar = temp[tempLength-1]
        const mappedOpeningChar = bracketsMap[s[i] as ClosingBracket]

        if (tempLength < 1) {
             // add to stack if nothing in
            temp.push(s[i])
        } else if (lastTempChar !== mappedOpeningChar)
        {
            // push to stack if top char in stack not closing current char
            temp.push(s[i])
        } else {
            // Here remove the top element in stack, this will be closing that element
            // i.e. we'll have e.g. '(' in stack and current value is ')' 
            temp.pop();
        } 
    }

    return !(temp.length > 0)
};

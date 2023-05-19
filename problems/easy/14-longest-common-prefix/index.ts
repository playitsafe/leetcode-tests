// My solution
export function longestCommonPrefix(strs: string[]): string {
    let commonPrefix = ''
    const firstStr = strs[0]

    for (let i = 0; i < firstStr.length; i++) {
        const letter = firstStr[i];

        const allMatchThisLetter = strs.every(str => str[i] === letter)
        if (allMatchThisLetter) {
            commonPrefix += letter
        } else {
            break
        }
    }


    return commonPrefix
};

// better
function longestCommonPrefix1(strs: string[]): string {
    let sorted = strs.sort((a,b) => a < b ? -1 : 1)

    let output = []
    let firstWord = sorted[0]
    let lastWord = sorted[sorted.length -1]
    for (var i = 0; i < firstWord.length; i++) {
        if (firstWord[i] === lastWord[i] ){
            output.push(firstWord[i])
        }else{       
            break
        }
   }

    return output.join("")
};
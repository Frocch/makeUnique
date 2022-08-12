// Write your solution below:

const makeUnique = word => {
    const arrWord = word.split("")
    for (let i = 0; i < arrWord.length; i++) {
        for (let x = i + 1; x < arrWord.length; x++) {
            if (arrWord[i] === arrWord[x]) {
                arrWord.splice(x, 1)
                x--
            }
        }
    }
    return arrWord.join("")
}

console.log(makeUnique('helloworld'))
console.log(makeUnique('iwanttoclimbamountain'))
console.log(makeUnique('aaaaaaaaaabbbbbbbbbbbbbbb'))
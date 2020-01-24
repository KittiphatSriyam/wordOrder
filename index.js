
function wordOrder(word) {
    let splitWord = word.split('')
    let l = ''
    let e = ''
    let v = ''
    for (let index in splitWord) {
        if (splitWord[index] == 'l' && l == '') {
            l = splitWord[index]
        }
        if (splitWord[index] == 'e' && e == '') {
            e = splitWord[index]
        }
        if (splitWord[index] == 'v' && v == '') {
            v = splitWord[index]
        }
    }
    return l + e + v + e + l
}

let word = wordOrder('level')
console.log('word->>', word);
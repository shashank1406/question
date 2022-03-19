


// progam to find two string is anagram or not each word 



function checkanagram(st1, st2) {
    let st1arr = st1.split('')
    console.log(st1arr)
    let result = false

    if(st1.length!=st2.length){
        return "two string is not anagram"
    }

    for (let i = 0; i < st2.length; i++) {
        console.log(st2[i])
        if (!st1arr.includes(st2[i])) {
            result = true
        }
    }
    if (result) {
        return "two string is not anagram"
    } else {
        return "two words are anagram"
    }
}

console.log(checkanagram("listen","silent"))
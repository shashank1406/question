// brute force approach to check the two string is anagram or not 


// progam to find two string is anagram or not each word 



function checkanagram(st1, st2) {
    let st1arr = st1.split('')
    console.log(st1arr)
    let result = false
    if (st1.length != st2.length) {
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

// console.log(checkanagram("listen","siltnt"))



function checkAnagram(str1, str2) {

    if (str1.length != str2.length) {
        return "two string is not anagram"
    }
    let one = str1.split('').sort().join('')

    let two = str2.split('').sort().join('')

    if (one === two) {
        return "two string anagram"
    }
    return "two string is not anagram"
}


console.log(checkAnagram("listen", "silent"))
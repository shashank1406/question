
let arr = [1, 2, 3, 3, 4, 5, 5]

function duplicateElementMethod1(arr) {
    let duplicateArray = []
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                if (duplicateArray.includes(arr[i])) {
                    break;
                } else {
                    duplicateArray.push(arr[i])
                }
            }
        }
    }

    if (duplicateArray.length == 0) {
        return "no duplicat element  found "
    } else {
        return duplicateArray
    }
}

// console.log(duplicateElementMethod1(arr))


function duplicateElementMethod2(arr) {

    let obj = {}
    for (let i = 0; i < arr.length; i++) {
        obj[arr[i]] = (obj[arr[i]] || 0) + 1
    }
    // console.log(obj)
    for (let key in obj) {
        if (obj[key] != 1) {
            console.log(key)
        }
    }
}
duplicateElementMethod2(arr)
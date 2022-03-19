//  bubbel sort
let arr = [3, 5, 2, 4, 1, 8, 6, 7]

function bubbelSort(arr) {
    for (let i = arr.length; i >= 0; i--) {
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }
    }
    return arr
}

// console.log(bubbelSort(arr))


function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let temp = arr[i]
        let j = i
        while (j >= 0 && arr[j - 1] > temp) {
            arr[j] = arr[j - 1]
            j--
        }
        arr[j] = temp
    }
    return arr
}
// console.log(insertionSort(arr))

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let min = i
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j
            }
        }
        [arr[min], arr[i]] = [arr[i], arr[min]]
    }
    return arr
}
// console.log(selectionSort(arr))


function quickSort(arr, start, end) {

    function pivot(arr, start, end) {
        let pivotElement = arr[start]
        let j = start + 1
        for (let i = start + 1; i <= end; i++) {
            if (arr[i] <= pivotElement) {
                [arr[i], arr[j]] = [arr[j], arr[i]]
                j += 1
            }
        }
        [arr[j - 1], arr[start]] = [arr[start], arr[j - 1]]
        return j - 1
    }

    if (start < end) {
        let p = pivot(arr, start, end)
        quickSort(arr, start, p - 1)
        quickSort(arr, p + 1, end)
    }
    return arr

}

// console.log(quickSort(arr,0,arr.length-1))



function mergeSort(arr) {
    function merge(arr1, arr2) {
        let i = 0
        let j = 0
        let res = []
        while (i < arr1.length && j < arr2.length) {
            if (arr1[i] < arr2[j]) {
                res.push(arr1[i])
                i++
            } else {
                res.push(arr2[j])
                j++
            }
        }
        while (i < arr1.length) {
            res.push(arr1[i])
            i++
        }
        while (j < arr2.length) {
            res.push(arr2[j])
            j++
        }
        return res
    }

    if (arr.length <= 1) {
        return arr
    }
    let mid = Math.floor(arr.length / 2)
    let lpart = mergeSort(arr.slice(0, mid))
    let rpart = mergeSort(arr.slice(mid))
    return merge(lpart, rpart)

}

// console.log(merge(arr))






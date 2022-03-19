//  in that file we write functions to find min and max element of an array 


let arr = [4, 7, 2, 6, 9, 3, 5, 77, 33, 11]

// function to find minimum element in ana array 

function findMinimun(arr) {
    let min = arr[0]
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i]
        }
    }
    return min
}

// console.log(findMinimun(arr))

// function to find the maximum element in an array 

const findMaximum = (arr) => {
    let maximum = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > maximum) {
            maximum = arr[i]
        }
    }
    return maximum
}

// console.log(findMaximum(arr))


//  function to find the minimum and maximum  element in ana array 

function findMinMax(arr){

    let max=(arr[0]>arr[1]?arr[0]:arr[1])
    let min=(arr[0]>arr[1]?arr[1]:arr[0])

    for(let i=2;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i]
        }
        if(arr[i]<min){
            min=arr[i]
        }
    }

console.log(min,max)

}

findMinMax(arr)
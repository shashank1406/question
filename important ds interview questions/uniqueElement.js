let arr = [1, 1, 2, 2, 3, 4, 5]


// thst is the first and short menthod to print the unique element in ana array using java script inbuilt method 
function findUnique1(arr) {

 let result = new Set(arr)
 let finalResult = [...result]
 return finalResult 

}

console.log(findUnique1(arr))


//  the second method to find the unique element in ana array using object

function uniqueMethod2(arr) {

    let obj = {}
    for (let i = 0; i < arr.length; i++) {
        obj[arr[i]] = (obj[arr[i]] || 0) + 1
        // console.log(obj)
    }
    // console.log(obj)

    for (const property in obj) {
        if(obj[property]!=1){
            console.log(property)
        }
    }


}


// uniqueMethod2(arr)
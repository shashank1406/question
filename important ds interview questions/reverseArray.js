//  in that file we are appliying reverse array problems with inbuilt or without inbuilt method 

let arr=[1,2,3,4,5,6,7]

//  first method to reverse a array

const reverse1=(arr)=>{

let rev = arr.reverse()
return rev

}
// console.log(reverse1(arr))


//  second method to reverse a  array

function reverse2(arr){
    let rev =[]
    for(let i=arr.length-1;i>=0;i++){
        rev.push(arr[i])
    }
    return rev
}

// console.log(reverse2(arr))

// third method to reverse a array without auxileary spaece 

const reverse3=(arr)=>{
    for(let i=0;i<arr.length/2;i++){
       [arr[i],arr[arr.length-1-i]]=[arr[arr.length-1-i],arr[i]]
    console.log(arr[i])
    }
    return arr
}

console.log(reverse3(arr))
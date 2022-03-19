

let arr = [1,2,4,5]


function findMissingNumberMethod1(arr){

let  sum = (arr.length+1)*(arr.length+2)/2

for(let i=0;i<arr.length;i++){
    sum-=arr[i]
}

return sum 

}

// console.log(findMissingNumberMethod1(arr))


function findMissingNumberMthod2(arr){

let total=((arr[0]+arr[arr.length-1])/2)*(arr.length+1)

for(let i=0;i<arr.length;i++){

    total-=arr[i]
}
return total
}

console.log(findMissingNumberMthod2(arr))
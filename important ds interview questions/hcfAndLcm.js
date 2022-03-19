
//  in that file we are find hcf with function 


function highestCommonFector(num1,num2){
let arr=[]
    let min=(num1>num2?num2:num1)
    for(let i=1;i<=min;i++){
        if(num1%i==0 && num2%i==0){
            arr.push(i)
        }
    }
return arr[arr.length-1]
}
// console.log(highestCommonFector(21,35))

function recursionHcf(a,b){
    if(a%b==0){
        return b
    }
    return recursionHcf(b%a,a)
}

console.log(recursionHcf(21,35))

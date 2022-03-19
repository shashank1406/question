
//  programm to find the given number is prime not or find prime number between 1 to 1000


function isPrime(number){
if(number<=1){
    return false
}
if(number ==2){
    return true
}

for(let i=2;i<number-1;i++){
if(number%i==0){
    return false
}

}
return true
}

// console.log(isPrime(14))



function primeSeries(){

let arr=[]
    for(let i=0;i<=100;i++){
        if(isPrime(i)){
            arr.push(i)
        }
    }
    return arr
}

console.log(primeSeries())
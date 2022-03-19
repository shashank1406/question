//  find a missing interger in an array 

let arr = [1, 2, 3, 4,5,6,7,8,9]

function missing(arr) {

    let sum = ((arr[0] + arr[arr.length - 1]) / 2) * (arr.length + 1)

    for (let i = 0; i < arr.length; i++) {
        sum -= arr[i]
    }
    return sum
}

// console.log(missing(arr))


function cyclicallyRotate(arr) {
    let last = arr[arr.length - 1]
    for (let i = arr.length - 1; i > 0; i--) {
        arr[i] = arr[i - 1]
    }
    arr[0] = last
    return arr
}


function crkt(arr,k){

for(let i=1;i<=k;i++){

    cyclicallyRotate(arr)

}

return arr
}

console.log(crkt(arr,5))

// console.log(cyclicallyRotate(arr))


//  find duplicates  in an array 

function duplicate(arr) {
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

// console.log(duplicate(arr))


//  find common element in three sorted array 

function findCommon(ar1, ar2, ar3) {
let result =[]
    var i = 0,
        j = 0,
        k = 0;

    while (i < ar1.length && j < ar2.length && k < ar3.length) {
        if (ar1[i] == ar2[j] && ar2[j] == ar3[k]) {
            result.push(ar1[i])
            i++;
            j++;
            k++;
        }
        else if (ar1[i] < ar2[j]) {
            i++;
        }
        else if (ar2[j] < ar3[k]) {
            j++;
        } else {
            k++;
        }
    }

    if(result.length==0){
        return "no common element presant"
    }else{
        return result 
    }
}

// console.log(findCommon([3,7],[3,2],[3,2]))


//  rearrange the array 

function rearrange(arr,n)
    {
        let i = -1, temp = 0;
        for (let j = 0; j < n; j++)
        {
            if (arr[j] < 0)
            {
                i++;
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
        let pos = i+1, neg = 0
        while (pos < n && neg < pos && arr[neg] < 0)
        {
            temp = arr[neg];
            arr[neg] = arr[pos];
            arr[pos] = temp;
            pos++;
            neg += 2;
        }

        return arr
    }






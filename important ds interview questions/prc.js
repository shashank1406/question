
function gcd(a, b) {
  if (b == 0) {
    return a;
  }
  return gcd(b, a % b);
}


// console.log(gcd(0,0))


function solution(a) {
  let result = 0
  if (a.length <= 1) {
    return 1
  }
  let b = a.slice(1, a.length - 1)
  if (a[0] === a[a.length - 1]) {
    return solution(b)
  }
  return result
}

//  function to find the first acccurence  of terget in arr ay usimg binary search

function firstAuc(arr,target) {
  let first = 0
  let last = arr.length - 1
  let mid = 0
  // let firstAucrence=0
  while (first <= last) {
   mid =Math.floor((first+last)/2)
   if(arr[mid]===target ){
      first= mid-1
      firstAucrence=mid
   }else{
      last=mid+1
   }
  }
  return mid
}
console.log(firstAuc([1,2,3,4,5],2))





// function BinarySearchLastOccurence(num, val) {
//   if (num.length < 1) {
//       console.log("The array is empty");
//       return;
//   }
//   let start = 0;
//   let end = num.length - 1;
//   while (start <= end) {
//       let mid = Math.floor((start + end) / 2)
//       if (num[mid] > val) {
//           end = mid - 1;
//       }
//       else if (num[mid] < val) {
//           start = mid + 1
//       }
//       else {
//           ans = mid
//           start = mid + 1;
//       }
//   }
//   return ans;
// }
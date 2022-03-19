

// content for study for clear trip job intervies pprepration 


// •	https://www.glassdoor.co.in/Interview/Cleartrip-Interview-Questions-E307225.htm 
// •	https://www.youtube.com/watch?v=9h-x29SVa6k 
// •	https://www.w3schools.com/jsref/jsref_match.asp 
// •	https://www.w3schools.com/jsref/jsref_obj_regexp.asp 
// •	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions




// function isMatch(String text, String pattern) {
//     if (pattern is empty) return true if text is empty as well or false;

//     boolean first_match = (pattern[0] == text[0] or pattern[0] == '.'));

//     if (pattern.size () >= 2 and pattern[1] == '*'){
//         return (isMatch(text, pattern[2, ..]) ||
//                     (first_match and isMatch(text[1,..], pattern)));
//     } else {
//         return first_match and isMatch(text[1,..], pattern[1,..]);
//     }
// }



// let array=[[[{"a":"apple","b":"boll"}]]]

// for(let  i=0;i<array.length;i++){

//  let gn=array[i]

// let hn=gn[i]

// console.log(hn[i])


// }




function findPair(arr,number){
let result =""
for(let i=0;i<arr.length;i++){
     for(let j=0;j<arr.length;j++){
      if(arr[i]+arr[j]==number){
        result=`${arr[i]} ${arr[j]}`
     }
     }
}
return result 
}

console.log(findPair([1,5,3,6],8))
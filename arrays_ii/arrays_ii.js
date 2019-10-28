// // Array: Average (Warmup)

// // (Warm-up) Always run through some quick algorithm problems before any coding interview, to get yourself warmed up. How about this one: return the average value of an array of unsorted numbers . 

// function FindAverage(arr){
//     var sum=0;
//     for(var i=0; i<arr.length; i++){
//         sum+= arr[i];
//     }
//     console.log(sum / arr.length)
//     return sum
// }

// // Balance Point

// // Write a function that returns whether the given array has a balance point between indices, where one side’s sum is equal to the other’s. Example: [1,2,3,4,10] → true ( between indices 3&4 ), but [1,2,4,2,1] → false . 

// function BalancePoint(arr){
//     var sum1=arr[0];
//     var sum2=arr[0];
//     var decsum=arr[0]
//     for(var i=1; i<arr.length; i++){
//         sum1+=arr[i];
//         // console.log (sum1)
//     }
//     for(var i=1; i<arr.length; i++){
//         sum2+=arr[i];
//         decsum=sum1-sum2
        
//         if(decsum == sum2){
//             console.log(decsum)
//             return true;
//         }
//     }
//         console.log(decsum)
//         return false;
// }

      

// // Balance Index

// // Here, a balance point is on an index, not between indices. Return the balance index where sums are equal on either side (exclude its own value). Return -1 if none exist. Ex.: [-2,5,7,0,3] → 2 , but [9,9] → -1 . 
    

        
// // Given a sorted array and a value, return whether the array contains that value. Do not sequentially iterate the array. Instead, ‘divide and conquer’, taking advantage of the fact that the array is sorted . As always, only use built-in functions that you are prepared to recreate (write yourself) on demand! 

// function DivideConquer(arr, val){
//     if (val> arr[arr.length/2]){
//         for(var i=arr[arr.length/2]; i<arr.length; i++){
//             if(val == arr[i]){
//                 console.log("This was on the back half.")
//                 return true;
//             }
//         }
//     }else{
//         for (var i = 0; i<arr.length/2; i++){
//             if (val == arr[i]){
//                 return true;
//             }
//         }
//     }
//     return false;
// }

// DivideConquer([1,2,3,4,5,6,7,8,9,10], 8)


// /////////////////////////

function DivideConquer(arr, val){
    var front =0;
    var back = arr.length-1;
    var count =0;
    while(front<back){
        var mid = Math.floor((back+front)/2);
        if(val == mid){
            return true;
        }
        if ( val < arr[mid]){
            back = mid;
        }else{
            front=mid+1;
        }
    }
    return false;
}
// DivideConquer([1,2,3,4,5,6,7,8,9,10], -1)


// // You will be given a numerical array that has first been sorted, then rotated
// // by an unknown amount. Find and return the minimum value in that array. Don’t
// // use built-in functions (surprise!). Given the input array ["Gigli","Jay is
// // cool","Mavis","Phoebe","Thurber","Anna","Celeste","Elon"] , you should return
// // "Anna" . Remember, do not linearly iterate the array!


// // function minOfSortedRotation(arr) {
//     //     var min = arr[0];
//     //     for(var i = 0; i < arr.length; i++) {
//         //         if(arr[i] < min) {
//             //             min = arr[i];
//             //         }
//             //     }
//             //     return min;
//             // }
            
//             // console.log(minOfSortedRotation(arr));
            

// arr = ["Gigli","Jay is cool","Mavis","Phoebe","Thurber","Anna","Celeste","Elon"];
// //arr = ["Celeste","Elon","Gigli","Jay is cool","Mavis","Phoebe","Thurber", "Anna"];
// function minOfSortedRotation2(arr) {
//     var front = 0;
//     var back = arr.length - 1;
//     while(back - front > 1){
//         var mid = Math.floor((back+front)/2);
//         if(arr[mid] > arr[front]) {
//             front = mid;
//         } else {
//             back = mid;
//         }
//     }
//     console.log(front);
//     console.log(back);
//     return arr[back];
// }

// // console.log(arr[3] > arr[5]);

// console.log(minOfSortedRotation2(arr));

        

// //Flatten a given array, eliminating nested & empty arrays. 
// //Do not alter it; return a new one retaining order. 
// //For [1,[2,3],4,[]] return [1,2,3,4] . 
// //Second: work ‘in-place’ in the given array (do not create another). Alter order if needed. Ex.: [1,[2,3],4,[]] could become [1,3,4,2] . 
// //Third: make your algorithm both in-place and stable . Do you need a return value? 

// function flatten(arr) {
//     var result = [];
//     for(var i=0; i< arr.length; i++) {
//         var currentValue= arr[i]; //result = result.concat(flatten(arr[i]));
//         if(Array.isArray(currentValue)) {
//            console.log(currentValue);
//            for(var j=0; j<currentValue.length; j++) {
//                 result.push(currentValue[j]);
//            }
//         } else {
//             result.push(currentValue);
//         }              
//     }
//     return result;
// }

// console.log(flatten([1,[2,3],4,[]]));

        
var testArr = [1,2,3,4,5,6,7,8,9,10];

function printArray(arr, index){
    if(index == undefined){
        index=0;
    }
    if(index<= arr.length-1){
        console.log(arr[index])
        index ++;
        printArray(arr, index);
    }
}

// printArray(testArr);

// Write a recursive function that given a number returns sum of integers from 1 to that number. Example: rSigma(5) = 15 (1+2+3+4+5); rSigma(2.5) = 3 (1+2); rSigma(-1) = 0. 

function rSigma(val, index, sum){
    if(index==undefined){
        index=0;
        sum=0;
        if(index<=val){
            sum+=index;
            index += 1;
        }
        return rSigma(val, index)
    }
    console.log(sum);
    
    
}
// rSigma(10);

function sumTo(val) {
    if (val == 1) return 1;
    return val + sumTo(val - 1);
  }
  
  console.log( sumTo(10) );
  
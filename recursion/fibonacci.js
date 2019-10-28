function recursiveNacci(num){
    count++;
    if(num <= 0){
        return 0;
    }
    if(num == 1){
        return num;
    }
    
    return recursiveNacci(num - 2) + recursiveNacci(num - 1);

}
var count = 0;
console.log(recursiveNacci(35));
console.log(count);
//Recursive Fibonacci

// Write rFib(num) . Recursively compute and return num th Fibonacci value. As 
// earlier, treat first two (num = 0, num = 1) Fibonacci vals as 0 and 1. Examples: rFib(2) = 1 (0+1); rFib(3) = 2 (1+1); rFib(4) = 3 (1+2); rFib(5) = 5 (2+3). rFib(3.65) = rFib(3) = 2 , rFib(-2) = rFib(0) =
// 0 .

function recursiveNacciTwo(num, cache = {}){
    count2++;
    if(num <= 0){
        return 0;
    }
    if(num == 1){
        return num;
    }
    if(!(num in cache)){
        cache[num] = recursiveNacciTwo(num-2, cache) + recursiveNacciTwo(num-1, cache);
    }
    return cache[num];
}
var count2 = 0;
console.log(recursiveNacciTwo(35));
console.log(count2);

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



function recursiveBinarySearch(arr, val, front = 0, back = arr.length){
    var midpoint = Math.floor((back+front)/2);
    if(front >= back){
        return false;
    }
    if(arr[midpoint] == val){
        return true;
    }
    if(val > arr[midpoint]){
        front = midpoint+1;

    }
    else{
        back = midpoint;
    }
    return recursiveBinarySearch(arr, val, front, back);
}
console.log(recursiveBinarySearch([1, 2, 3, 4, 5, 6], -10));
// Recursive Binary Search

// Given a sorted array and a value, recursively determine whether value is found within array.
//  rBinarySearch([1,3,5,6],4) = false ; rBinarySearch([4,5,6,8,12],5) = true .


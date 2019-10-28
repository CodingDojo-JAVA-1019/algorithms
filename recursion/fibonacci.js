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

// Given a sorted array and a value, recursively determine whether value is found within array. rBinarySearch([1,3,5,6],4) = false ; rBinarySearch([4,5,6,8,12],5) = true . 


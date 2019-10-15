// function printArray(arr, counter){  
//     if(counter == undefined){
//         counter = 0;
//     }
//     for(var i = 0; i<arr.length; i++){
//         console.log(arr[i]);
//     }
//     //printArray()
//     console.log(counter);
//     //if( == 4)

// }
// printArray([1, 2, 3, 4])

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

printArray(testArr);


//Recursive Sigma
//Write a recursive function that given a number returns sum of integers from 1 to that number. 
//Example: rSigma(5) = 15 (1+2+3+4+5); rSigma(2.5) = 3 (1+2); rSigma(-1) = 0.


function rSigma(value){
    console.log(value);
    value--;
    if(value <= 0){
        value--;
    }
    return rSigma(value);

}
//console.log(rSigma(5));


function sumTo(n) {
    if (n == 1) return 1;
    return n + sumTo(n - 1);
}

console.log( sumTo(10) );
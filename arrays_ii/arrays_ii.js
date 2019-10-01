// Array: Average (Warmup)

// (Warm-up) Always run through some quick algorithm problems before any coding interview, to get yourself warmed up. How about this one: return the average value of an array of unsorted numbers . 

function FindAverage(arr){
    var sum=0;
    for(var i=0; i<arr.length; i++){
        sum+= arr[i];
    }
    console.log(sum / arr.length)
    return sum
}

// Balance Point

// Write a function that returns whether the given array has a balance point between indices, where one side’s sum is equal to the other’s. Example: [1,2,3,4,10] → true ( between indices 3&4 ), but [1,2,4,2,1] → false . 

function BalancePoint(arr){
    var sum1=arr[0];
    var sum2=arr[0];
    var decsum=arr[0]
    for(var i=1; i<arr.length; i++){
        sum1+=arr[i];
        // console.log (sum1)
    }
    for(var i=1; i<arr.length; i++){
        sum2+=arr[i];
        decsum=sum1-sum2
        
        if(decsum == sum2){
            console.log(decsum)
            return true;
        }
    }
        console.log(decsum)
        return false;
}
        
        
// Balance Index

// Here, a balance point is on an index, not between indices. Return the balance index where sums are equal on either side (exclude its own value). Return -1 if none exist. Ex.: [-2,5,7,0,3] → 2 , but [9,9] → -1 . 
    
function BalanceIndex(arr){
    var sum1=arr[0];
    var sum2=arr[0];
    for(var i=1; i<arr.length; i++){
        sum1+=arr[i];
    }
    for(var i=1; i<arr.length; i++){
        if( sum2 == (sum1 - arr[i])/2){
            console.log(i)
            return i
        }
        sum2+=arr[i];
    }
    return -1
}
        
// Given a sorted array and a value, return whether the array contains that value. Do not sequentially iterate the array. Instead, ‘divide and conquer’, taking advantage of the fact that the array is sorted . As always, only use built-in functions that you are prepared to recreate (write yourself) on demand! 

function DivideConquer(arr, val){
    if (val> arr[arr.length/2]){
        for(var i=arr[arr.length/2]; i<arr.length; i++){
            if(val == arr[i]){
                console.log("This was on the back half.")
                return true;
            }
        }
    }else{
        for (var i = 0; i<arr.length/2; i++){
            if (val == arr[i]){
                return true;
            }
        }
    }
    return false;
}

DivideConquer([1,2,3,4,5,6,7,8,9,10], 8)


/////////////////////////

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
DivideConquer([1,2,3,4,5,6,7,8,9,10], -1)
        

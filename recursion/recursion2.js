// Given num , return the product of ints from 1 up to num . If less than zero, treat as zero. If not integer, truncate. Experts tell us 0! is 1 . rFact(3) = 6 (1*2*3). Also, rFact(6.5) = 720 (1*2*3*4*5*6).

function recFactorial(num){
    var realNum=Math.floor(num);
    if(realNum<=0){
        return 1;
    }else{
        return realNum * recFactorial(realNum -1);
    }

}
// console.log(recFactorial(-6.5))


//FLOODFILL
//  Replace a pixel’s color value only if it is the same color as the origin coordinate and is directly adjacent via X or Y to another pixel you will change. Note: diagonally related pixels are not considered adjacent . Given canvas2D of [[3,2,3,4,3],
// [2,3,3,4,0] , [7,3, 3 ,5,3] , [6,5,3,4,1] , [1,2,3,3,3] ]
// Our canvas2D becomes: [[3,2, 1 ,4,3], [2, 1 , 1 ,4,0], [7, 1 , 1 ,5,3], [6,5, 1 ,4,1], [1,2, 1 , 1 , 1 ] ]

function floodFill(canvasArr, startYX, newColor, oldColor){
    
    var x = startYX[1];
    var y = startYX[0];
    var currentColor = canvasArr[y][x];
    if(oldColor == undefined){
        oldColor = currentColor;
    }
    if( oldColor != currentColor){
        return 
    }
    canvasArr[y][x] = newColor;
    if(y+1 < canvasArr.length){
        floodFill(canvasArr, [y+1,x], newColor, oldColor);
    }
    if(x+1 < canvasArr[y].length){
        floodFill(canvasArr, [y,x+1], newColor, oldColor);
    }
    if(y-1 >= 0){
        floodFill(canvasArr, [y-1,x], newColor, oldColor);
    }
    if(x-1 >= 0){
        floodFill(canvasArr, [y,x-1], newColor, oldColor);
    }
    return canvasArr;
}

var canvas = [
    [3,2,3,4,3],
    [2,3,3,4,0], 
    [7,3,3,5,3], 
    [6,5,3,4,1], 
    [1,2,3,3,3],
    ];
console.log(floodFill(canvas, [2,2], 9))
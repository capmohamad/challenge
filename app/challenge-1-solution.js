'use strict';
Array.prototype.square = function () {
    let arr1 = [];
    this.map(function (obj){
        arr1.push (obj * obj);
    });
    return arr1;
}
arr = [1 , 6 , 7 ,9];
console.log(arr.square());

arr1 =[4 , 6 ,3 , 2];
console.log(arr1,squre());

// let Array = [ 1,2,3,4,5,];
// function square(a){
//     return a*a
// }
// arrSquare = array.map(square); 
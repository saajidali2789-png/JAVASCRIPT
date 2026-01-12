let marks = [96,34,56,78,12];
console.log(typeof marks);

//numbers and strings sath me bhi daal skte hai isme ab



let t1 = [1,2,3];
let t2 = [2,3,4];
let milkr = t1.concat(t2);
console.log(milkr);

//unshift method is like a push method but it add a elemetns at the beginning

t1.unshift(2);
console.log(t1);

t1.shift();
console.log(t1);

//slice method //like a substr
//it returns the piece of the array

//splice() method 
//change the original array(add,remove,replace)
//splice(startIdx,delCount,newEl1);

let arr = [1,2,3,4,5,6,7];
//arr.splice(2,2,101,102);
//2nd index par//2 del karenge//101 and 102 add karenge

//Add Element
arr.splice(2,0,101);
//2nd index par //0 element delete krenge and 101 add krenge at index 2

//and agar arr.splice(4);
//aise karoge toh   slice ki trh hi behave karega..


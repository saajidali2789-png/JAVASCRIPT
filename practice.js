// let input = prompt("Enter a number");
// console.log(input);

// if(input % 5  == 0){
//     console.log("It is a multiple of 5");
// }
// else {
//     console.log("It is not a multiple pf 5");
// }

//print all even numbers from 0 to 100
// let n1 = 100;
// for(let i = 1; i <= n1;i++){
//     if(i % 2 == 0){
//         console.log(i);
//     }
// }

//practice q game number
// let gameNum = 25;

// let guess = prompt("guess a number");

// while(gameNum != guess){
//     guess = prompt("Enter a Number");
// }

// console.log("You guess the right");

//another question of the strings part

// let FullName = prompt("Enter Full Name");

// let s1 = "@";

// let s2 = FullName;

// let s3 = FullName.length;

// let result = s1 + s2 + s3;
// console.log("Result string is:"+result);

//practice question of the array topic...

// let items = [250,645,300,900,50];

// let i = 0;

// for(let val of items){
//     let offer = val / 10;
//     items[i] = items[i] - offer;
//     console.log(items[i]);
//     i++;
// }

//practice question

// let array = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];


// array.splice(2,1,"Ola");
// array.shift();
// array.push("Amazon");

// console.log(array);




// //practice question of foreach loop using arrow fucntion
// let nums = [67,52,39];

// let calcSquare = (num) => {
//     console.log(num * num);
// };

// nums.forEach(calcSquare);

//practice qustion

let qustion  = prompt("Enter a Number :");

let arr5 = [];
for(let p = 1 ; p <= qustion ; p++){
    arr5[p-1] = p;
}

const sum = arr5.reduce((res,curr) => {
    return res + curr;
});

console.log(sum);

const mul = arr5.reduce((res,curr) => {
    return res * curr;
});

console.log(mul);




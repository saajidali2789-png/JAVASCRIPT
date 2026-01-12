let str = "ApnaCollege";
console.log(str[8]);

//template literals
let sentence = `This is a template literal`;
console.log(sentence);

//why we used the template literals
let obj = {
    item : "pen",
    price : 10
};

let output = `The cost of ${obj.item} is ${obj.price} rupees`;
console.log(output);
//strings are immutable
console.log("the cose of", obj.item , "is" , obj.price,"rupees");

let str1 = "Apna";
let str2 = "College";

console.log(str1+str2);

let str3 = "hellololo";

console.log(str3.replace("lo","p"));//output :-helplolo 
console.log(str3.replaceAll("lo","p"));//output :-helppp;
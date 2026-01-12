// alert("This is the method");

// //and html ka code humne jo likh rkha hai ushe kaise dhekheneg using the js
// console.log(window.document);
// //for properties
// console.dir(window.document);
//console.dir jo hai documents obj ke liye hota hai
//console.log obj ko elements ke form me print karwadeta hai
//id unique rehti hai

// console.dir(document.getElementById("heading"));

//agar humne koi class likhi aur woh exist nhi krti hai to output:-HTMLcollection[0]

//agar humne id koi likhi h and bo khaali hai null

//query Selector is best for accessing elements

// let firstEl = document.querySelector("#myId");
// console.dir(firstEl);

// let allEl = document.querySelectorAll(".myClass");
//all elements 
//console.dir(allEl);

//DOM tree 
//> text nodes
//> comment
//> elements

//div.innerText -> saara text andar tk ke elements ka text likhdega and ye hidden text nahi dikhata hai
//div.innerHTML -> saara text with html elements
//div.textContent -> ye humhe hidden text ko bhi dikha deta hai

// let h2 = document.querySelector("h2");
// console.dir(h2.innerText );
// h2.innerText = h2.innerText + " from Apna College Students";
// console.dir(h2.innertext);

//how to access the value of the attributes
// let div  = document.querySelector("div");
// console.log(div);

// // let id = div.getAttribute("id");
// // console.log(id);

// let set = div.setAttribute("id","myid");
// console.log(div.setAttribute("id","myid"));

//using the style keyword in js 
// let div = document.querySelector("div");
// div.style.backgroundColor = "green";
// div.style.backgroundColor = "purple";
// div.style.fontSize = "26px";

//how we create a tag and show on the web page
// let btn = document.createElement("button");
// btn.innerText = "Click Me!";
// console.log(btn);
// //let the node be a div
// let div = document.querySelector("div");
// div.append(btn);
//its add the button at the end of the div...
//more methods are there

//prac

// let newBtn = document.createElement("button");
// newBtn.innerText = "Click Me!";
// newBtn.style.backgroundColor = "red";
// newBtn.style.color = "white";

// let body = document.querySelector("body");
// body.prepend(newBtn);

//If we have to add the class inside another class it overwrites bcz of the setAttribute
//but we have the soln of the this using the classList
//like the div.classList.add("anotherclass");



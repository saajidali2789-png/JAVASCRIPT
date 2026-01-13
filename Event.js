//this step is mandatory...
//"      '                   '                  "
//single qoute is inside the double quote

// let btn1 = document.querySelector("#btn1");


// btn1.onclick = () => {
//     console.log("btn1 was clicked");
// }

// let box = document.querySelectorAll("div");

// box.onmouseover = () => {
//     console.log("you are mouseover on div");
// }

// //event object

// btn1.onclick = (evt) => {
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
// };

// //event listeners

// btn1.addEventListener("click",(evt) => {
//     console.log("button1 was clicked - handler1");
// });

// btn1.addEventListener("click",(evt) => {
//     console.log("button1 was clicked - handler2");
// });
// const handler3 = () => {
//     console.log("button1 was clicked - handler3");
// };
// btn1.addEventListener("click",handler3);

// btn1.addEventListener("click",(evt) => {
//     console.log("button1 was clicked - handler4");
// });
// btn1.removeEventListener("click", handler3);

//dark light game
let modeBtn = document.querySelector("#mode");
let currMode = "light";

modeBtn.addEventListener("click", () => {
    if(currMode === "light"){
        currMode = "dark";
        document.querySelector("body").style.backgroundColor = "black";
    }
    else {
        currMode = "light";
        document.querySelector("body").style.backgroundColor = "white";
    }

    console.log(currMode);
});
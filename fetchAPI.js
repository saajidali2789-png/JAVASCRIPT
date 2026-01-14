//how to receive the dataa from the APIS

const URL = "https://cat-fact.herokuapp.com/facts";

const getFacts = async () => {
    console.log("getting data...");
    let response = await fetch(URL);
    console.log(response);//isse jo data milega humhe bo alag format me hai 
    //isko aage padho aur smjho..
    //ye JSON format me hai
    //means Javascript object ke form me//AJAJ full form :- Asynchronous javascript and jason
    //console.log(200);
    //to isme phle hum kisi api ko req bhejte hai
    //and uski req jo hai json format me aati hai
    //us json format ko hum javascript object ke form me change krte hai
    //using the json method
};

const URL1 = "https://cat-fact.herokuapp.com/facts";
const factPara = document.querySelector("#fact");//this is the id ihe paragrpah of the html
const btn = document.querySelector("button");

const getFacts1 = async () => {
    console.log("getting data...");
    let response1 = await fetch(URL1);
    console.log(response1);
    let data = await response1.json();//json method
    console.log(data);
    factPara.innerText = data[0].text;
};// we can do this same work using promise chaining

function getFacts3(){
    fetch(URL1)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
        factPara.innerText = data[2].text;
    });
}

btn.addEventListener("click",getFacts3);

//HTTP :- HyperText Transfer Protocol


//we can also generate the text here make it into the html

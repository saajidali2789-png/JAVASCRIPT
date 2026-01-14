function hello(){
    console.log("hello");
}
setTimeout(hello,4000); //timeout 2s = 2000ms

//how to set a call back

function getData(dataId, getNextData){

    setTimeout( () => {
        console.log("data",dataId);
        if(getNextData){
            getNextData();
        }
    },2000);
}

//call back and call back hell 

getData(1, () => {
    console.log("getting data2 ....");
    getData(2, () => {
        console.log("getting data3 ....");
        getData(3, ()=>{
            console.log("getting data4 ....");
            getData(4);
        });
    });
});

//the concept name promises is used for the resolving the issue of the callback hell
//the syntax of the promises is given below and the reslove and reject is inbuilt functions in javascript

let promise = new Promise((resolve,reject) => {
    console.log("I am a promise");
    //resolve(123);
    reject("some error occured")//ye humhe error return krke dega
});
//promises 3 state par work krta hai pending,resolve,rejected
//inko hum apni javascript me use nahi karte ye humhe api ke concepts me return hokr milti hai

//generally jab hum apis ko call krte hai wo bhi humhe aishei promise ko return krta hai

function getData(dataId,getNextData){
    return new Promise((resolve,reject) => {
        setTimeout ( () => {
            console.log("data",dataId);
            resolve("success");
            if(getNextData){
                getNextData();
            }
        },2000);
    });
}
//after learning the concepts of promise chaining we can here be apply the chaining
getData(1).then((res) => {
    console.log(res);
    getData(2).then(() => {
        console.log(res);
    });
});//output 
//data1
//success
//data2
//success

//another way of writing this promise chaining
getData(1)
    .then((res) => {
        return getData(2);
    })
    .then((res) => {
        return getData(3);
    })
    .then((res) => {
        console.log(res);
    });


//lets see how can be use the promises
const getPromise = () => {
    return new Promise((resolve,reject) => {
        console.log("I am a promise");
        //resolve("success");for result
        reject("error");//noResult
    });
};

let result = getPromise();
result.then((res) => {//this is the parameter of this
    console.log("promise fulfilled",res);
});

let noResult = getPromise();
noResult.catch((err) => {//this is the parameter of this
    console.log("no result found",err);
});

//what is the promises chaning

const asyncFunc1 = () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("data1");
            resolve("success");
    },4000);
});
}

const asyncFunc2 = () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("data2");
            resolve("success");
    },4000);
});
}

console.log("fetching data1");
let p1 = asyncFunc1();
p1.then((res) => {
    console.log(res);
});

console.log("fetching data2");
let p2 = asyncFunc2();
p2.then((res) => {
    console.log(res);
});

//to phle fetching data1 aayega and phla func call hoajeya and lekin fetching 2 likhkr aajeyga iske baad dono 4 sec tk parallel chelnge and 
//output is form me aayeba jaise niche likha hai
//fetching data1
//fetching data2
//data1
//success
//data2
//success lekin hum chahte hai ki fetching data 1
//data1
//success is trh se output generate ho 
//isliye hum chaining ka use karte hai is concept me 


//so see the below code how we do chaining in this
console.log("fetching data1....");
let t1 = asyncFunc1();
t1.then((res) => {
    console.log("fetching data2...");
    let t2 = asyncFunc2();
    p2.then((res) => {
    });
});


//async function always returns a promise
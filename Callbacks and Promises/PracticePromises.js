let cName= "Lakshay", confirmName="Lakshay";

let promise= new Promise((resolve, reject)=>{
    if(cName===confirmName)
        resolve();
    else 
        reject();
})
promise.then(
    () =>{
        console.log("Success!\nCorrect customer name!");
    }
).catch(
    ()=>{
        console.log("Bad request!");
    }
)

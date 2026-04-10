function validateStastusCode(status){
 if (status>=200 && status<=300){
    console.log("request is fine !")
 }
}

validateStastusCode(506);

const checkStatusCode = function (status1){
    if (status1>=200 && status1<=300){
        console.log("request is fine !")
     }
}

checkStatusCode(201);

const testStatusCode = (status2) => {
    if (status2>=200 && status2<=300){
        console.log("request is fine !. I am inside arrow function.")
     }
}

testStatusCode(270);
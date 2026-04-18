const user = {
    name: "Nitya",
    age: 43
}

// Adding a method to the object
// methods are functions that are properties of an object. They allow us to define behavior for the object 
// and can be used to perform actions or calculations based on the object's data.


// const calculator = {

//     value: 0, // based on this value, we will perform addition and subtraction functions.

//     add(n) {
//         this.value += n;
//         return this.value;
//     },
//     subtract(n) {
//         this.value -= n;
//         return this.value;
//     }

// }

const calculator = {
    value: 0,
    // name : "Pramod",
    add(n) {
        this.value += n;
        // this.name += "Dutta"
        return this;
    },
    substract(n) {
        this.value -= n;
        return this;
    }

}

console.log(calculator.add(5).substract(6));
// { value: 0, add: [Function: add], substract: [Function: substract] }

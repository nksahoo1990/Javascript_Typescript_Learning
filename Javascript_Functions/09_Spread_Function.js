function add (a,b,c){
    return a+b+c;
}

let num =[1,2,3];
console.log(add(...num)); 
// Spread operator is used to spread the elements of the array as individual arguments to the function.
// In the above example, ...num will spread the elements of the num array (1, 2, 3) as individual arguments to the add function. So it will be equivalent to calling add(1, 2, 3) which will return 6.
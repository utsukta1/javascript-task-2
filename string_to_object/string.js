// Given an array of strings, write a function that transforms it into an object
// where each string is a property, and the value is the length of the string


let fruits = ["Apple", "Banana", "Mango"];


function transform(arr) {

    // if (arr === undefined) {
    //     r
    // }
    // else if (arr === null) {
    //     console.log("Array is empty!");
    // }



    // return arr.reduce((a, b) => {
    //     a[b] = b.length;
    //     return a;
    // }, {});


    let reduced_array = arr.reduce((acc, val) => {
        acc[val] = val.length;
        return acc;
    }, {});
    return reduced_array;

}
console.log(transform(fruits));

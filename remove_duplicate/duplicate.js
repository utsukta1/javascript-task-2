
// Create a function that takes an array of numbers and returns a new array with
// only the unique numbers (remove duplicates).

// console.log(num.indexOf(9));
let num = [9, 8, 1, 0, 3, 1, 2, 1, 0, 6];
function removeDuplicate(arr) {
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (newArr.indexOf(arr[i]) === -1) {
            newArr.push(arr[i]);
        }

    }

    return newArr;
}

console.log(removeDuplicate(num));


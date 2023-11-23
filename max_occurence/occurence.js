let numbers = [9, 8, 1, 0, 3, 1, 2, 1, 0, 6];

function countRepetition(arr) {
    return arr.reduce((element, count) => {
        if (!element[count]) {
            element = { ...element, [count]: 1 };
            return element;
        } else {
            element = { ...element, [count]: ++element[count] };
            return element;
        }
    });
}


let ans = countRepetition(numbers);
console.log(ans);
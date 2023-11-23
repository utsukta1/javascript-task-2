let num = [3, 6, 2, 10];

function mean_calc(arr) {
    var add = arr.reduce((acc, val) => {
        var sum = (acc + val);

        return sum;


    });

    var m = (add / (arr.length));

    return m;
}

console.log(mean_calc(num));
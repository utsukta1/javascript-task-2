let num = [1, 7, 3, 4];

function min_max(arr) {

    const max = arr.reduce((acc, val) => {


        if (acc > val) {
            return acc;

        }
        else {
            return val;
        }

    });

    const min = arr.reduce((a, v) => {
        if (a < v) {
            return a;
        }
        else {
            return v;
        }
    });


    return {
        max,
        min
    };

}

// let max1 = {
//     max1: min_max(num)
// }
// console.log(max1);



console.log(min_max(num));

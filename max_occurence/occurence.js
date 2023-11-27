let numbers = [9, 8, 1, 0, 3, 1, 2, 1, 0, 6];
function maxRepeat(arr) {
    const result = arr.reduce((acc, current) => {
        acc[current] = (acc[current] || 0) + 1;
        if (!acc.max || acc[current] > acc[acc.max]) {
            acc.max = current;
        }
        return acc;

    }, { max: null });
    return result;
}
console.log(maxRepeat(numbers));
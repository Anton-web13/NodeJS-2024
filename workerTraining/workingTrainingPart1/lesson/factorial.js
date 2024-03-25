module.exports = function factiorial (n) {
    if (n == 1 || n == 0) {
        return 1;
    }

    return factiorial(n - 1) * n;
    // const summOfFactorial = [];
    // summOfFactorial.push(factiorial(n - 1) * n);

    // return summOfFactorial;
};
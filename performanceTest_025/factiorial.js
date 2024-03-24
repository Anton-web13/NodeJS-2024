function factiorial (n) {
    if (n == 1 || n == 0) {
        return 1;
    }

    return factiorial(n - 1) * n;
}


const compute = ({array}) => {
    const arr = [];
    for (let i = 0; i < 100000000; i ++) {
        arr.push(i * i);
    }

    return array.map(el => factiorial(el));
};


module.exports = { factiorial, compute };
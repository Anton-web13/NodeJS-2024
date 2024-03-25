// const compute = () => {
//     console.log(123);
// };

// const computew = () => {
//     console.log('123ee');
// };

// module.exports = { compute, computew };



const { parentPort, workerData } = require('worker_threads');
const factiorial = require('./factorial');

const compute = ({ array }) => {
    const arr = [];
    for(let i = 0; i < 100000000; i++) {
        arr.push(i * i);
    };

    console.log('worker ARRAY', array);

    return array.map(ell => factiorial(ell))
};

// const resultOfCompute = compute();

// console.log('resultOfCompute ARRAY', resultOfCompute);

console.log('worker WORKERDATA', workerData);

parentPort.postMessage(compute(workerData));
// console.log("parentPort.postMessage", parentPort.postMessage(compute(workerData)));

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

    return array.map(ell => factiorial(ell))
};

parentPort.postMessage(compute(workerData));

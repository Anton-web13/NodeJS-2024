const factiorial = require('./factiorial');
const {parentPort, workerData} = require('worker_threads');

const compute = ({array}) => {
    const arr = [];
    for (let i = 0; i < 100000000; i++) {
        arr.push(i * i);
    };

    return array.map((value) => {
        return factiorial(value);
    })
};


parentPort.postMessage(compute(workerData));
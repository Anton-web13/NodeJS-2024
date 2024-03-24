const { parentPort, workerData } = require('worker_threads');
const { compute } = require('./factiorial');

// console.log(workerData);

parentPort.postMessage(compute(workerData));
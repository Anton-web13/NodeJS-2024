const { parentPort, workerData } = require('worker_threads');

// const countDown = ({number}) => {
//     performance.mark('start');
//     const countResult = [];
//     for(let i = 0; i < number; i++) {
//         countResult.push(i*6514984/796514684*46541+96645167);
//     };

//     return countResult;
// };


const words = ({letters}) => {
    performance.mark('start');
    const countResult = [];
    for(let i = 0; i < letters; i++) {
        countResult.push(i/3.14);
    };

    return countResult;
};

// parentPort.postMessage(countDown(workerData));
parentPort.postMessage(words(workerData));
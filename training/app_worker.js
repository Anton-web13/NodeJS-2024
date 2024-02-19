const factiorial = require('./factiorial');
const { Worker } = require('worker_threads');


// const compute = (array) => {
//     const arr = [];
//     for (let i = 0; i < 100000000; i++) {
//         arr.push(i * i);
//     };

//     return array.map((value) => {
//         return factiorial(value);
//     })
// }


const compute = (array) => {
    return new Promise((resolve, reject) => {
        const worker = new Worker('./worker.js', {
            workerData: {
                array,
            }
        });

        worker.on('message', (msg) => {
            console.log(worker.threadId);
            resolve(msg);
        });

        worker.on('error', (err) => {
            reject(err);
        });

        worker.on('exit', () => {
            console.log('The work is to end!')
        });
    });
};


const main = async () => {

    try {
        performance.mark('start');
        const result = await Promise.all([
            compute([25, 20, 19, 48, 30, 50]),
            compute([25, 20, 19, 48, 30, 50]),
            compute([25, 20, 19, 48, 30, 50]),
            compute([25, 20, 19, 48, 30, 50]),
        ]);
    
        console.log(result);
    
        performance.mark('end');
        performance.measure('main', 'start', 'end');
        console.log(performance.getEntriesByName('main').pop());
    
    } catch(e){
        console.error(e.message);
    }

};

setTimeout(() => {
    console.log('Timeout');
}, 2000);

main();

const { Worker } = require('worker_threads');

const countDown = (letters) => {

    return new Promise((resolve, reject) => {
        const worker = new Worker('./myWorker.js', {
            workerData: {
                letters,
            }
        });

        worker.on("message", (msg) => {
            resolve(msg)
        });
    });


    // const worker = new Worker('./myWorker.js', {
    //     workerData: {
    //         number,
    //         letters,
    //     }
    // });

    // worker.on("message", (msg) => {
    //     console.log('msg', msg);
    // });
};

const main = async () => {
    try {
        performance.mark('start');

        const result = await Promise.all([
            countDown(50000000),
            countDown(50000),
            countDown(12000000),
        ]);

        console.log('result: ', result);

        performance.mark('end');
        performance.measure('countDown', 'start', 'end');
        console.log(performance.getEntriesByName('countDown').pop());
    } catch (err) {
        console.log(err.message);
    }
};

const numnersArray = () => {
    for(let i = 0; i < 15000; i++) {
        console.log(i);
    }

    setTimeout(() => {
        console.log('WOW!');
    }, 1000);
}


main();
numnersArray();
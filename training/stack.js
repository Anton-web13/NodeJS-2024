//  lesson 19

// const a = 5;

// const b = () => {
//     return c;
// };

// const c = () => {
//     return d;
// };

// const d = () => {
//     console.log(a);
// };

// setTimeout(() => {
//     console.log("Timeout");
// }, 1000)

// b();



// lesson 20

// const crypto = require('crypto');
// const https = require('https');
// const start = performance.now();


// const os = require("os");
// process.env.uv_threadpool_size = os.cpus().length;

// console.log(os.cpus());

// process.env.UV_THREADPOOL_SIZE=16;
// console.log(process.env.UV_THREADPOOL_SIZE)


// for (let i = 0; i < 50; i++) {
//     crypto.pbkdf2('test', 'salt', 100000, 64, 'sha512', () => {
//         console.log(performance.now() - start); 
//     });
// }


// for (let i = 0; i < 50; i++) {
//     https.get('https://yandex.ru', (res) => {
//         res.on('data', () => {});
//         res.on('end', () => {
//             console.log(performance.now() - start);
//         })
//     });
// }


// lesson 22

const perf_hooks = require('perf_hooks');


const performanceObserver = new perf_hooks.PerformanceObserver((items, observer) => {
    console.log(items.getEntries());
    const entry = items.getEntriesByName('slow').pop();
    console.log(`${entry.name}: ${entry.duration}`);
    observer.disconnect();
});

performanceObserver.observe({entryTypes: ['measure', 'function']});

const test = () => {
    const arr = [];

    for (let i = 0; i < 10000000; i++) {
        arr.push(i*i);
    }
}

const test2 = perf_hooks.performance.timerify(test);


const slow = () => {
    performance.mark('start');

    const arr = [];
    
    for (let i = 0; i < 10000000; i++) {
        arr.push(i*i);
    }

    performance.mark('end');
    performance.measure('slow', 'start', 'end');

    // console.log(performance.getEntriesByName('slow'));
};

// const test2 = perf_hooks.performance.timerify(slow);


slow();
test2();



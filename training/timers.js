// console.log('Bevor wir starten setTimeout');

// const start = performance.now();

// setTimeout(() => {
//     console.log(performance.now() - start);
//     console.log('Eine Sekunde ist vorbei!');
// }, 1000);

// const myFunction = (firstArgument, secondArgument) => {
//     console.log(`Argument => ${firstArgument} + ${secondArgument}`)
// }

// setTimeout(myFunction, 1500, 'cool', '123')


// const timerId = setTimeout(() => {
//     console.log('BOOM!');
// }, 5000);


// setTimeout(() => {
//     clearTimeout(timerId);
//     console.log("Gereinigt wurde!");
// }, 1000);

// const intervalId = setInterval(() => {
//     console.log(performance.now());
// }, 1000);

// setTimeout(() => {
//     clearTimeout(intervalId);
//     console.log("Gereinigt wurde!");
// }, 5000);


// console.log("Vorher");

// setImmediate(() => {
//     console.log("Nach dem allen");
// });

// console.log("Nachher");


// const timerId = setInterval(() => {
//     console.log("BOOM!");
// }, 2000);


// timerId.unref();


// setImmediate(() => {
//     timerId.ref();
// });


const fs = require('fs');

console.log('Init');

setTimeout(() => {
    console.log(performance.now(), 'Timer 1 sec.');
}, 1000);

setImmediate(() => {
    console.log('Immediate');
});


fs.readFile(__filename, () => {
    console.log('File readed');
});


setTimeout(() => {
    for (let i = 0; i < 1000000000; i++) {

    }

    console.log('Done');

    Promise.resolve().then(() => {
        console.log('Promise inside Timeout');
    });

    process.nextTick(() => console.log('Tick inside Timeout'));
    
}, 0);

Promise.resolve().then(() => {
    console.log('Promise');
});



process.nextTick(() => {
    console.log('Tick');
});



console.log('Final');





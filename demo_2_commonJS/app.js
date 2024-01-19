const numberA = 1;

if (numberA >= 1) {
    const log = require('./characters.js');
    log();
} else {
    console.log('Weniger oder gleich zum 0');
}


// const {characters, stealRing} = require('./characters.js');

// console.log(`Show the original variable ${JSON.stringify(characters)}`);

// let myChars = JSON.parse(JSON.stringify(characters));

// stealRing(myChars, 'Frodo');

// for(const person of myChars) {
//     console.log(person);
// }

// console.log(`Show the corrected characters ${JSON.stringify(characters)}`);
// console.log(`Show the corrected myChars ${JSON.stringify(myChars)}`);


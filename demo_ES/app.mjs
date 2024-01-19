// import {characters, greet} from './characters.mjs';
// import * as char  from './characters.mjs';
// import log, * as char from './characters.mjs';
// import log, {characters, greet as greetToHello} from './characters.mjs';

import log from './characters.mjs';

const main = async () => {
    try {
        const {characters, greet} = await import('./characters.mjs');

        for (const {name} of characters) {
            greet(name);
        }

    } catch (error) {
        console.log("Up is a error")
    }
}

main();

// console.log(characters);

// for (const {person} of characters) {
//     greetToHello(person);
// }

// log();
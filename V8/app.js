// const main = () => {
//     const a = 15;
//     return a * 17;
// };

// main();


let outter = null;
let run = function () {
    let inner = outter;
    let unused = function() {
        if (inner) {
            console.log('hi');
        }
    }

    unused();
    
    outter = {
        longStr: new Array(1000000).join('*'),
    };
};

setInterval(run, 1000);


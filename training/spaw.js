const { exec } = require('child_process');


// const childProcess = exec('dir');
const childProcess = exec('dir', (error, stdout , stderr ) => {
    if (error) {
        console.error(error.message);
        return;
    };

    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
});

childProcess.on('exit', (code) => {
    console.log(`Der Kodeausgang: ${code}`);
});

childProcess.on('message', (msg) => {
    console.log(msg)
})




// const { spawn } = require('node:child_process');


// const childProcess = spawn('grep', ['ssh']);

// childProcess.stdout.on('data', (data) => {
//     console.log(`stdout: ${data}`);
// });

// childProcess.stderr.on('data', (data) => {
//     console.log(`stderr: ${data}`);
// })

// childProcess.on('exit', (code) => {
//     console.log(`Der Kodeausgang: ${code}`);
// })






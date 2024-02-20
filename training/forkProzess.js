const { fork } = require('child_process');

const forkProzess = fork('fork.js');

forkProzess.on('message', (msg) => {
    console.log(`Des Message ist bekommen: ${msg}`);
});

forkProzess.on('close', (code) => {
    console.log(`Access`);
    console.log(`Exited: ${code}`);
});

forkProzess.send('Ping');
forkProzess.send('disconnect');

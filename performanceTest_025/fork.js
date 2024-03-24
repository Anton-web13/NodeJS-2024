const { compute } = require('./factiorial.js');

process.on('message', (msg) => {
    process.send(compute(msg));
    process.disconnect();
});

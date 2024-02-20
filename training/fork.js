process.on('message', (msg) => {
    if (msg == 'disconnect') {
        process.disconnect();
        return;
    }
    console.log(`Der Kunde ist die Nachricht bekommen: ${msg}`);
    process.send('Pong!');
});

// console.log(__dirname);
// console.log(__filename);
// console.log(global);
// console.log(performance);
// console.log(module);
// console.log(exports);
// console.log(require);


const EventEmmiter = require('events');

const myEmmiter = new EventEmmiter();

const logDbConnection = () => {
    console.log('DB connected');
};

myEmmiter.addListener('connected', logDbConnection);
myEmmiter.emit('connected');

myEmmiter.removeListener('connected', logDbConnection);
// myEmmiter.removeAllListeners('connected');
// myEmmiter.off('connected', logDbConnection);

myEmmiter.emit('connected');


myEmmiter.on('msg', (data) => {
    console.log(`Bekommen: ${data}`);
});

// myEmmiter.prependListener('msg', (data) => {
//     console.log(`Prepend`);
// });


myEmmiter.emit('msg', 'Hallo! Bekomm meine Nachricht. MSG!');

myEmmiter.once('off', () => {
    console.log('Ich wurde nur ein Mal gerufen und nicht mehr. OFF')
});

myEmmiter.emit('off');
myEmmiter.emit('off');

console.log(myEmmiter.getMaxListeners());
myEmmiter.setMaxListeners(1);
console.log(myEmmiter.getMaxListeners());

console.log(myEmmiter.listenerCount('msg'));
console.log(myEmmiter.listenerCount('off'));


console.log(myEmmiter.listeners('msg'), 'MSG');
console.log(myEmmiter.listeners('off'), 'OFF');
console.log(myEmmiter.eventNames());


myEmmiter.on('error', (err) => {
    console.log(`Der Fehler ist ausgelöst worden: ${err.message}`);
});

myEmmiter.emit('error', new Error('BOOM!'));




// event target
const target = new EventTarget();

const logTarget = () => {
    console.log('Connected to target!');
};

target.addEventListener('connected', logTarget);
target.dispatchEvent(new Event('connected'));


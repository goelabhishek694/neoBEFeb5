const eventEmitter = require("events");
const myEmitter = new eventEmitter();

//listeners
// myEmitter.on("my_event", (...args) => {
//     console.log("there is a new event", args);
// });

// myEmitter.on("my_event", (...args) => {
//     console.log("another listener from the new event", args);
// });

// //emit an  event 
// myEmitter.emit('my_event');
// myEmitter.emit('my_event', 1,2);
// myEmitter.emit('my_event', [1,2,3]);

//removing callback
const secondCb = (...args) => {
    console.log("another listener for the new event", args);
};

//listeners
myEmitter.on('my_event', secondCb);
myEmitter.off('my_event', secondCb);

//emit
myEmitter.emit('my_event', [1,2,3]);


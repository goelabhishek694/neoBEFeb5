// Custom Event Emitter Implementation

class MyEventEmitter {
  constructor() {
    this.events = {};
  }

  on(event, listener) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(listener);
  }

  emit(event, ...args) {
    if (this.events[event]) {
      this.events[event].forEach(listener => listener(...args));
    }
  }
}

// Example usage
const myEmitter = new MyEventEmitter();
myEmitter.on('myEvent', (...args) => console.log("There is a new event!", args));
myEmitter.emit('myEvent', 1, 2, 3);
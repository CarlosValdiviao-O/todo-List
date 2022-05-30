

let events = {};

const on = (eventName, fn) =>  {
  events[eventName] = events[eventName] || [];
  events[eventName].push(fn);
};

const off  = (eventName, fn) => {
  if (events[eventName]) {
    for (let i = 0; i < events[eventName].length; i++) {
      if (events[eventName][i] === fn) {
        events[eventName].splice(i, 1);
        break;
      }
    };
  }
};

const emit = (eventName, data) => {
  if (events[eventName]) {
    events[eventName].forEach(function(fn) {
      fn(data);
    });
  }
}

export {on, off, emit};
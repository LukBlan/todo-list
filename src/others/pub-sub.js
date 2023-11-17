const events = {};

function subscribe(eventName, handler) {
  events[eventName] = events[eventName] || [];
  events[eventName].push(handler);
}

function emit(eventName, data) {
  events[eventName].forEach((handler) => handler(data));
}

export { subscribe, emit };

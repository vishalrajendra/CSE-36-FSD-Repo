const EventEmitter = require('events');

const user = new EventEmitter();

user.on('login', (username) => {
    console.log(username + ' has logged in.');
});

user.on('login', (username) => {
    console.log('Welcome ' + username + '!');
});

user.on('logout', (username) => {
    console.log(username + ' has logged out.');
});

// Trigger events
user.emit('login', 'John');
user.emit('logout', 'John');
const EventEmitter = require('events');

const myEmitter = new EventEmitter();

// 3. Register a listener for a custom event
myEmitter.on('userSignup', (username, plan, bool) => {
    console.log(bool)
    console.log(`Welcome email sent to ${username} for the ${plan} plan!`);
});

// 4. Emit the event with payload data
myEmitter.emit('userSignup', 'Alex', 'Premium', true);
myEmitter.emit('userSignup', 'Ashok', 'Pro', true);

myEmitter.emit('userSignup', 'Raj', 'Basic', true);

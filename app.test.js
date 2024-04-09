// app.test.js
const greet = require('./app');

test('returns greeting message', () => {
    expect(greet()).toBe('Hello, World!');
});

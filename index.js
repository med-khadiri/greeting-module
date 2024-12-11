// index.js
module.exports = function greet(name) {
    if (!name) {
        throw new Error("Name is required!");
    }
    return `Hello, ${name}! Welcome to the Node.js world!`;
};

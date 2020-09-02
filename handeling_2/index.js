const Error = require('./Error')
const Error2 = require('./Error2')
const app = require('./app')
const b = require('./b')

try {
    b()

} catch (err) {
    console.log("error:", err)
}

module.exports = {
    Error,
    Error2,
    app,
    b,
}
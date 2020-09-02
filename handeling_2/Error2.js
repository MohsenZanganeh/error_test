let BadRequest = require("./Error")
let callcatch = (callback,res,req) => {
    try {

        res.send(callback())

    } catch (err) {
        res.send("ddddddd:"+err)
    }
}
module.exports = callcatch
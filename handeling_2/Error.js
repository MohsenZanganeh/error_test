// class HttpError extends Error{
//  constructor(){
//     this.status
//  }      
// }
class BadRequest extends Error{
    constructor(status,message="Bad Request"){
        super(message)

        this.status=status
    }
}
const notfound=(req,res,next)=>{
    res.status(404).json({message:"Not Found"})
    next(err)
}
const internalServerError=(err,req,res,next)=>{
    if (!err.status) {
        console.log("err:",err.stack)
    }

if (err.status=="200") {
    err.message="OK"
}
if (err.status=="404") {
    err.message="Not Found"
}
if (err.status=="402") {
    err.message="Not Foundllllllllllllllll"
}
    res.status(err.status || 500).json({
        message: `${err.message}`  || 'Internal Server Error',
        status:err.status || 500
    })
}
module.exports = {internalServerError,notfound,BadRequest}
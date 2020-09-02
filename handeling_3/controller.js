
let fs=require('fs')
class user{

    constructor(name){
        console.log("--------------------Controller.js-----------------")
        this.name=name
    }
    get_name(){
        fs.readFileSync("e.txt",(err,data)=>{
            if(err)
                throw Error(err)
        })
        return this.name
    }
}
module.exports=user
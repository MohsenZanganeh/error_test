let express = require("express")
const { internalServerError, notfound, BadRequest } = require("../handeling_2/Error");
let index=require("./index")
let user
try{
    console.log("--------------------------")
    user =new index.controller("mohsen")
   console.log("user-------------:",user.get_name())
}catch(err){
    console.log("*****************************",err)
}
let app = express();

app.get("/",async (req,res)=>{
    res.send(user.get_name())
})


app.use(notfound)
app.use(internalServerError)

app.listen("3000", () => {
    console.log("Connect To Server...........")
})

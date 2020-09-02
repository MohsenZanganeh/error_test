let express = require("express")
const fs = require("fs")
const {internalServerError,notfound,BadRequest} = require("./Error2");
let app = express();

app.get("/",(res, req)=>{
        throw new BadRequest(200)
    })
app.get("/1",async(res, req)=>{
    b
        let b;
    // new Promise((resolve, reject)=>{
    //     b
    //     let b;
    // }).then()
    
            throw new BadRequest(400)
    })
app.get("/2",(res, req)=>{
        fs.readFileSync("./ee.txt",(err,result)=>{
            throw new BadRequest(402)
        })
    })

app.use(notfound)
app.use(internalServerError)


app.listen("3000", () => {
    console.log("Connect To Server...........")
})
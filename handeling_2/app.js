let express = require("express")
const fs = require("fs")
let midel=require("./a")
let index=require("./index")
const { internalServerError, notfound, BadRequest } = require("./Error");

let app = express();

app.get("/",midel,async (req,res)=>{
    
})


app.use(notfound)
app.use(internalServerError)

app.listen("3000", () => {
    console.log("Connect To Server...........")
})


// function A() {
//     this.virtualFunction();
//   }
  
//   A.prototype.virtualFunction = function() {
//       console.log("aaa")
//     console.log('A');
//   };
  
//   //-------------------------------------
  
//   function B() {
//      A.call(this);
//   }
  
//   B.prototype = Object.create(A.prototype);
//   B.prototype.constructor = B;
//   B.prototype.virtualFunction = function() {
//     console.log('B');
//     console.log("a");
//   };
  
//   var b = new B();
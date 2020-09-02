module.exports=(handler)=>{
    (...args)=>handler(...args).catch(err=>{
        console.log("errrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr")
       return next(err)
    })
}
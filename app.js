const express=require('express')
const app =express()
require('dotenv').config()
const port =process.env.PORT || 3000



//sending response

app.get('/',async(req,res)=>{

    res.send("Server running with changes - auto update 2")
})

// Listening to port

app.listen(port,()=>{
    console.log(`Server is listening ${port}`)
})
const express=require('express')
const app =express()
require('dotenv').config()
const port =process.env.PORT || 3000


//middleware javascript and css file
app.use('/public',express.static('public'))

// Setting up ejs engine

app.set('view engine','ejs')



//sending response - Home page
app.get('/',async(req,res)=>{

res.render('home', {home:{
    name:"task app"
}})
  
})

// Listening to port

app.listen(port,()=>{
    console.log(`Server is listening ${port}`)
})
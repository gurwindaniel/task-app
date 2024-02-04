const express=require('express')
const app =express()
require('dotenv').config()
const path=require('path')
const port =process.env.PORT || 3000
const router=require('./routes/router')
const {Pool}=require('pg')
const bodyparser=require('body-parser')



// Setting up ejs engine

app.set('view engine','ejs')

//get the values from ui in json format

app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())


//middleware javascript and css file
app.use('/public',express.static('public'))

app.use('/',router)


//Connecting to local database server
const pool=new Pool({
    user:'postgres',
    host:'localhost',
    database:'ticket',
    password:process.env.PASSWORD_DATA,
    port:'5432'
})

//access pool any where inside nodejs application
global.pool=pool


// Listening to port

app.listen(port,()=>{
    console.log(`Server is listening ${port}`)
})
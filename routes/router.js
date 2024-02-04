const express =require('express')
const router=express.Router()

//sending response - Home page
router.get('/',async(req,res)=>{
    const client=await pool.connect()
    try{
        const date=await client.query('select now()')
      
        res.render('home', {home:{
            name:"task app",
            date_time:date.rows[0].now
           
        }})
    
    }
        catch(e){
            console.log(e)
        }finally{
            client.release()
        }

      
    })

// Inser value to users
router.post('/user',async(req,res)=>{

    const client =await pool.connect()
    const user=req.body
    try{

        await client.query('insert into users (name,email,password) values($1,$2,$3)',[user.name,user.email,user.password])

        console.log(req.body)
        res.sendStatus(200)
    }catch(e){
        console.log(e)
    }finally{
        client.release()
    }

})

module.exports=router
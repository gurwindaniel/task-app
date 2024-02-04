$(document).ready(function(){

    //Clearing form input

    const clearInput=()=>{
        $('input').val('')
    }

    const message=(message)=>{
        if($("#message").children().length<1)
        {
            const parent=$("#message")
        const child=$('<h5>').text(message)
        child.css('color','red')
        parent.append(child)

        setTimeout(() => {
            parent.empty()
        }, 2000);

        }

        
    }

    const inputFetch=()=>{
        const users={}
        users.name=$("#myname").val()
        users.email=$("#exampleInputEmail1").val()
        users.password=$("#exampleInputPassword1").val()

        return users
    }
    $("#usersub").on('click',function(e){
        
        const data = inputFetch()
    
      
        console.log(data)
        $.ajax({
            url:'/user',
            method:'post',
            type:'json',
            data:data,
            success:function(){
                clearInput()
               message("form submitted successfully")

            }
           })
    })
   
})
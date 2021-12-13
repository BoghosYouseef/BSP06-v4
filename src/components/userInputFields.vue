<template>
    <div id= "input fields">
        <input id="userName" placeholder="User Name" type="text">
        <input id="password" placeholder="Password" type="password">
    </div>    
</template>


<script>
export default {
    name: "InputFields",

    methods:{
        
        validatePassword: function(password){
            // console.log(String(password.length))
            if(password === null){
                password = document.getElementById('password').value

            }
            if(password.length < 10){
                alert("Password is too short!")
                return false
            }

        },
        validateUserName: function(){
            // console.log(String(username.length))
            var username = document.getElementById('userName').value
            if(username.length < 5){
                alert("username is too short!")
                return false
            }

        }
    }
}
</script>


          

<style>

#userName{
    position:absolute;
    top: 20%;
    Right: 50%;
}

#password{
    position:absolute;
    top: 25%;
    Right: 50%;
}

</style>
<template>

    <div>
        <h1>User Login</h1>
        <p class="prompt">Please Enter Your User Name and Password</p>
        <InputFields />
        <UserLoginButton @click="authenticate(this.apiResponse)" />
        <popupWindow v-show="this.isShown" popupWindow :message="this.shownMessage" />
    </div>
    
</template>


<script>

import InputFields from "../components/userInputFields.vue"
import UserLoginButton from "../components/LoginButton.vue"
import axios from 'axios';
import popupWindow from "../components/popupWindow.vue"

// let formData = new FormData();/

export default {
    name: "User Login",
    components: {
        InputFields,
        UserLoginButton,
        popupWindow,
    },
    
    data (){
        return{
            apiResponse: Boolean,
            isShown: false,
            shownMessage: "",
            messageSuccess: 'user "George312 is now logged in!"',
            messageWrongPassword: "Login Failed! wrong password",

        }
    },

    methods:{
        

        chooseMessageToBeShown: function(response){
            console.log("THIS IS WORKING")
                if (response){
                    console.log("I AM IN THE IF CLAUSE")
                    this.shownMessage = this.messageSuccess
                    this.isShown = true
                    return true
               } else{
                    console.log("I AM IN THE ELSE IF CLAUSE")
                    this.shownMessage = this.messageWrongPassword
                    this.isShown = true
                    return true
               }
  
        
        },

        authenticate: function(){



                axios.get('api/users', {
                            "body": {"User Info":[
                                            this.formData
                                        ]
                                    }
                            })
                .then(response => (this.apiResponse = response.data.isAuthenticated,
                this.chooseMessageToBeShown(this.apiResponse),
                console.log(response.data.isAuthenticated),
                console.log(this.apiResponse))
                )

        },
       
    }
  
}

</script>


<style>

</style>

<template>

    <div>
        <h1>User Registration</h1>
        <p class="prompt">Please Enter New User Name and Password</p>
        <InputFields />
        <RegisterUserButton @click="POSTuser" />
        <popupWindow v-show="this.isShown" popupWindow :message="this.shownMessage" />
    </div>
    
</template>


<script>

import InputFields from "../components/userInputFields.vue"
import RegisterUserButton from "../components/RegisterUserButton.vue"
import axios from 'axios';
import popupWindow from "../components/popupWindow.vue"

// let formData = new FormData();/

export default {
    name: "User Registration",
    components: {
        InputFields,
        RegisterUserButton,
        popupWindow,
    },
    
    data (){
        return{
            apiResponse: Boolean,
            isShown: false,
            shownMessage: "",
            messageSuccess: 'User George312 has been registered successfully!',
            messageFailure: "User Michael is already registered!",

        }
    },

    methods:{
        

        chooseMessageToBeShown: function(response){
            console.log("THIS IS WORKING")
                if (response){
                    console.log("I AM IN THE IF CLAUSE")
                    this.shownMessage = this.messageFailure
                    this.isShown = true
                    return true
               } else{
                    console.log("I AM IN THE ELSE IF CLAUSE")
                    this.shownMessage = this.messageSuccess
                    this.isShown = true
                    return true
               }
  
        
        },

        POSTuser: function(){



                axios.post('api/users', {
                            "body": {"User Info":[
                                            this.formData
                                        ]
                                    }
                            })
                .then(response => (this.apiResponse = response.data.isRegistered,
                this.chooseMessageToBeShown(this.apiResponse),
                console.log(response.data.isRegistered),
                console.log(this.apiResponse))
                )

        },
       
    }
  
}

</script>


<style>

</style>

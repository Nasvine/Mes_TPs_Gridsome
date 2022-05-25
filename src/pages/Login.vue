<template>
    <form @submit.prevent="handleSubmit" >
        <h3> Login</h3>

        <div class="form-group">
            <label for="">Email</label>
            <input type="email" class="form-control" v-model="email" placeholder="Email">
        </div>
        <div class="form-group">
            <label for="">Password</label>
            <input type="password" name="" class="form-control" v-model="password"  id="" placeholder="Password">
        </div>
        <button class="btn btn-primary btn-block">Login</button>
    </form>
</template>

<script>
import axios from 'axios'
export default {
    name: "Login",
    data(){
        return{
            email: "",
            password:"", 
            tab:[]
        }
    },
    methods:{
        async handleSubmit(){
            console.log(this.email+" "+this.password);

           const response = await axios.post('http://api.odoo.ocoop.rintio.com/odoo/api/v1.0/users/login',{
                    email: this.email,
                    password: this.password,
              });
            /* console.log(response.data.company_id); */
            if(response.status == 200)
        {
            localStorage.setItem("users",JSON.stringify(response.data.company_id))
            this.$router.push({path:'/Test1/'})
        }
        console.warn(response)
              
        }
        
    }

}
</script>

<style >
   .back
   {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
   }
   
</style>


<template>
    <div>
         
        <input type="text" v-model="user.name" name="name" >
        <input type="email" v-model="user.email" name="email" >
        <input type="number" v-model="user.salary" name="salary" >
      
      <button @click="postRequest">Add Users</button> <br>
    </div>
  </template>
  <script>
    import axios from "axios"
    export default{

        data() {
            return {
               user:{
                name:"",
                email:"",
                salary:""
               }
         
            }
        },
        methods:{
            postRequest(e){
             e.preventDefault();
             console.log(this.user);
            //  axios.get('http://127.0.0.1:8000/api/employees')
            //  .then(res=>console.log(res.data))
             axios.post('http://127.0.0.1:8000/api/employees',this.user)
             .then(res=>{
            console.log(res);
            }) 
            .then(err=>console.log(err))
             
            }
    
    }
    }
  </script>
  
  <style>
 
  </style>
  

<template>
    <div>
       
        <ul v-for="user in users" :key="user.id">
          
    <div>
         <p>{{user.name}}</p>
         <p>{{user.email}}</p> 
         <li>{{user.salary}}</li>
         <button @click="deleteUser(user.id)">deletee</button>
    </div>
        </ul>
      
    </div>
  </template>
  <script>
    import axios from "axios"


    export default{

        data() {
            return {
              users:[]
         
            }
        },
        methods:{
           getUsers(){
          
             axios.get('http://127.0.0.1:8000/api/employees')
             .then(res=>this.users=res.data)
            
             
            },
        deleteUser(id){
            axios.delete('http://127.0.0.1:8000/api/delemploy/'+id)
            .then(res=>{
                
               alert('Done')
            })
            .then(err=>console.log(err))
        }
    
    },
    created() {
       this.getUsers()
       
    },
    }
  </script>
  
  <style>
 
  </style>
  
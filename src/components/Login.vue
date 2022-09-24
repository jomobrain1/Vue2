
<template>
    <div>
      <input type="text" v-model="form.username"><br>
      <input type="password" v-model="form.password"><br>
      <div class="checkbox">
        <h1>Hobbies</h1>
        <input type="checkbox" v-model="form.hobbies" value="coding" > <br>
        <input type="checkbox" v-model="form.hobbies" value="swimming"> <br>
      </div>
      <div class="radios">
        <input type="radio" value="male" v-model="form.gender"> male <br>
        <input type="radio" value="female" v-model="form.gender"> female <br>
      </div>
      <button @click="login">login</button> <br>
    </div>
  </template>
  <script>
    export default{

        data() {
            return {
                form:{
                    username:null,
                    password:null,
                    hobbies:[],
                    gender:null
                }
            }
        },
        methods:{
           login(){
            console.log(
             this.form.password
            ,this.form.hobbies,
            this.form.gender);
           }
        }
    }
  </script>
  
  <style>
 
  </style>
  
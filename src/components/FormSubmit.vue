
<template>
    <div>
        <hr>
        <h2>Submit Errors</h2>
        <div v-if="errors.length>0">
           <ul v-for="e in errors">
           <li>{{e}}</li>
           </ul>
        </div>
      <input type="text" v-model="submit.name"><br>
      <input type="text" v-model="submit.school"><br>
      
      
      <button @click="submitForm">Errors</button> <br>
    </div>
  </template>
  <script>
    export default{

        data() {
            return {
                submit:{
                    name:null,
                    school:null,
                   
                },
                errors:[]
            }
        },
        methods:{
           submitForm(e){
             e.preventDefault();
             if(this.submit.name && this.submit.school){
                alert('no error')
             }
            if(!this.submit.name){
                this.errors.push('name cannot be emty')
            }
            if(!this.submit.school){
                this.errors.push('school cannot be emty')
            }
             
           }
        }
    }
  </script>
  
  <style>
 
  </style>
  
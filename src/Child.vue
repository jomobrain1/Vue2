
<template>
    <div>
      <button @click="updateTitle">Update title</button>
      <!-- updates values in App.Vue -->
    </div>
  </template>
  <script>
    export default{
        methods:{
            updateTitle(){
                this.$emit('changeTitle','Props have been passed')
            }
        }
    }
  </script>
  
  <style>
 
  </style>
  
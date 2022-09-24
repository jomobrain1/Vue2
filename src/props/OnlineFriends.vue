<template>

    <div>
        <h1>OnlinE Friends</h1>
        <section>
            <h3><u>Names of Online Friends</u></h3>
            <div v-for="(f,index) in friends" :key="index">
              <ul v-if="f.online">
                <li>{{f.name}}</li>
              </ul>
            </div>
        </section>
    </div>
        
        
    </template>
    
    
    <script>
    export default{
    props:['friends']
    
    }
    </script>
    
    <style scoped>
    
    </style>
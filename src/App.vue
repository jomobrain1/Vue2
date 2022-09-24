<template>
  <div id="app">
     


      
<AllFriends :friends="friends"></AllFriends>
<hr>

<OnlineFriends v-if="show" :friends="friends"></OnlineFriends>
<button @click="show=!show" >Toggle online Friends</button> 
   
  </div>
</template>

<script>


import AllFriends from "./props/AllFriends.vue";
import OnlineFriends from "./props/OnlineFriends.vue";

export default {
  name: 'App',
  components: {
    AllFriends,
    OnlineFriends
},
data(){
 return{
  age:0,
  name:"jomoBrain1",
  show:true,
  friends: [
                { name: "jomobrain402", online: true },
                { name: "trizajomoo", online: false },
                { name: "marydahabu", online: false },
                { name: "raymond", online: true }
            ]
 } 
},
methods: {
 addAge(){
  this.age++
 }
},
}
</script>

<style>
  h1:hover{
    cursor: pointer;
  }
  button{
  margin: 10px 0px;
    padding: 3px 30px;
  }
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}
</style>

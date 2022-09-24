<template>

<div>
    <h1>All Friends</h1>
    <section>
        <h1><u>Names of Friends</u></h1>
        <div v-for="(f,index) in friends" :key="index">
          <ul>
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
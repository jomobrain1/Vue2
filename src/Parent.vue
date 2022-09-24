<template>
   <section>
    <h1>{{title}}</h1>
   <Child @changeTitle="updateTitleText($event)"></Child>
   </section> 
</template>

<script>
import Child from './Child.vue';
    export default{
        data() {
        return {
            title: "This is the title"
        };
    },
    methods: {
        updateTitleText(tit) {
            this.title = tit;
        }
    },
    components: { Child }
}
</script>
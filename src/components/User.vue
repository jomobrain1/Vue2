<template>
    <div>
      <h1>User Id is Given As {{userId}}</h1>
    </div>
</template>
<script>
    export default{
        watch: {
        $route: {
            immediate: true,
            handler(to, from) {
                document.title = to.meta.title || this.userId;
            }
        },
    },
        data() {
            return {
                userId:this.$route.params.id
            }
        },
    }
</script>
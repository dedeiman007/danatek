<template>
  <component :is="layout"/>
</template>

<script scoped>
  import './assets/js/summernote-lite.js'
  import './assets/css/summernote-lite.css'
  
    const layout = 'default';

    export default {
        name: 'App',
        computed: {
            layout(){
                console.log(this.$route.meta.layout);
                return (this.$route.meta.layout || layout) + '-layout'
            }
        },
    }
</script>

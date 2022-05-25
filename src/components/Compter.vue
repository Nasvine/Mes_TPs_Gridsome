<template>
    <div id="app">
    <p> La température au Bénin est</p>
    <a :href="url">{{text}}</a>
    </div>
</template>
    
<script >
export default {
  metaInfo: {
    title: 'Compter'
  },
  props:['url', 'text'],
  data () {

    return {
      count: 0
    }
  },
  computed:{
    
  }
}
  
</script>

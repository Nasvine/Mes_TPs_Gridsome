<template>
    <p>{{title}}</p>
    
</template>
<script >
export default{
    metaInfo:{
        title: 'BlogPosts'
    },
    data(){
        return
        {
           saluer: "coucou"
        }
    },
    props:[
        { id: 1, title: 'My journey with Vue' },
        { id: 2, title: 'Blogging with Vue' },
        { id: 3, title: 'Why Vue is so fun' }
    ],
    methods:{
        increment(){
          this.saluer
        }
    }


}

</script>
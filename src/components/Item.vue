<template>
    <div class="item">
    <div v-for="(a, index) in items" :key="index"> {{a}}</div>
    </div>
</template>
<script>
export default {
    metaInfo:{
        title:"item"
        
    },
    props:["name"],
    data(){
        return{
            
        }
    },data(){
        return{
            items:{
                key1 : "item1",
                key2 : "item2",
                key2 : "item3"
            }
        }
    }
}
</script>
<style>
.item{
    background-color: #fff;
    margin-top: 30px;
    padding: 15px 0;
    transition: 0.2s;
    cursor: pointer;
}
.item:hover{
    background-color: blue;
    color: white;
}
.item:active{
    transition: 0.1s;
    transform: scale(0.9)
}

</style>

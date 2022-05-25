<template>
    <div class="list"> <h1>LISTE</h1>
    <item name = "Item1"/>
    <item name = "Item1"/>
    </div>

</template>
<script>
import Item from '~/components/Item.vue'
export default {
    metaInfo:{
        title: "List"
    },
    components:{
        Item
    }
}
</script>

<style>
.list{
    max-width: 40%;
    margin: 0 auto;
    background-color: rgb(247, 21, 134);
    padding: 30px;
}


</style>



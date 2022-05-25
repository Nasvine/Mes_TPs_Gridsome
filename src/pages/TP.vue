<template>
   <Layout>
      <h1>TP</h1>
      <p>Bienvenu sur la page de test</p>
      {{message}}

       <div v-for="item in mets">
            {{item.plat}}:{{item.prix}}
    </div>
    
    <button @click="saluer()">Clicker ici !!!</button>
    <p>{{salutation}}</p>
    



       
   </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'TP'
  },
   data () {
    return {
        message: "Bonjour",
        salutation:"Bonjour Monsieur Dame",
        mets:[
            {plat:"riz", prix:200},
        {plat:"haricots", prix:700},
        {plat:"hors_doeuvre", prix:800}
        ]
      }
    },
    methods:{
        saluer(){
           this.salutation
        }
    }
  
}
</script>
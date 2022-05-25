<template>
  <Layout>
    <h1>About us</h1>
    <div id="app">
    <input type="text" v-model="ville" id="queryLoc">
    <button @click="change" type="button">Clicker ici !!!</button>
    <p> La température au Bénin est:</p>
      {{ info }}
      <compter url="/" text="Acceuil"/>
      <compter url="/about/" text="About"/>
      <button @click="Ajouter()"> Add 1</button>
      <p>Count is : {{ count }}</p>
    

      
      <a href="#" @click="Action" > Action</a>
      <ul id="Sa">
      <li v-for="item in Saluer" :key="item">{{item.Sa}}</li>
      </ul>
      


      <input type="text" v-model="texto">
      {{texto}}

      <a href="#" @click="Afficher" > Affichera un message</a>
      {{com}}
      
    </div>
  </Layout>
</template>
    
<script >
import Compter from '~/components/Compter.vue'
export default {
  metaInfo: {
    title: 'About us',
    components:{
      Compter
    }
  },
  data () {
    return {
      info: null,
      ville: null,
      count:0,
      Saluer : [{"Sa":"Boujour!!!"},{"Sa":"Bonsoir!!!"}],
      texto:"merci",
      com: null,
      comm: "Vous avec clicker sur moi !!! "
      
    }
  },
  mounted () {
    this.$http
      .get('https://api.openweathermap.org/data/2.5/weather?q=Cotonou&appid=fa937af0a55fd5ecd7f4cdb0e6a51e1f')
      .then(response => (this.info = response.data.main.temp))
  },
  methods:{
    Action(){
     return this.Saluer.reverse()
    },
    Ajouter(){
      return this.count++
    },
     change(){
        
       console.log("ville:"+this.ville)
  },
  Afficher(){
    this.com=this.comm
  }
  
  }
}
</script>
<style>
#Sa{
  list-style: none;
}
</style>


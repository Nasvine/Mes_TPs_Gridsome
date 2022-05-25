<template>

    <section class="section">
    
      <p class="subtitle">
        My first website with <strong>Bulma</strong>!
      </p>
   <button class="button is-primary">
  Button
</button>
<button class="button is-link">
  Button
</button>
<button class="button is-info">
  Button
</button>
<button class="button is-success">
  Button
</button>
<button class="button is-warning">
  Button
</button>
<button class="button is-danger">
  Button
</button><br>
<label for="">Mes articles</label>
<li v-for="el in tableau" :key="el">{{el.article}}</li><br>

<p>Vous avez ajouter cet texte:{{ untext }}</p><br>
<input type="text" v-model="untext" value="text" placeholder="Ajouter un texte"><br>
<span>Multiline message is:
</span>
<p style="white-space:pre-line;">{{message3}}</p>
<textarea v-model="message3" placeholder="add multiple line" cols="30" rows="10"></textarea>


<a href="#" @click="Ajouter">CLICKER</a><br>
{{message1}}

{{info}}
  
  </section>

</template>
<script>


export default {
    metaInfo:{
        title: 'Mapage'
    },
    data () {
    return {
      message1: null,
      message2: "Entrer un nom de produit",
      message3:"Commentaire",
      info: null,
      untext:"toto",
      tableau:[
        {id:1, article:"Chaussures"},
        {id:2, article:"Chemises"},
        {id:3, article:"Robes"},
        {id:4, article:"Pantalons"}
      ]
    }
  },
  methods:{
    Ajouter(){
    this.message1=this.message2
    }
  },
  mounted () {
       this.$http
      .get('https://http//api.odoo.ocoop.rintio.com:5000/odoo/products/')
      .then(response => (this.info = response))
  }  
}
</script>


 

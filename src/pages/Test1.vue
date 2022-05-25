<template>

  <div id="app">
    <!-- <button @click="Ajouter">Ajouter</button> -->

    <select id="" v-model="res">
      <option v-for="(element, index) in info " :key="index" @click="mn(e)">{{ element.name }}</option>
    </select>
    <input type="number" v-model="quan">

    <button @click="Ajouter">Ajouter</button>

    <br>


    <p v-for="(t, index) in tableau" :key="index">{{ t.produit }}:{{ t.quantity }}</p>


    <div v-for="(e, index) in info" :key="index" @click="mn(e)">
      {{ e.name }}
    </div>
    {{ id }}



    <button @click="getItem()">Envoyer</button>
    <section v-if="errored">
      <p>Nous sommes désolés, nous ne sommes pas en mesure de récupérer ces informations pour le moment. Veuillez
        réessayer ultérieurement.</p>
    </section>

    <!--  <section v-else>
    <div v-if="loading">Chargement...</div>

     <div v-for="element in info" class="element" :key="element">
    {{element.id}}:{{element.name}}
     </div>
  </section>
 -->




    <canvas id="myChart" width="10%" height="10%"></canvas>
  </div>
</template>
<script>

import Chart from 'chart.js/auto';

export default {

  metaInfo: {
    title: "Test_1"
  },
  data() {
    return {
      info: null,
      loading: true,
      errored: false,
      msg: "coucou",
      tableau: [],
      res: '',
      quan: null,
      id: null,


    };

  },
  methods: {
    getItem() {
      let Utilisateur = localStorage.getItem("users");
      console.log(Utilisateur);
    },
    mn(e) {
      this.id = e.id;
    },
    selection(element) {
      this.res = element.name;
      this.id = element.id;
    },
    Ajouter() {
      this.tableau.push(
        {
          id: this.id,
          produit: this.res,
          quantity: this.quan
        });
    }
  },
  mounted() {
    const ctx = document.getElementById('myChart');

    const data = {
      labels: [
        'Red',
        'Blue',
        'Yellow'
      ],
      datasets: [{
        label: 'My First Dataset',
        data: [90, 50, 10],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)'
        ],
        hoverOffset: 4,
        circumference: 360
      }]
    };
    const myChart = new Chart(ctx, {
      type: 'doughnut',
      data: data,
      /* 
      // diagramme en baton
      type: 'bar',
      data: {
          labels: ['vine', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange', 'nas'],
          datasets: [{
              label: '# of Votes',
              data: [25, 19, 3, 5, 2, 3, 30],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.9)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)',
                  'rgba(255, 159, 64, 0.9)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)',
                  'rgba(255, 159, 64, 0.9)'
              ],
              borderWidth: 1,
          },
          {
              label: '# of Votes',
              data: [20, 12, 3, 5, 2, 3],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.9)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.9)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1,
          },
          {
              label: '# of Votes',
              data: [16, 16, 3, 5, 2, 3],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.9)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1,
          }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      } */
    });





    this.$http
      .get('http://api.odoo.ocoop.rintio.com/odoo/api/v1.0/products/')
      .then(response => (this.info = response.data))
      .catch(error => {
        console.log(error)
        this.errored = true
      })
      .finally(() => this.loading = false)
  }
};
</script>


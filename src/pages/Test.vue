<template>
<div id="app">

  <button @click="getItem()">Envoyer</button>
  

</div>
</template>
<script>
export default {
  metaInfo: {
    title: "Test_1"
  },

  data() {
    return {
      info: null,
      loading: true,
      errored: false
    };
  },
  methods:{
     send(){
      this.$http
      .post('http://api.odoo.ocoop.rintio.com/odoo/api/v1.0/receipts/', 
      {
                  
            "immediate_transfer": true,
            "company_id": 5,
            "partner_id": 1,
            "note": "bien",
            "move_lines": [
              {
                "product_id": 35,
                "name": "Test",
                "quantity_done": 0,
                "reserved_availability": 0
              }
            ]

  })
  .catch(error => {
        console.log(error)
        this.errored = true
      })
  
  },
  
  },
  
}
</script>


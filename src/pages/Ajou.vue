<template>
    <div class="Search">
        <section class="dropdown-wrapper-un">
            <div @click="isVisible_un = !isVisible_un" class="selected-item-un "  >
                <span v-if="selectedItem_un">{{selectedItem_un.name}}</span>
                <span v-else> Produits</span>
                
                <svg class="drop-down-icon-un" :class="isVisible_un ? 'dropdown' : 'drop-down-icon'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path fill="none" d="M0 0h24v24H0z"/>
                <path d="M12 10.828l-4.95 4.95-1.414-1.414L12 8l6.364 6.364-1.414 1.414z"/></svg>
            </div>
            <div :class="isVisible_un ? 'visible' : 'invisible'" class="dropdown-popover-un">
                <input type="text" v-model="searchQuery_un" placeholder="Search" >
                <span v-if="filteredUser_un.length === 0"> No Data Available </span>
                <div class="options">
                    <ul>
                        <li @click="selectItem_un(product)" v-for="(product, index) in filteredUser_un" class="element" :key="index">{{product.name}}</li>
                       
                    </ul>
                </div>
            </div>
            
        </section>
        <section v-if="errored">
    <p>Nous sommes désolés, nous ne sommes pas en mesure de récupérer ces informations pour le moment. Veuillez réessayer ultérieurement.</p>
  </section>

  <section v-else>
    <div v-if="loading">Chargement...</div>
  </section>
  <div v-for="(el, index) in tab" :key="index">{{el}}</div>
  
    </div>
    
</template>

<script>
export default {
    name:"Ajou",
    data(){
        return{
            searchQuery_un: '',
            selectedItem_un: null,
            isVisible_un: false,
            info: null,
            products: null,
            loading: true,
            errored: false,
            selection: "",
            tab:[]

        }
    },
    methods:{
           selectItem_un(product){
             this.selectedItem_un = product;
             this.tab.push({id: product.id,
             nom: product.name});
             this.selection = product.name;
             this.isVisible_un = false;
             
           }
    },
    computed:{

           filteredUser_un(){
               const query = this.searchQuery_un.toLowerCase();
               if(this.searchQuery_un === ""){
                   return this.products;
               }
               return this.products.filter((product) => {
                   return Object.values(product).some((word) => String(word).toLowerCase().includes(query)
                   );
               });
           }
    },
    mounted(){
        this.$http
      .get('http://api.odoo.ocoop.rintio.com/odoo/api/v1.0/products/')
      .then(response => (this.products = response.data))
      .catch(error => {
        console.log(error)
        this.errored = true
      })
      .finally(() => this.loading = false)
    }

}
</script>

<style scoped lang="scss">
.dropdown-wrapper-un{
    max-width: 200px;
    position: relative;
    margin: 0 auto;

}
.selected-item-un{
    height: 40px;
    border: 2px solid lightgray;
    border-radius: 5px;
    padding: 5px 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 18px;
    font-weight: 400;

    .drop-down-icon-un{
        transform: rotate(0deg);
        transition: all 0.4s ease;
        &.dropdown{
        transform: rotate(180deg);
    }
    }

    
}
.dropdown-popover-un{
    position: absolute;
    border: 2px solid lightgray;
    top: 46px;
    left: 0;
    right: 0;
    background-color: #fff;
    max-width: 100%;
    padding: 20px;
    visibility: hidden;
    transition: all 0.5s linear;
    max-height: 0px;
    overflow: hidden;
    &.visible{
        max-height: 450px;
        visibility: visible;
    }

    input{
        width: 90%;
        height: 30px;
        border: 2px solid lightgray;
        font-size: 16px;
        padding-left: 5px;

    }
    .options{
        width: 100%;


        ul{
            list-style: none;
            text-align: left;
            padding-left: 8px;
            max-height: 180px;
            overflow-y: scroll;
            overflow-x: hidden;
            border: 1px solid lightgray;

            li{
               width: 100%;
               border-bottom: 1px solid lightgray;
               padding: 10px;
               background-color: #f1f1f1;
               cursor: pointer;
               font-size: 16px;
               &:hover{
                   background: #70878a;
                   color: #fff;
                   font-weight: bold;

               }
            }
}
    }


}
</style>

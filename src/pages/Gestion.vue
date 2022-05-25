<template>
  <Layout>
    <h1>Gestion</h1>

    <p class="toto">Bienvenue chez moi</p>
    <img src="./image1.png" alt="image1">
    <ul>
        <li><g-link class="nav__link" to="/about/">About</g-link></li>
        <li><g-link class="nav__link" to="/contact/">contact</g-link></li>
        <li><g-link class="nav__link" to="/tp/">TP</g-link></li>
    </ul>
    <p>Message is: {{ message }}</p>
    <input v-model="message" placeholder="edit me" />
    
  <BlogPosts
  v-for="post in posts"
  :key="post.id"
  :title="post.title"
 />
    
  </Layout>
  
 

</template>

<script>
import Compter from '~/components/Compter.vue'
import BlogPosts from '~/components/BlogPosts.vue'
export default {
  metaInfo: {
    title: 'Gestion',
    components:{ BlogPosts
    }
  }
}
</script>


<style>
.toto{
    color: orange;
}


</style>
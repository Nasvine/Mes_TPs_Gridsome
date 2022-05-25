// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import BlogPosts from '~/components/BlogPosts.vue'
import List from '~/components/List.vue'
import Item from '~/components/Item.vue'
import Compter from '~/components/Compter.vue'
import Vue from 'vue'
import axios from 'axios'





Vue.prototype.$http = axios
export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  Vue.component('Component', Compter)
  Vue.component('Component', BlogPosts)
  Vue.component('Component', List)
  Vue.component('Component', Item)
}

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import VueCompositionAPI from '@vue/composition-api'
import 'element-ui/lib/theme-chalk/index.css'
import Element from 'element-ui'
import '@/styles/index.scss'

Vue.use(Element)

// Vue.use(VueCompositionAPI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

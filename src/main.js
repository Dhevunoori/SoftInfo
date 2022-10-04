import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueMaterial from 'vue-material'
import MaterialIcons from 'material-design-icons-iconfont'
import 'vue-material/dist/vue-material.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import 'vue-material/dist/theme/default.css'


Vue.config.productionTip = false
Vue.use(VueMaterial);
Vue.use(MaterialIcons);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

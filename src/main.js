import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vantConfig from './untils/vant-config'
import './assets/iconfont/iconfont.css'
Vue.config.productionTip = false
Vue.use(vantConfig)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

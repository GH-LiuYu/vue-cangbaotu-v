import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
Vue.use(ElementUI);
import vueClapButton from 'vue-clap-button'
Vue.use(vueClapButton);
import scroll from 'vue-seamless-scroll'
Vue.use(scroll)
import router from './router'//引入路由
// import ECharts from 'vue-echarts'
// import 'echarts/lib/chart/line'
// Vue.component('chart', ECharts)
import './permission'
Vue.config.productionTip = false
new Vue({
  router,//注入路由
  render: h => h(App),
}).$mount('#app')

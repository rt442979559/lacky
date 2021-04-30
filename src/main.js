import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

//重置样式

import 'normalize.css/normalize.css'

// 引入scroll插件
import vuescroll from 'vuescroll'
Vue.use(vuescroll)
Vue.prototype.$vuescrollConfig = {
  bar: {
    background: 'rgb(0,53,84)',
    opacity: 1,
    size: '8px',
    keepShow: true
  },
  rail: {
    background: '#fff',
    opacity: 1,
    size: '8px',
    keepShow: false,
  }
}

//引入Ant组件
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.less'
Vue.use(Antd);

//引入页面过渡插件
import VuePageTransition from 'vue-page-transition'
Vue.use(VuePageTransition)

//引入转盘插件
import LuckDraw from 'vue-luck-draw'
Vue.use(LuckDraw)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

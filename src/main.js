// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
/* import { Button, Select } from 'element-ui' 这是只引入单个组件 */
import 'element-ui/lib/theme-default/index.css'
import App from './App'
import router from './router'

Vue.config.productionTip = false

Vue.use(ElementUI)
/*  这是只引入单个组件
 * Vue.use(Button)
 * Vue.use(Select)
 */

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

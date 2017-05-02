// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import VueResource from 'vue-resource'
import $ from 'jquery'

Vue.use(ElementUI)
Vue.use(VueResource)


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  mounted:function () {
    this.getdata();
  },
  methods: {
    getdata:function () {
      console.log(1)
    }
  }
   //    $.ajax({
   //      type: 'get',
   //      url:'http://localhost:8080',
   //      type: 'jsonp',
   //      data: {
   //        type: 1,
   //        limit: 5,
   //        s: '告白气球'
   //      },
   //      success: function (data) {
   //        alert(data);
   //      }
   //    })
  	// }
})

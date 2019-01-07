// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import md5 from 'js-md5';
import Vuex from 'vuex'
// import E from 'wangeditor'
Vue.use(Vuex)
Vue.prototype.$md5 = md5;

import VueDND from 'awe-dnd'
Vue.use(VueDND)
import 'wangeditor/release/wangEditor.min.css'


//input 焦点事件
// Vue.directive('focus', function (el) {
//   el.querySelector('input').focus()
// })
    // Vue.component('treeTransfer', () => {
    //  System.import('el-tree-transfer');
    // })
//随机数获取方式

function randomId() {
	let timestamp = Date.parse(new Date());
	let random = Math.floor(Math.random()*10000); 
	return timestamp +"||"+ random;
}
Vue.prototype.$randomIdMethod = randomId();

//路由跳转中检验是否有登录
router.beforeEach((to, from, next) => {　　  
  	
if(to.path == '/') {
    sessionStorage.removeItem('user');
  }
  let user = JSON.parse(sessionStorage.getItem('user'));
  if (!user && to.path != '/') {
    next({ path: '/' })
  } else {
    next()
  }
})  

import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from 'element-ui';
Vue.use(ElementUI);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

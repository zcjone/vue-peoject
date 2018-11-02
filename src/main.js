//入口文件
// 导入vue
import Vue from 'vue'
// 导入app组件
import app from './App.vue'
// 1.1导入vue-router
import vueRouter from 'vue-router'
// 1.2 项目中使用vue-router
Vue.use(vueRouter)

// 1.1导入vue-resource
import vueResource from 'vue-resource'
// 1.2 安装vue-resource
Vue.use(vueResource)

// 导入mui样式
import './lib/mui/css/mui.css'
// 导入mui扩张图标的样式
import './lib/mui/css/icons-extra.css'

// 导入mint-ui的header组件
import {Header, Swipe, SwipeItem} from 'mint-ui'
// 在项目中使用
Vue.component(Header.name,Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)

// 导入router.js
import router from "./router.js"

var vm = new Vue({
    el:"#app",
    render: el => el(app),
    router //路由挂在到实例中
})
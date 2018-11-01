//入口文件
// 导入vue
import Vue from 'vue';
// 导入app组件
import app from './App.vue';

// 导入mui样式
import './lib/mui/css/mui.css';
// 导入mui扩张图标的样式
import './lib/mui/css/icons-extra.css';

// 导入mint-ui的header组件
import {Header} from 'mint-ui';
// 在项目中使用
Vue.component(Header.name,Header);

var vm = new Vue({
    el:"#app",
    render: el => el(app)
})
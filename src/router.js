// 导入vue-router 的包
import vueRouter from 'vue-router';

// 导入组件
import home from './components/tabbar/HomeContainer.vue';
import member from './components/tabbar/MemberContainer.vue';
import shopcar from './components/tabbar/ShopcarContainer.vue';
import search from './components/tabbar/SearchContainer.vue';


//  创建 router 实例，然后传 `routes` 配置
var router = new vueRouter({
    routes: [
        {path: "/", redirect: "/home"},
        {path: "/home", component: home},
        {path: "/member", component: member},
        {path: "/shopcar", component: shopcar},
        {path: "/search", component: search}
    ],
    linkActiveClass:'mui-active'//路由选中的样式
});

export default router;
// 导入vue-router 的包
import vueRouter from 'vue-router'

// 导入组件
import home from './components/tabbar/HomeContainer.vue'//首页
import member from './components/tabbar/MemberContainer.vue'//会员
import shopcar from './components/tabbar/ShopcarContainer.vue'//购物车
import search from './components/tabbar/SearchContainer.vue'//搜索
import news from './components/news/NewsContainer.vue'//新闻
import newsinfo from './components/news/NewsInfo.vue'//新闻详情



//  创建 router 实例，然后传 `routes` 配置
var router = new vueRouter({
    routes: [
        {path: "/", redirect: "/home"},//默认显示首页
        {path: "/home", component: home},//首页
        {path: "/member", component: member},//会员
        {path: "/shopcar", component: shopcar},//购物车
        {path: "/search", component: search},//搜索
        {path: "/home/news", component: news},//新闻
        {path: "/home/newsinfo/:docid",component:newsinfo}//新闻详情
    ],
    linkActiveClass:'mui-active'//路由选中的样式
})

export default router
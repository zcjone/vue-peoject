## 使用vue框架编写项目
###  执行步骤
    1. npm install
    2. npm run dev
### 制作步骤
    1. 使用mui-ui的Header组件制作header区域
    2. 使用mui的制作底部的tabbar区域（tabbar.html)
      + 修改tabbar的文本和图标
      + 购物车图标
        + 使用mui的icons-extra.html中的购物车图标
        + 把icons-extra.css和mui-icons-extra.ttf放到项目中合适的位置
        + 在main.js中到如icons-extra.css样式
    3. 配置路由
      + 在main.js中导入路由文件vue-router
      + 在项目中使用vue-router
      + 导入路由配置的router.js文件
      + 在实例中挂在路由配置
      + 新建文件夹，在文件夹中新建4个.vue文件
      + 在router.js文件中配置路由
      + 在app.vue页面中间放置router-view用来展示路由子组件
    4. 制作首页轮播图
      + 下载vue-resouce并导入项目中
      + 使用mint-ui的swipe组件
      + 使用vue-resouce获取数据
      + 使用v-for渲染数据
    5. 根据mui的grid-default.html的九宫格制作六宫格导航
      + 改变图标与文字
    6. 制作tabbar的切换效果
      + 用transition标签包裹router-view标签
      + 加css样式
        .v-enter,
        .v-leave-to {
            opacity: 0;
            transform: translateX(100%);
        }
        .v-enter-active,
        .v-enter-active {
            transition: all 0.5s ease;
        }  
    7. 制作新闻资讯页面
      + 创建组件，配置路由
      + 使用mui的media-list.html的样式进行布局
      + 获取数据，渲染页面
    8. 制作新闻详情页面
<template>
    <div class="app-container">
       <!-- Header -->
        <mt-header fixed title="vue项目"></mt-header>
       <!-- router-view -->
        <transition>
            <router-view></router-view>
        </transition>
       <!-- tabber -->
        <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/member">
				<span class="mui-icon mui-icon-email"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item" to="/shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart">
                    <span class="mui-badge">9</span>
                </span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
    </div>
</template>
<script>
    export default {
        data() {
           return {}
        },
        created() {
         
        },
        methods:{
        }
    }
</script>
<style lang="less" scoped>
    .app-container {
        padding-top: 40px;
        padding-bottom: 50px;
        overflow-x: hidden;
    }
    .v-enter,
    .v-leave-to {
        opacity: 0;
        transform: translateX(100%);
    }
    .v-enter-active,
    .v-enter-active {
        transition: all 0.5s ease;
    }
</style>




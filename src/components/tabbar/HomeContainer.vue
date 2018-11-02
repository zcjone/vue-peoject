<template>
    <div>
        <!-- 轮播图 -->
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="(item,index) in lunbotulists" :key="item.url" v-if="index < 3">
                <img :src="item.url" alt="">
            </mt-swipe-item>
        </mt-swipe>
        
        <!-- 九宫格导航 -->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-home"></span>
                    <div class="mui-media-body">Home</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
                    <div class="mui-media-body">Email</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-chatbubble"></span>
                    <div class="mui-media-body">Chat</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-location"></span>
                    <div class="mui-media-body">location</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-search"></span>
                    <div class="mui-media-body">Search</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-phone"></span>
                    <div class="mui-media-body">Phone</div></a></li>
        </ul> 
    </div>
</template>
<script>
import { Toast } from 'mint-ui';
export default {
    data() {
        return {
            lunbotulists:[],
        }
    },
    created() {
        this.getluntu()
    },
    methods: {
        getluntu() {//获取轮播图
            this.$http.get("https://www.apiopen.top/meituApi?page=1").then(result => {
                if(result.body.code == 200) {
                    this.lunbotulists = result.body.data;
                }else {
                    Toast({
                        message: '获取数据失败',
                        duration: 2000
                    });
                }
            }) 
        }
    }
}
</script>
<style lang="less" scoped>
    .mint-swipe {
        height: 200px;
        img {
            width: 100%;
            height: 100%;
        }
    }
</style>



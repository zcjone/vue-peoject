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
                    <img src="../../images/menu/menu1.png" alt="">
                    <div class="mui-media-body">新闻资讯</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../images/menu/menu2.png" alt="">
                    <div class="mui-media-body">图片分享</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../images/menu/menu3.png" alt="">
                    <div class="mui-media-body">商品购买</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../images/menu/menu4.png" alt="">
                    <div class="mui-media-body">留言反馈</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../images/menu/menu5.png" alt="">
                    <div class="mui-media-body">视频专区</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../images/menu/menu6.png" alt="">
                    <div class="mui-media-body">联系我们</div></a></li>
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
    .mui-grid-view.mui-grid-9 {
        background-color: #fff;
        border: 0px;
        .mui-table-view-cell {
            border: 0px;
            .mui-media-body {
                font-size: 12px;
            }
            img {
                width: 60px;
                height: 60px;
            }
        }
    }
</style>



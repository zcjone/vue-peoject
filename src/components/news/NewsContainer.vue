<template>
    <div>
        <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="(item,index) in newsList" :key="item.docid" v-if="index > 1">
					<router-link :to="'/home/newsinfo/' + item.docid">
						<img class="mui-media-object mui-pull-left" :src="item.picInfo[0].url">
						<div class="mui-media-body">
							<h3> {{item.title}} </h3>
							<p class='mui-ellipsis'>
                                <span>发表时间：{{item.ptime | dateFormat}} </span>
                                <span>点击：{{item.tcount}} 次</span>
                            </p>
						</div>
					</router-link>
				</li>
			</ul>
    </div>
</template>
<script>
import { Toast } from 'mint-ui';
export default {
    data() {
        return {
            newsList:[]
        }
    },
    created() {
        this.getNews()
    },
    methods: {
        getNews() {//获取新闻页面的数据
            this.$http.get("journalismApi").then(result => {
                if(result.status == 200) {
                    this.newsList = result.data.data.toutiao
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
    .mui-table-view {
        li {
            h3 {
                font-size: 14px;
            }
            p {
                font-size: 12px;
                color: #009fff;
                display: flex;
                justify-content: space-between;
            }
        }
    }
</style>


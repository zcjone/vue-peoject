<template>
    <div>
        <h3>新闻详情页面---{{docid}}</h3>
    </div>
</template>
<script>
export default {
    data() {
        return {
            docid: this.$route.params.docid
        }
    }
}
</script>
<style lang="less" scoped>

</style>



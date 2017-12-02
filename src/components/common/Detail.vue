<template>
    <div>
        <div class="mui-media-body">
            <h4 class="mui-ellipsis">{{info.title}}</h4>
            <p class="mui-ellipsis newsinfo">
                <span>发表时间：{{info.add_time | dateformatter("YYYY-MM-DD HH:mm:ss")}}</span>
                <span class="mui-pull-right">点击：{{info.click}}次</span>
            </p>
        </div><hr>
        <slot name="pic"></slot>
        <div class="news-content">
            <p v-html="info.content"></p>
        </div>
    </div>
</template>

<script>
    import dateformatter from "../../filters/dateformatter";
    export default {
        props:["info"],
        filters:{
            dateformatter
        }
    }
</script>

<style>
    .news-content img{
        width: 100%;
    }
    table{
        width: 100% !important;
    }
</style>
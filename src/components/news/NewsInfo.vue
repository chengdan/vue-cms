<template>
    <div class="container">
        <div class="mui-media-body">
            <h4 class="mui-ellipsis">{{newsinfo.title}}</h4>
            <p class="mui-ellipsis newsinfo">
                <span>发表时间：{{newsinfo.add_time | dateformatter("YYYY-MM-DD HH:mm:ss")}}</span>
                <span class="mui-pull-right">点击：{{newsinfo.click}}次</span>
            </p>
        </div><hr>

        <div class="news-content" v-html="newsinfo.content">
        </div>

        <div class="news-content">
            <comment :id="$route.params.id"></comment>
        </div>
    </div>
</template>

<script>
    import axios from "axios";
    import dateformatter from "../../filters/dateformatter";

    import comment from "../common/Comment.vue";

    export default {
        data(){
            return{
                newsinfo:{}
            }
        },
        created(){
            axios({
                url:"http://vue.studyit.io/api/getnew/"+this.$route.params.id
            }).then(res=>{
                if(res.data.status == 0){
                    this.newsinfo = res.data.message[0];
                }
            })
        },
        filters:{
            dateformatter
        },
        components:{
            comment
        }
    }
</script>

<style>
.newsinfo{
    color: deepskyblue;
}
</style>
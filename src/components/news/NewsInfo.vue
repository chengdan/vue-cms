<template>
    <div class="container">
        <detail :info="newsinfo"></detail>
        <div class="news-content">
            <comment :id="$route.params.id"></comment>
        </div>
    </div>
</template>

<script>
    import axios from "axios";
    import dateformatter from "../../filters/dateformatter";

    import comment from "../common/Comment.vue";
    import detail from "../common/Detail.vue";

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
            comment,
            detail
        }
    }
</script>

<style>
.newsinfo{
    color: deepskyblue;
}
</style>
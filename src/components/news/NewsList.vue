<template>
    <div class="container">
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="(item,index) in newsList" :key="index">
                <router-link :to="'/home/newsinfo/' + item.id">
                    <img class="mui-media-object mui-pull-left" :src="item.img_url">
                    <div class="mui-media-body">
                        <p class="mui-ellipsis">{{item.title}}</p>
                        <p class="mui-ellipsis newstime">
                            <span>发表时间：{{item.add_time | dateformatter("YYYY-MM-DD HH:mm:ss")}}</span>
                            <span class="mui-pull-right">点击：{{item.click}}次</span>
                        </p>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    import axios from "axios";
    import dateformatter from "../../filters/dateformatter.js";

    export default {
        data(){
            return{
                newsList:[]
            }
        },
        created(){
            axios({
                url:"http://vue.studyit.io/api/getnewslist"
            }).then(res=>{
                if(res.data.status == 0){
                    this.newsList = res.data.message;
                }
            })
        },
        filters :{
            dateformatter
        }
    }
</script>

<style>
.newstime{
    font-size: 12px;
}
</style>
<template>
    <div class="container">
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="(item,index) in swipePic" :key="index">
                <img :src="item.img" alt="">
            </mt-swipe-item>
        </mt-swipe>


        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><router-link to="/home/newslist">
                <img src="../../images/menu1.png" alt="">
                <div class="mui-media-body">新闻资讯</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><router-link to="/home/piclist">
                <img src="../../images/menu2.png" alt="">
                <div class="mui-media-body">图片分享</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><router-link to="/home/goodslist">
                <img src="../../images/menu3.png" alt="">
                <div class="mui-media-body">商品购买</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><router-link to="/home/newslist">
                <img src="../../images/menu4.png" alt="">
                <div class="mui-media-body">留言反馈</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><router-link to="/home/newslist">
                <img src="../../images/menu5.png" alt="">
                <div class="mui-media-body">视频专区</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><router-link to="/home/newslist">
                <img src="../../images/menu6.png" alt="">
                <div class="mui-media-body">联系我们</div></router-link></li>
        </ul>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        data(){
          return{
            swipePic : []
          }
        },
        created(){
            axios({
                url:"http://vue.studyit.io/api/getlunbo"
            }).then(res=>{
                if(res.data.status == 0){
                    this.swipePic = res.data.message;
                }
            })
        }
    }
</script>

<style scoped>
.mint-swipe{
    height: 200px;
}
.mint-swipe img{
    width: 100%;
    height: 100%;
}
.mui-grid-view.mui-grid-9{
    background-color: #fff;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell,.mui-grid-view.mui-grid-9{
    border: none;
}
.mui-table-view img{
    width: 70%;
}


</style>
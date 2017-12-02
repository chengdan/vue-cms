<template>
    <div class="container">
        <transition @before-enter="beforeEnter" @enter="enter">
            <div class="red-ball" v-if="isShow"></div>
        </transition>


        <div class="mui-card">
            <div class="mui-card-content">
                <mt-swipe :auto="4000">
                    <mt-swipe-item v-for="(item,index) in InfoPic" :key="index">
                        <img :src="item.src" alt="">
                    </mt-swipe-item>
                </mt-swipe>
            </div>
        </div>


        <div class="mui-card">
            <div class="mui-card-header">{{GoodsInfo.title}}</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <div class="price">
                        <span>市场价：
                            <del>￥{{GoodsInfo.market_price}}</del>
                        </span>&nbsp;&nbsp;&nbsp;&nbsp;
                        <span>销售价：
                            <span class="sale_price">￥{{GoodsInfo.sell_price}}</span>
                        </span>
                    </div>
                    <div class="count">
                        <span>购买数量：</span>
                        <NumberBox :min="0" :max="100" @numberupdated="getCount" v-model="count"></NumberBox>
                    </div>
                    <div class="btns">
                        <mt-button type="primary" size="small">立即购买</mt-button>
                        <mt-button type="danger" size="small" @click="cartBtn">加入购物车</mt-button>
                    </div>
                </div>
            </div>
        </div>



        <div class="mui-card">
            <div class="mui-card-header">
                商品参数
            </div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p>商品货号：{{GoodsInfo.goods_no}}</p>
                    <p>库存情况：{{GoodsInfo.stock_quantity}}件</p>
                    <p>上架时间：{{GoodsInfo.add_time | dateformatter("YYYY-MM-DD HH:mm:ss")}}</p>
                </div>
            </div>
            <div class="mui-card-footer">
                <button class="mint-button mint-button--primary mint-button--large is-plain"  @click="$router.push('/home/goodsdesc/'+$route.params.id)"><!---->
                    <label class="mint-button-text">图文介绍</label>
                </button>
                <br>
                <button class="mint-button mint-button--danger mint-button--large is-plain"  @click="$router.push('/home/goodscomment/'+$route.params.id)"><!---->
                    <label class="mint-button-text">商品评论</label>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    import NumberBox from "../common/NumberBox.vue";
    import dateformatter from "../../filters/dateformatter";
    import axios from "axios";
//    import store from "../../store/store.js";
//    import globalEventBus from "../../store/eventbus.js";

    export default {
        data(){
          return{
              InfoPic : [],
              GoodsInfo:{},
              isShow : false,
              count : 0
          }
        },
        components:{
            NumberBox
        },
        filters:{
          dateformatter
        },
        methods:{
            getPic(){
                axios({
                    url:"http://vue.studyit.io/api/getthumimages/"+this.$route.params.id
                }).then(res=>{
                    if(res.data.status == 0){
                        this.InfoPic = res.data.message;
                    }
                })
            },
            getGoodsInfo(){
                axios({
                    url:"http://vue.studyit.io/api/goods/getinfo/"+this.$route.params.id
                }).then(res=>{
                    if(res.data.status == 0){
                        this.GoodsInfo = res.data.message[0];
                    }
                })
            },
            beforeEnter(el) {
                el.style.top = "400px";
                el.style.left = "150px";
            },
            enter(el) {
                el.offsetWidth;
                el.style.transition = "all .4s cubic-bezier(0.29, -0.38, 1, 0.68)";
                el.style.top = 580 + window.scrollY + "px";
                el.style.left = "237px";
                this.isShow = false;
            },
            cartBtn(){
                this.isShow = true;
                this.$store.commit("addToCarts",{
                    id:this.$route.params.id,
                    count:this.count
                })
            },
            getCount(number) {
                this.count = number;
            },
        },
        created(){
            this.getPic();
            this.getGoodsInfo();
        }
    }
</script>

<style>
    .red-ball {
        width: 15px;
        height: 15px;
        background-color: red;
        position: absolute;
        border-radius: 50%;
        top: 400px;
        z-index: 999;
        left: 150px;
    }
    .mint-swipe {
        height: 180px;
    }
    .mint-swipe-item {
        text-align: center;
    }
    .mint-swipe-item img {
        height: 100%;
    }

    .mui-card-content-inner span {
        line-height: 3;
    }

    .sale_price {
        color: red;
        font-size: 18px;
    }

    .mui-card-header,
    .mui-card-footer {
        display: block;
    }
</style>
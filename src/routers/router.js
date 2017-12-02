import VueRouter from "vue-router"

import Vue from "vue"

//使用Vue.use方法加载VueRouter模块
Vue.use(VueRouter);

import HomeContainer from "../components/container/HomeContainer.vue";
import MemberContainer from "../components/container/MemberContainer.vue";
import CartContainer from "../components/container/CartContainer.vue";
import SearchContainer from "../components/container/SearchContainer.vue";

import NewsList from "../components/news/NewsList.vue";
import NewsInfo from "../components/news/NewsInfo.vue";

import PicList from "../components/pic/PicList.vue";
import PicInfo from "../components/pic/PicInfo.vue";

import GoodsList from "../components/goods/GoodsList.vue";
import GoodsInfo from "../components/goods/GoodsInfo.vue";
import GoodsDesc from "../components/goods/GoodsDesc.vue";
import GoodsComment from "../components/goods/GoodsComment.vue";

export default new VueRouter({
    routes: [
        {
            path:"/home",
            component : HomeContainer
        },
        {
            path :"/member",
            component: MemberContainer
        },
        {
            path :"/cart",
            component: CartContainer
        },
        {
            path :"/search",
            component: SearchContainer
        },
        {
            path :"/",
            redirect :"/home"
        },
        {
            path :"/home/newslist",
            component : NewsList
        },
        {
            path :"/home/newsinfo/:id?",
            component : NewsInfo
        },
        {
            path :"/home/piclist/:id?",
            component : PicList
        },
        {
            path :"/home/picinfo/:id?",
            component : PicInfo
        },
        {
            path :"/home/goodslist/",
            component : GoodsList
        },
        {
            path :"/home/goodsinfo/:id?",
            component : GoodsInfo
        },
        {
            path :"/home/goodsdesc/:id?",
            component : GoodsDesc
        }
        ,
        {
            path :"/home/goodscomment/:id?",
            component : GoodsComment
        }
    ]
});


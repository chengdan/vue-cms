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
        }
    ]
});


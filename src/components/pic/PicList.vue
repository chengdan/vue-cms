<template>
    <div class="container">
        <div id="slider" class="mui-slider">
            <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                <div class="mui-scroll">
                    <a class="mui-control-item mui-active" @click="$router.push('/home/piclist/')" data-wid="tab-top-subpage-1.html">全部 </a>
                    <a class="mui-control-item" data-wid="tab-top-subpage-1.html"  v-for="(item,index) in categories" :key="index" @click="$router.push('/home/piclist/' + item.id)">{{item.title}}</a>
                </div>
            </div>
        </div>

        <ul>
            <li v-for="(item,index) in piclist" :key="index" @click="$router.push('/home/picinfo/'+item.id)">
                <img v-lazy="item.img_url">
                <div>
                    <h4>{{item.title}}</h4>
                    <p>{{item.zhaiyao}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    import axios from "axios";
    import mui from "../../lib/mui/js/mui.js";

    export default {
        data(){
            return{
                categories:[],
                piclist:[]
            }
        },
        created(){
            this.getCategories();
            this.getPicList();
        },
        methods:{
            getCategories(){
                axios({
                    url:"http://vue.studyit.io/api/getimgcategory"
                }).then(res=>{
                    if(res.data.status == 0){
                        this.categories = res.data.message;
//                        console.log(this.categories);
                    }
                })
            },
            getPicList(){
                axios({
                    url:"http://vue.studyit.io/api/getimages/" + (this.$route.params.id || 0)
                }).then(res=>{
                    if(res.data.status == 0){
                        this.piclist = res.data.message;
                    }
                })
            }
        },
        mounted(){
            mui('.mui-scroll-wrapper').scroll({
                deceleration: 0.0005
            });
        },
        watch:{
            "$route" : function () {
                this.getPicList();
            }
        }
    }
</script>

<style scoped>
    /** {*/
        /*touch-action:none;*/
    /*}*/
.container{
    background-color: #eee;
}
.mui-slider{
        z-index: 0;
}
ul{
    padding-left: 0;
}
li{
    list-style: none;
    position: relative;
    box-shadow: 0 0 15px #999;
    padding-bottom: 5px;
    background-color: #ccc;
    text-align: center;
}
li img{
    width: 100%;
}
li div{
    position: absolute;
    left: 0;
    bottom: 0;
    background-color: rgba(0,0,0,.3);
    color: #fff;
}
li div h4{
    font-size: 14px;
}
li div p{
    color: #fff;
    font-size: 12px;
    text-align: left;
}
img[lazy=loading] {
    width: 40px !important;
    height: 300px;
    margin: 0 auto;
}
</style>
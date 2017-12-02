<template>
    <div class="container">
        <detail :info="picInfo">
            <div slot="pic">
                <img class="preview-img" v-for="(item,index) in imgs" :key="index" :src="item.src" @click="$preview.open(index, imgs)">
            </div>
        </detail>

        <comment :id="$route.params.id"></comment>
    </div>
</template>

<script>
    import axios from "axios";
    import detail from "../common/Detail.vue";
    import comment from "../common/Comment.vue";

    import Vue from "vue";
    import VuePreview from "vue-preview"
    Vue.use(VuePreview)

    export default {
        data(){
            return{
                picInfo:{},
                imgs :[]
            }
        },
        methods:{
            getPicInfo(){
                axios({
                    url:"http://vue.studyit.io/api/getimageInfo/"+this.$route.params.id
                }).then(res=>{
                    if(res.data.status == 0){
                        this.picInfo = res.data.message[0];
                    }
                })
            },
            getImgs(){
                axios({
                    url:"http://vue.studyit.io/api/getthumimages/"+this.$route.params.id
                }).then(res=>{
                    if(res.data.status == 0){
                        this.imgs = res.data.message.map(v => {
                            v.h = 400;
                            v.w = 600;
                            return v;
                        })
                    }
                })
            }
        },
        created(){
            this.getPicInfo();
            this.getImgs();
        },
        components:{
            detail,
            comment
        }
    }
</script>

<style scoped>
img{
    width: 22%;
    margin-left: 5px;
    box-shadow: 0 0 15px #ccc;
}
</style>
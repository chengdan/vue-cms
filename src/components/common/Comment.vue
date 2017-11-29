<template>
    <div>
        <h4>发表评论</h4><hr>
        <textarea v-model="postContent" name="" id="" cols="30" rows="10" placeholder="请输入评论，最多输入120字"></textarea>
        <mt-button type="primary" size="large" @click="btnAdd">发表评论</mt-button>

        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="(item,index) in commentList" :key="index">
                <a href="javascript:;">
                    <p class="mui-ellipsis">
                        <span>第{{index+1}}楼</span>
                        <span>发表时间：{{item.add_time | dataformatter("YYYY-MM-DD HH:mm:ss")}}</span>
                        <span class="mui-pull-right">{{item.user_name}}</span>
                    </p>
                    <img class="mui-media-object mui-pull-right" :src="'../../images/menu'+ Math.floor(Math.random()*6+1)+'.png'">
                    <div class="mui-media-body">
                        <p class="mui-ellipsis comment-content">{{item.content}}</p>
                    </div>
                </a>
            </li>
        </ul>


        <mt-button type="danger" plain size="large" v-if="isShow" @click="more">加载更多</mt-button>
    </div>
</template>

<script>
    import axios from "axios";
    import { Toast } from 'mint-ui';
    import dataformatter from "../../filters/dateformatter.js"

    export default {
        data(){
            return{
                commentList:[],
                pageIndex : 1,
                postContent : "",
                isShow : true
            }
        },
        methods:{
          getDate(){
              axios({
                  url:"http://vue.studyit.io/api/getcomments/"+this.id +"?pageindex=" + this.pageIndex,
              }).then(res=>{
                  if(res.data.status == 0){
                      if(res.data.message.length > 0){
                          this.commentList = this.commentList.concat(res.data.message);
                      }else {
                          this.isShow = false;
                          Toast("已经没有更多内容啦！");
                      }
                  }
              })
          },
            btnAdd(){
              if(this.postContent.trim()){
                  axios({
                      url:"http://vue.studyit.io/api/postcomment/" + this.id,
                      method:"post",
                      data:"content=" + this.postContent
                  }).then(res=>{
                      if(res.data.status == 0){
                          this.commentList.unshift({
                              user_name: "匿名用户",
                              add_time: new Date(),
                              content: this.postContent
                          });
                          this.postContent = "";
                          Toast("发表成功！")
                      }
                  })
              }else {
                  Toast("内容不能为空！")
              }
            },
            more(){
                this.pageIndex ++;
                this.getDate();
            }
        },
        created(){
            this.getDate();
        },
        props:["id"],
        filters:{
            dataformatter
        }
    }
</script>

<style scoped>
    textarea{
        height: 100px;
        font-size: 14px;
        margin-bottom: 0;
    }
</style>
<template>
  <div>
      <mt-header fixed title="首页">
              <mt-button slot="left" icon="back" @click="$router.go(-1)" v-if="$route.path!='/home'">返回</mt-button>
      </mt-header>


      <router-view/>


      <nav class="mui-bar mui-bar-tab">
          <a class="mui-tab-item mui-active" @click="$router.push('/home')">
              <span class="mui-icon mui-icon-home"></span>
              <span class="mui-tab-label">首页</span>
          </a>
          <a class="mui-tab-item" @click="$router.push('/member')">
              <span class="mui-icon mui-icon-contact"></span>
              <span class="mui-tab-label">会员</span>
          </a>
          <a class="mui-tab-item" @click="$router.push('/cart')">
              <span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">{{$store.getters.totalCount}}</span></span>
              <span class="mui-tab-label">购物车</span>
          </a>
          <a class="mui-tab-item" @click="$router.push('/search')">
              <span class="mui-icon mui-icon-search"></span>
              <span class="mui-tab-label">搜索</span>
          </a>
      </nav>
  </div>
</template>

<script>
    import store from "./store/store.js";
export default {}
</script>

<style>
body,html{
    background-color: #fff;
}
.container{
    margin: 40px 0 50px 0;
    padding: 5px;
    /*background-color: #fff;*/
}
</style>

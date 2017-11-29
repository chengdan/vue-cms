##element-ui mint-ui mui

element-ui

mint-ui

mui

##App.vue

1. 头部 mint-ui header组件  
```javascript
        import MintUI from "mint-ui"
        import "mint-ui/lib/style.css"
        Vue.use(MintUI)
```
2. 底部的tab栏  mui 的 tabbar.html
    购物车图标，需要用到 icon-extra

###首页

1. 轮播图  mint-ui  swipe
2. 九宫格  mui  九宫格

###新闻

1. 列表页
    mui的图文列表
2. 详情页

###评论组件

因为项目中好几个地方都用到的评论功能，所以将评论功能封装成一个组件以达到复用效果

评论组件中需要获取评论列表信息，以及发布新的评论

所以，需要对应的新闻的id，或者商品的id，或者图片分享的id

这个id，在父组件中可以获取到

比如： newsinfo页面中可以通过this.$route.params.id获取到id

newsinfo就需要将这个id传入到评论组件中，这里就涉及到的父子组件的通信

先给品论组件绑定一个属性，在评论组件中声明props接收这个数据，评论组件中就有相应的id了

###加载更多评论的功能

在数据中声明了一个pageIndex

每次请求数据的时候，将pageIndex++就可以获取到下一页的数据

每次请求到新的数据之后，不能直接将原来的数据覆盖，而是，将新数据拼接到旧数据的后面！

Toast提示组件的使用
```javascript
import {Toast} from "mint-ui"

Toast("提示信息")
```
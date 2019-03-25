<template>
  <div class="newsinfo-contaier">
    <h3 class="title">{{newsinfo.title}}</h3>
    <p class="subtitle">
      <span>发表时间：{{newsinfo.add_time | dataFormat}}</span>
      <span>点击：{{newsinfo.click}}次</span>
    </p>

    <hr>

    <div class="content" v-html="newsinfo.content"></div>
    <!-- 评论区 -->
    <comment-box :id="this.id"></comment-box>
  </div>
</template>

<script>
import { Toast } from 'mint-ui';
import comment from '../subcomponents/comment.vue';

export default {
  data() {
    return {
      id:this.$route.params.id,
      newsinfo:{}
    }
  },
  methods: {
    getnewsinfo(){
      this.$http.get('api/getnew/'+this.id).then(result=>{
        if(result.body.status===0){
          this.newsinfo=result.body.message[0];
        }else{
          Toast('加载失败');
        }
      })
    }
  },
  created() {
    this.getnewsinfo();
  },
  components:{
    "comment-box":comment
  }
}
</script>

<style lang="scss">//由于img中的width设置不生效，把scoped去掉即可
.newsinfo-contaier{
  padding: 0 4px;
  .title{
    font-size: 16px;
    text-align: center;
    margin: 15px 0;
    color: red;
  }
  .subtitle{
    font-size: 13px;
    color: #226aff;
    display: flex;
    justify-content: space-between;
  }
  .content{
    img{
      width: 100%;
    }
  }
}
</style>


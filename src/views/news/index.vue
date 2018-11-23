<template>
  <div class="news">
    <my-header-two></my-header-two>
    <div class="top">
      <img src="../../assets/img/news_bj.png" alt="">
      <div class="container">
        <p class="p1">信息公告</p>
        <p class="p2">不错过每一条信贷相关新闻</p>
      </div>
    </div>
    <my-footer></my-footer>
  </div>
</template>

<script>
  import myHeaderTwo from '@/components/myHeaderTwo';
  import myFooter from '@/components/myFooter';
  export default {
    name: 'news',
    components: {
      myHeaderTwo,
      myFooter,
    },
    data () {
      return {

      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .top{
    position: relative;
    .container{
      position: absolute;
      top: 175px;
      right: 0;
      left: 0;
      margin: auto;
      color: #fff;
      letter-spacing: 3px;
      .p1{
        margin-bottom: 35px;
        font-size: 36px;
      }
      .p2{
        font-size: 18px;
      }
    }
  }
</style>

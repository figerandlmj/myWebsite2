<template>
  <div class="about">
    <my-header-two></my-header-two>
    <div class="top">
      <img src="../../assets/img/contact_bg.jpg" alt="">
      <div class="container">
        <p class="p1">关于我们</p>
        <p class="p2">为更多小微企业提供更加高效便捷的融资服务</p>
      </div>
    </div>
    <my-footer></my-footer>
  </div>
</template>

<script>
  import myHeaderTwo from '@/components/myHeaderTwo';
  import myFooter from '@/components/myFooter';
  export default {
    name: 'about',
    components: {
      myHeaderTwo,
      myFooter,
    },
    data () {
      return {
        msg: 'about'
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

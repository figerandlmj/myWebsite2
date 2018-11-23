<template>
  <div class="myHeaderTwo">
    <div class="container">
      <img class="logo" src="../assets/imgs/logo.png" alt="">
      <router-link to="{path: '/'}">返回首页</router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'myHeaderTwo'
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  @import '../assets/css/common';
  .myHeaderTwo{
    width: 100%;
    background: #fff;
    .container{
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 64px;
    }
    .logo{
      width: 122px;
      height: 40px;
    }
    a{
      color: #2272FD;
      font-size: 16px;
    }
  }
</style>

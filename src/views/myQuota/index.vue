<template>
  <div class="myQuota">
    <my-top></my-top>
    <my-header-two></my-header-two>
    <div class="top">
      <img src="../../assets/img/quota-pic_01.jpg" alt="">
      <img src="../../assets/img/quota-pic_02.jpg" alt="">
    </div>
    <div class="main">
      <p class="p1">进行信用审核后，即可查看授权额度</p>
      <div class="pro">
        <p>请选择需要申请的产品</p>
        <ul>
          <li class="cursor active" @click="selectPro($event,'DST_LOANS')">新-电商通</li>
          <li class="cursor" @click="selectPro($event,'KJT_LOANS')">新-跨境通</li>
          <li class="cursor" @click="selectPro($event,'QYT_LOANS')">新-企业通</li>
        </ul>
      </div>
      <div class="btn1">
        <router-link :to="{name: 'apply', params: {productType: productType}}">申请授信</router-link>
        <router-link :to="{name: 'apply', query: {productType: productType}}">申请授信</router-link>
      </div>
      <div class="cursor btn2">
        <router-link :to="{name: 'credit'}">查看记录 ></router-link>
      </div>
    </div>
    <my-footer></my-footer>
  </div>
</template>

<script>
  import myTop from '@/components/myTop';
  import myHeaderTwo from '@/components/myHeaderTwo';
  import myFooter from '@/components/myFooter';
  // import { headerScroll } from '@/assets/js/common'
  export default {
    name: 'myQuota',
    components: {
      myTop,
      myHeaderTwo,
      myFooter,
    },
    data () {
      return {
        productType: 'DST_LOANS'
      }
    },
    mounted() {
      // headerScroll();
    },
    methods: {
      selectPro(e,type) {
        $('.pro li').removeClass('active');
        $(e.target).addClass('active');
        this.productType = type;
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .top{
    height: 880px;
    img{
      width: 100%;
      height: 440px;
    }
  }
  .main{
    position: absolute;
    top: 200px;
    width: 100%;
    height: 100%;
    text-align: center;
    .p1{
      font-size: 40px;
      color: #fff;
    }
    .pro{
      margin: 90px auto 80px;
      font-size: 25px;
      color: #bcbcbc;
      p{
        margin-bottom: 36px;
      }
      li {
        display: inline-block;
        &:nth-of-type(n+2){
          margin-left: 40px;
        }
        &::before{
          display: inline-block;
          width: 20px;
          height: 20px;
          content: '';
          background: #bcbcbc;
          border-radius: 50%;
          margin-right: 10px;
          box-sizing: border-box;
        }
        &.active{
          &::before{
            background: #fff;
            border: 4px solid #fb8802;
          }
        }
      }
    }
    .btn1{
      width: 320px;
      height: 64px;
      line-height: 64px;
      text-align: center;
      background-image: linear-gradient(270deg,#fe8c00,#fac61e);
      border-radius: 32px;
      margin: 0 auto 20px;
      a{
        font-size: 25px;
        color: #fff;
      }
    }
    .btn2{
      a{
        font-size: 18px;
        color: #ff8b00;
      }
    }
  }
</style>

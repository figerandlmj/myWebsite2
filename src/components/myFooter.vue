<template>
  <div class="myFooter">
    <div class="container">
      <div class="left">
        <img src="../assets/imgs/footerLogo.png" alt="">
        <p class="p1">
          <router-link :to="{name: 'about'}">关于我们</router-link>
          <router-link :to="{name: 'news'}">常见问题</router-link>
        </p>
        <p class="p2">
          友情链接：
          <a href="">百度</a>
          <a href=""><span>网贷之家</span></a>
          <a href="">网易</a>
          <a href="">网贷天眼</a>
          <a href="">赢通九洲财经</a>
          <a href="">好爱卡金融</a>
          <a href="">51金融</a>
        </p>
        <p class="p3">公司地址：浙江省杭州市西湖区xxx号xx大厦xxxx室</p>
        <p class="p4">网&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;址：去哪贷 © qunadai.com 浙ICP备15032348号-1 浙ICP证：B2-20170053 版权所有</p>
      </div>
      <div class="right">
        <div class="erweima">
          <img src="../assets/imgs/erweima.png" alt="">
          <span>去哪贷微信</span>
        </div>
        <!-- <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul> -->
      </div>
    </div>
  </div>
  <!-- <div class="myFooter">
    <div class="container">
      <div class="logo">
        <img src="../assets/img/logo_foot.png" alt="">
      </div>
      <div class="left">
        <ul>
          <li><router-link :to="{name: 'about'}">关于我们</router-link></li>
          <li><router-link :to="{name: 'news'}">信息公告</router-link></li>
        </ul>
        <p>
          米今@360mijin.com 浙ICP备17037584号-1 版权所有<br>
          浙江省杭州市滨江区江虹路611号上峰电商产业园2-1幢3楼
        </p>
      </div>
      <div class="right">
        <p class="p1">客服电话</p>
        <p class="p2">400-6690-108</p>
        <p class="p3">( 工作日：09:00-21:00 )</p>
      </div>
    </div>
  </div> -->
</template>

<script>
  export default {
    name: 'myFooter',
    data () {
      return {

      }
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  @import '../assets/css/common';
  .myFooter{
    width: 100%;
    height: 300px;
    background: #262626;
    .container{
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .left{
      img{
        width: 122px;
        height: 38px;
        margin-top: 60px;
      }
      p{
        font-size: 14px;
        color: #fff;
      }
      .p1{
        margin: 30px 0 10px;
        a{
          font-size: 14px;
          color: #7F7F7F;
          &:first-child{
            padding-right: 10px;
          }
        }
      }
      .p2{
        color: #7F7F7F;
        a{
          padding-right: 10px;
          color: #7F7F7F;
        }
        span{
          color: #fff;
        }
      }
      .p3{
        margin: 30px 0 10px;
      }
    }
    .right{
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 90px;
      margin-right: 150px;
      .erweima{
        img{
          display: inline-block;
          width: 96px;
          height: 96px;
          margin-right: 10px;
        }
        font-size: 14px;
        color: #7F7F7F;
      }
      // ul{
      //   margin-top: 40px;
      // }
      // li{
      //   display: inline-block;
      //   height: 28px;
      //   &:nth-of-type(n+2){
      //     margin-left: 10px;
      //   }
      //   &:nth-of-type(1){
      //     width: 84px;
      //     background: url(../assets/imgs/chengxinmoren.png) no-repeat;
      //     &:hover{
      //       background: url(../assets/imgs/chengxinwangzhandianchu.png) no-repeat;
      //     }
      //   }
      //   &:nth-of-type(2){
      //     width: 86px;
      //     background: url(../assets/imgs/360moren.png) no-repeat;
      //     &:hover{
      //       background: url(../assets/imgs/360dianchu.png) no-repeat;
      //     }
      //   }
      //   &:nth-of-type(3){
      //     width: 84px;
      //     background: url(../assets/imgs/beianmoren.png) no-repeat;
      //     &:hover{
      //       background: url(../assets/imgs/beiandianchu.png) no-repeat;
      //     }
      //   }
      //   &:nth-of-type(4){
      //     width: 68px;
      //     background: url(../assets/imgs/nortonmoren.png) no-repeat;
      //     &:hover{
      //       background: url(../assets/imgs/nortondianchu.png) no-repeat;
      //     }
      //   }
      //   &:nth-of-type(5){
      //     width: 116px;
      //     background: url(../assets/imgs/gonganmoren.png) no-repeat;
      //     &:hover{
      //       background: url(../assets/imgs/gongandianchu.png) no-repeat;
      //     }
      //   }
      // }
    }
  }
  // .myFooter{
  //   // position: fixed;
  //   // bottom: 0;
  //   // left: 0;
  //   display: flex;
  //   align-items: center;
  //   width: 100%;
  //   height: 200px;
  //   background: @color4;
  //   .container{
  //     display: flex;
  //     align-items: center;
  //     justify-content: space-between;
  //   }
  //   .logo{
  //     margin-right: -200px;
  //   }
  //   .left{
  //     ul{
  //       margin-bottom: 36px;
  //     }
  //     li{
  //       display: inline-block;
  //       list-style: disc;
  //       color:#fff;
  //     }
  //     li:last-child{
  //       margin-left: 14px;
  //     }
  //     a{
  //       font-size: 14px;
  //       color: #fff;
  //     }
  //     p{
  //       font-size: 14px;
  //       color: #dfdfe2;
  //       line-height: 24px;
  //     }
  //   }
  //   .right{
  //     color: #fff;
  //     .p1{
  //       font-size: 14px;
  //     }
  //     .p2{
  //       margin: 10px 0;
  //       font-size: 25px;
  //     }
  //     .p3{
  //       color: #918ea0;
  //       font-size: 14px;
  //     }
  //   }
  // }
</style>

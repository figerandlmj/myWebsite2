<template>
  <div class="myHeader">
    <div class="head">
      <div class="container">
        <div class="logo">
          <img src="../assets/imgs/logo.png" alt="">
        </div>
        <ul class="nav">
          <li><router-link to="/">首页</router-link></li>
          <li class="cursor" @click="scrollToProduct"><a>我要借款</a></li>
        </ul>
      </div>
    </div>
  </div>
  <!-- <div class="myHeader">
    <div class="container">
      <div class="left">
        <p class="font tel">客服热线：400-6690-108（09:00 ~ 21:00）</p>
        <span class="logo"></span>
      </div>
      <div class="right">
        <p class="font loginTip">
          欢迎来到米今商贷！您好，
          <template v-if="userMobile">
            <span class="userMobile">{{userMobile}}</span>
            <span class="cursor" @click="signOut">退出</span>
          </template>
          <template v-else>
            请 <router-link :to="{name: 'login', query: {redirect: this.$route.path}}">登录</router-link>！
          </template>
        </p>
        <ul class="nav">
          <li><router-link to="/">首页</router-link></li>
          <li><router-link :to="{path: '/quota'}">我的额度</router-link></li>
          <li class="myAccount">
            <router-link :to="{name: 'account'}">
              <i class="icon"></i>
              <span>我的账户</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div> -->
</template>

<script>
  import { exitLogin } from '@/api/login'
  export default {
    name: 'myHeader',
    components:{

    },
    data () {
      return {

      }
    },
    mounted() {
    },
    methods: {
      scrollToProduct() {
        let top = $('#product').offset().top
        $("html,body").animate({scrollTop:top}, 1000);
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  @import '../assets/css/common';
  .myHeader{
    .head{
      width: 100%;
      height: 64px;
      background: #fff;
      .container{
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 64px;
      }
    }
    .logo{
      img{
        width: 122px;
        height: 40px;
      }
    }
    .nav{
      li{
        display: inline-block;
        padding: 8px 16px;
        a{
          color: #2272FD;
          font-size: 14px;
        }
        &:nth-of-type(n+2){
          margin-left: 14px;
        }
        &:last-child{
          a{
            color: #fff;
          }
          border-radius: 4px;
          background: #FB8F25;
        }
      }
    }
  }
  // .myHeader{
  //   position: fixed;
  //   top: 0;
  //   left: 0;
  //   z-index: 10;
  //   width: 100%;
  //   height: 100px;
  //   .container{
  //     display: flex;
  //     align-items: center;
  //     justify-content: space-between;
  //   }
  //   .font{
  //     padding: 10px 0 20px;
  //     font-size: 14px;
  //     color: @color3;
  //   }
  //   .left{
  //     .logo{
  //       display: block;
  //       width:253px;
  //       height:39px;
  //       background: url(../assets/img/small-pics.png) no-repeat;
  //       background-position:0 -265px;
  //     }
  //   }
  //   .right{
  //     .loginTip{
  //       text-align: right;
  //       a{
  //         color: @color3;
  //       }
  //     }
  //     .userMobile{
  //       color: @color;
  //     }
  //   }
  //   .nav{
  //     li{
  //       display: inline-block;
  //     }
  //     li:nth-of-type(n+2) {
  //       margin-left: 44px;
  //     }
  //     a{
  //       display: inline-block;
  //       width: 100%;
  //       height: 100%;
  //       padding: 3px 5px;
  //       box-sizing: border-box;
  //       font-size: 18px;
  //       color: #fff;
  //     }
  //     .router-link-exact-active{
  //       color: @color;
  //       border-bottom: 2px solid @color;
  //     }
  //     .myAccount{
  //       border: 1px solid #fff;
  //       a{
  //         padding: 6px 10px;
  //         border-radius: 2px;
  //       }
  //       .router-link-exact-active{
  //         color: #fff;
  //         border: 1px solid @color;
  //         background: @color;
  //       }
  //       .icon{
  //         position: relative;
  //         top: 3px;
  //         display: inline-block;
  //         width: 20px;
  //         height: 20px;
  //         background: url(../assets/img/user.png) no-repeat;
  //         background-size: 20px 20px;
  //       }
  //     }
  //   }
  // }
  // .myHeaderActive{
  //   background: #fff;
  //   .left{
  //     .logo{
  //       background-position:0 -206px;
  //     }
  //   }
  //   .nav{
  //     a{
  //       color: @color2;
  //     }
  //     .myAccount{
  //       a{
  //         color: #fff;
  //         border: 1px solid @color;
  //         background: @color;
  //       }
  //     }
  //   }
  // }
</style>

<template>
  <div class="index">
    <my-top></my-top>
    <my-header></my-header>
    <el-carousel class="elCarousel" height="420px" :interval="5000" arrow="hover" trigger="click">
      <el-carousel-item>
        <img src="../../assets/imgs/gerenbanner.png" alt="">
        <div class="con">
          <div class="container">
            <p class="p1">个人</p>
            <p class="p2">最高可达￥20万</p>
            <p class="p3">中国籍公民 | 工薪族连续满一年</p>
            <div class="cursor btn" @click="linkToCredit">立即申请</div>
          </div>
        </div>
      </el-carousel-item>
      <el-carousel-item>
        <img src="../../assets/imgs/qiyebanner.png" alt="">
        <div class="con">
          <div class="container">
            <p class="p1">企业</p>
            <p class="p2">最高可达￥100万</p>
            <p class="p3">中小微企业主 | 企业经营满一年</p>
            <div class="cursor btn" @click="linkToCredit">立即申请</div>
          </div>
        </div>
      </el-carousel-item>
      <el-carousel-item>
        <img src="../../assets/imgs/yancaobanner.png" alt="">
        <div class="con">
          <div class="container">
            <p class="p1">烟草</p>
            <p class="p2">最高可达￥100万</p>
            <p class="p3">烟草店铺法人 | 店铺经营满一年</p>
            <div class="cursor btn" @click="linkToCredit">立即申请</div>
          </div>
        </div>
      </el-carousel-item>
    </el-carousel>
    <div class="part1">
      <ul class="container">
        <li>
          <img src="../../assets/imgs/produce_icon1.png" alt="">
        </li>
        <li>
          <img src="../../assets/imgs/produce_icon2.png" alt="">
        </li>
        <li>
          <img src="../../assets/imgs/produce_icon3.png" alt="">
        </li>
        <li>
          <img src="../../assets/imgs/produce_icon4.png" alt="">
        </li>
      </ul>
    </div>
    <div id="product" class="part2">
      <ul class="container">
        <li>
          <span class="img"></span>
          <div class="detail">
            <p class="p1">电商 最高可达100万</p>
            <p class="p2">网店数据 | 一次授信 | 循环授信 | 快速审核</p>
            <p class="p3">
              准入条件：淘宝、天猫、京东等网站主；网店经营时间满一年以上<br>
              所需材料：网店经营流水；网店截图
            </p>
            <div class="cursor btn" @click="linkToCredit">立即查看额度</div>
          </div>
        </li>
        <li>
          <span class="img"></span>
          <div class="detail">
            <p class="p1">外贸电商 最高可达100万</p>
            <p class="p2">网店数据 | 一次授信 | 循环授信 | 快速审核</p>
            <p class="p3">
              <span>准入条件：</span>亚马逊、eBay、速卖通、Wish等平台店主；经营时间满一年及以上<br>
              <span>所需材料：</span>经营场地证明；平台经营流水
            </p>
            <div class="cursor btn" @click="linkToCredit">立即查看额度</div>
          </div>
        </li>
      </ul>
    </div>
    <div class="part3">
      <div class="title">产品特色</div>
      <ul class="container">
        <li>
          <img src="../../assets/imgs/yancao.png" alt="">
          <p class="p1">烟草</p>
          <p class="p2">
            最高可达100万<br>
            烟草店铺法人 | 店铺经营满一年
          </p>
          <div class="cursor btn" @click="linkToCredit">立即查看额度</div>
        </li>
        <li>
          <img src="../../assets/imgs/qiye.png" alt="">
          <p class="p1">企业</p>
          <p class="p2">
            最高可达100万<br>
            中小微企业主 | 企业经营满一年
          </p>
          <div class="cursor btn" @click="linkToCredit">立即查看额度</div>
        </li>
        <li>
          <img src="../../assets/imgs/geren.png" alt="">
          <p class="p1">个人</p>
          <p class="p2">
            最高可达20万<br>
            中国籍公民 | 工薪族连续满一年
          </p>
          <div class="cursor btn" @click="linkToCredit">立即查看额度</div>
        </li>
      </ul>
    </div>
    <div class="part4">
      <div class="title">合作平台</div>
      <ul class="container ul1">
        <li><img src="../../assets/imgs/1.png" alt=""></li>
        <li><img src="../../assets/imgs/2.png" alt=""></li>
        <li><img src="../../assets/imgs/3.png" alt=""></li>
        <li><img src="../../assets/imgs/4.png" alt=""></li>
      </ul>
      <ul class="container ul2">
        <li><img src="../../assets/imgs/5.png" alt=""></li>
        <li><img src="../../assets/imgs/6.png" alt=""></li>
        <li><img src="../../assets/imgs/7.png" alt=""></li>
        <li><img src="../../assets/imgs/8.png" alt=""></li>
      </ul>
    </div>
    <!-- <div class="top">
      <img src="../../assets/img/bannerbj.png" alt="">
    </div>
    <div class="part1">
      <ul class="container">
        <li>
          <img src="../../assets/img/produce_icon1.png" alt="">
          <div class="word">
            <p class="p1">纯信用</p>
            <p>大数据授信，无抵押</p>
          </div>
        </li>
        <li>
          <img src="../../assets/img/produce_icon2.png" alt="">
          <div class="word">
            <p class="p1">额度高</p>
            <p>最高可达100万</p>
          </div>
        </li>
        <li>
          <img src="../../assets/img/produce_icon3.png" alt="">
          <div class="word">
            <p class="p1">放款快</p>
            <p>智能审核，极速放款</p>
          </div>
        </li>
        <li>
          <img src="../../assets/img/produce_icon4.png" alt="">
          <div class="word">
            <p class="p1">利息低</p>
            <p>日息低至万分之2.7</p>
          </div>
        </li>
      </ul>
    </div>
    <div class="part2">
      <ul class="container">
        <li>
          <div class="imgs">
            <img src="../../assets/img/pic_1.png" alt="">
            <div class="words">
              <p class="p1">电商通</p>
              <p class="p2">最高可达100万</p>
              <p class="p3">网店数据 | 一次授信 | 循环授信 | 快速审核</p>
            </div>
          </div>
          <div class="detail">
            <p class="title">准入条件</p>
            <ul>
              <li>淘宝、天猫、京东等网站主</li>
              <li>网店经营时间满一年以上</li>
            </ul>
          </div>
          <div class="detail">
            <p class="title">所需材料</p>
            <ul>
              <li>网店经营流水</li>
              <li>网店截图</li>
            </ul>
          </div>
          <div class="cursor btn" @click="linkToQuota">立即查看额度</div>
        </li>
        <li>
          <div class="imgs">
            <img src="../../assets/img/pic_2.png" alt="">
            <div class="words">
              <p class="p1">外贸电商通</p>
              <p class="p2">最高可达100万</p>
              <p class="p3">网店数据 | 一次授信 | 循环授信 | 快速审核</p>
            </div>
          </div>
          <div class="detail">
            <p class="title">准入条件</p>
            <ul>
              <li>亚马逊、eBay、速卖通、Wish等平台店主</li>
              <li>经营时间满一年及以上</li>
            </ul>
          </div>
          <div class="detail">
            <p class="title">所需材料</p>
            <ul>
              <li>经营场地证明</li>
              <li>平台经营流水</li>
            </ul>
          </div>
          <div class="cursor btn" @click="linkToQuota">立即查看额度</div>
        </li>
      </ul>
    </div>
    <div class="part3">
      <div class="container">
        <div class="title">特色产品</div>
        <ul>
          <li>
            <img src="../../assets/img/pic_3.png" alt="">
            <div class="con">
              <img src="../../assets/img/ico_1.png" alt="">
              <p class="p1">烟草通</p>
              <p class="p2">最高可达100万</p>
              <p class="p3">烟草店铺法人 | 店铺经营满一年</p>
            </div>
            <div class="cursor btn" @click="linkToQuota">立即查看额度</div>
          </li>
          <li>
            <img src="../../assets/img/pic_4.png" alt="">
            <div class="con">
              <img src="../../assets/img/ico_2.png" alt="">
              <p class="p1">企业通</p>
              <p class="p2">最高可达100万</p>
              <p class="p3">烟草店铺法人 | 店铺经营满一年</p>
            </div>
            <div class="cursor btn" @click="linkToQuota">立即查看额度</div>
          </li>
          <li>
            <img src="../../assets/img/pic_5.png" alt="">
            <div class="con">
              <img src="../../assets/img/ico_3.png" alt="">
              <p class="p1">物流通</p>
              <p class="p2">最高可达100万</p>
              <p class="p3">烟草店铺法人 | 店铺经营满一年</p>
            </div>
            <div class="cursor btn" @click="linkToQuota">立即查看额度</div>
          </li>
        </ul>
      </div>
    </div>
    <div class="part4">
      <div class="container">
        <div class="title">常见问题</div>
        <ul>
          <li>
            <div class="question">米今科技借款申请审核需要多久?</div>
            <div class="answer">提交后，会通过智能审核系统急速审批。若资料不全，需人工审核，请保持手机通畅,便于随时与您联络。</div>
          </li>
          <li>
            <div class="question">米今科技借款申请审核需要多久?</div>
            <div class="answer">提交后，会通过智能审核系统急速审批。若资料不全，需人工审核，请保持手机通畅,便于随时与您联络。</div>
          </li>
        </ul>
      </div>
    </div>
    <div class="part5">
      <div class="container">
        <div class="title">合作平台</div>
        <ul>
          <li><img src="../../assets/img/partner_1.png" alt=""></li>
          <li><img src="../../assets/img/partner_2.png" alt=""></li>
          <li><img src="../../assets/img/partner_3.png" alt=""></li>
          <li><img src="../../assets/img/partner_4.png" alt=""></li>
          <li><img src="../../assets/img/partner_5.png" alt=""></li>
          <li><img src="../../assets/img/partner_6.png" alt=""></li>
        </ul>
      </div>
    </div> -->
    <my-footer></my-footer>
  </div>
</template>

<script>
  import myTop from '@/components/myTop';
  import myHeader from '@/components/myHeader';
  import myFooter from '@/components/myFooter';
  // import { headerScroll } from '@/assets/js/common'
  export default {
    name: 'index',
    components: {
      myTop,
      myHeader,
      myFooter,
    },
    data () {
      return {

      }
    },
    mounted() {
      $("html,body").animate({scrollTop:0},0);
      // headerScroll();
    },
    methods: {
      linkToCredit() {
        this.$router.push({
          name: 'credit',
        });
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .el-carousel__arrow--left{
    left: 6%!important;
  }
  .el-carousel__arrow--right{
    right: 6%!important;
  }
</style>
<style lang="less" scoped>
  .elCarousel{
    .con{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
    }
    .container{
      color: #fff;
      p{
        margin-left: 122px;
      }
    }
    .p1{
      font-size: 35px;
    }
    .p2{
      margin: 16px 0 16px;
      padding-left: 10px;
      font-size: 40px;
    }
    .p3{
      padding-left: 10px;
      font-size: 25px;
    }
    .btn{
      width: 166px;
      height: 48px;
      margin-top: 26px;
      margin-left: 122px;
      line-height: 48px;
      text-align: center;
      color: #2974F7;
      font-size: 26px;
      border-radius: 30px;
      background: #fff;
      &:hover{
        color: #fff;
        background: #2974F7;
      }
    }
  }
  .part1{
    display: flex;
    align-items: center;
    width: 100%;
    height: 148px;
    background: #F8F8F8;
    .container{
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    li{
      img{
        width: 192px;
        height: 48px;
      }
    }
  }
  .part2{
    padding: 70px 0;
    background: #fff;
    .container{
      display: flex;
      align-items: center;
    }
    li{
      position: relative;
      width: 590px;
      height: 366px;
      border-radius: 4px;
      box-shadow: 0 4px 6px #f7f3f3;
      transition: all .2s ease-in-out;
      &:nth-of-type(n+2){
        margin-left: 20px;
      }
      .img{
        display: block;
        width: 100%;
        height: 184px;
        background: url(../../assets/imgs/dianshangmoren.png) no-repeat;
        background-size: 100% 184px;
      }
      .detail{
        position: absolute;
        bottom: 0;
        left: 0;
        z-index: 10;
        width: 100%;
        padding-left: 30px;
        padding-bottom: 28px;
        box-sizing: border-box;
      }
      .p1{
        margin: 40px 0 18px;
        color: #333;
        font-size: 18px;
      }
      .p2{
        color: #999;
        font-size: 14px;
      }
      .p3{
        display: none;
        margin-top: 20px;
        font-size: 14px;
        color: #fff;
        line-height: 26px;
        span{
          color: #B4CFFF;
        }
      }
      .btn{
        width: 116px;
        height: 38px;
        margin-top: 20px;
        line-height: 38px;
        color: #4586F7;
        font-size: 14px;
        text-align: center;
        border-radius: 30px;
        background: #F9F9F9;
      }
      &:hover{
        .detail{
          background: #2974F7;
          opacity: .9;
        }
        .p1{
          color: #fff;
        }
        .p2{
          color: #B4CFFF;
        }
        .p3{
          display: block;
        }
        .btn{
          background: #fff;
        }
      }
      &:first-child{
        &:hover{
          .img{
            height: 100%;
            background: url(../../assets/imgs/dianshangdianchu.png) no-repeat;
          }
        }
      }
      &:last-child{
        .img{
          background: url(../../assets/imgs/waimaomoren.png) no-repeat;
        }
        &:hover{
          .img{
            height: 100%;
            background: url(../../assets/imgs/waimaodianchu.png) no-repeat;
          }
        }
      }
    }
  }
  .part3{
    padding-bottom: 70px;
    background: #fff;
    .title{
      padding-bottom: 35px;
      font-size: 24px;
      color: #666;
      text-align: center;
    }
    .container{
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    li{
      width: 386px;
      height: 464px;
      background: #F8F8F8;
      border-radius: 4px;
      box-shadow: 0 4px 6px #f7f3f3;
      &:hover{
        background: #fff;
        .btn{
          color: #fff;
          background: #2974F7;
        }
      }
    }
    img{
      width: 100%;
      height: 274px;
    }
    p{
      padding-left: 28px;
    }
    .p1{
      margin-top: 26px;
      font-size: 18px;
      color: #333;
    }
    .p2{
      margin-top: 10px;
      font-size: 14px;
      color: #999;
      line-height: 25px;
    }
    .btn{
      width: 116px;
      height: 38px;
      line-height: 38px;
      margin-left: 28px;
      margin-top: 20px;
      text-align: center;
      border-radius: 30px;
      font-size: 14px;
      color: #2974F7;
      background: #fff;
    }
  }
  .part4{
    padding-bottom: 70px;
    background: #fff;
    .title{
      padding-bottom: 35px;
      font-size: 24px;
      color: #666;
      text-align: center;
    }
    .container{
      display: flex;
      align-items: center;
      justify-content: space-around;
      background: #F8F8F8;
      border-radius: 4px;
    }
    .ul1{
      padding: 54px 0 66px;
    }
    .ul2{
      padding-bottom: 54px;
    }
  }

  // .top{
  //   width: 100%;
  //   height: 520px;
  //   img{
  //     width: 100%;
  //     height: 100%;
  //   }
  // }
  // .part1{
  //   display: flex;
  //   align-items: center;
  //   width: 100%;
  //   height: 142px;
  //   background: #fff;
  //   .container{
  //     display: flex;
  //     align-items: center;
  //     justify-content: space-between;
  //   }
  //   li{
  //     display: flex;
  //     align-items: center;
  //     img{
  //       width: 108px;
  //       height: 108px;
  //     }
  //     .word{
  //       font-size: 14px;
  //       color: #6d6c72;
  //     }
  //     .p1{
  //       margin-bottom: 10px;
  //       font-size: 20px;
  //       color: #000;
  //       font-weight: 700;
  //     }
  //   }
  // }
  // .part2{
  //   background: #dadce1;
  //   .container{
  //     display: flex;
  //     width: 1000px;
  //     align-items: center;
  //     margin: 0 auto;
  //     padding: 70px 0;
  //     >li{
  //       width: 400px;
  //       height: 540px;
  //       background: #fff;
  //       transition: .3s;
  //       &:hover{
  //         box-shadow: 0 6px 10px #ccc;
  //       }
  //     }
  //     >li:nth-of-type(n+2){
  //       margin-left: 200px;
  //     }
  //   }
  //   .imgs{
  //     position: relative;
  //     .words{
  //       position: absolute;
  //       top: 60px;
  //       left: 35px;
  //       color: #fff;
  //     }
  //     .p1{
  //       font-size: 32px;
  //       font-weight: 400;
  //       &::after{
  //         display: block;
  //         width: 35px;
  //         height: 5px;
  //         margin-top: 12px;
  //         background: #f29900;
  //         content: '';
  //       }
  //     }
  //     .p2{
  //       margin-top: 20px;
  //       color: #eee;
  //       font-size: 20px;
  //       &::before,
  //       &::after{
  //         display: inline-block;
  //         width:11px;
  //         height:17px;
  //         content: '';
  //         background: url(../../assets/img/small-pics.png) no-repeat;
  //         background-position:-128px -442px;
  //       }
  //       &::before{
  //         padding-right: 10px;
  //       }
  //       &::after{
  //         margin-left: 10px;
  //       }
  //     }
  //     .p3{
  //       margin-top: 10px;
  //       color: #ddd;
  //       font-size: 16px;
  //     }
  //   }
  //   img{
  //     width: 400px;
  //     height: 240px;
  //   }
  //   .detail{
  //     margin: 30px 0 0 30px;
  //     .title{
  //       position: relative;
  //       color: #f29900;
  //       font-size: 20px;
  //       font-weight: 700;
  //       &::before{
  //         position: absolute;
  //         top: -4px;
  //         left: -15px;
  //         display: inline-block;
  //         width: 30px;
  //         height: 30px;
  //         content: '';
  //         background: rgba(253,144,0,.2);
  //         border-radius: 50%;
  //       }
  //     }
  //     ul{
  //       margin: 8px 0 0 18px;
  //     }
  //     li{
  //       list-style: circle;
  //       font-size: 16px;
  //       color: #848484;
  //     }
  //     li:nth-of-type(n+2){
  //       margin-top: 2px;
  //     }
  //   }
  //   .btn{
  //     width: 175px;
  //     height: 45px;
  //     margin: 20px auto 0;
  //     font-size: 16px;
  //     color: #ff8b03;
  //     text-align: center;
  //     line-height: 42px;
  //     border-radius: 22px;
  //     border: 1px solid #ff8b03;
  //     transition: all .2s;
  //     &:hover{
  //       border: none;
  //       color: #fff;
  //       box-shadow: 10px 10px 10px rgba(251,127,34,.4);
  //       background-image: linear-gradient(270deg,#fe8c00,#fac61e);
  //     }
  //   }
  // }
  // .part3{
  //   .container{
  //     width: 100%;
  //     margin: 20px auto;
  //     .title{
  //       padding: 15px 0 30px;
  //       font-size: 30px;
  //       color: #424242;
  //       text-align: center;
  //     }
  //   }
  //   ul{
  //     display: flex;
  //     align-items: center;
  //   }
  //   li{
  //     position: relative;
  //     flex: 1;
  //     height: 350px;
  //     overflow: hidden;
  //     & >img{
  //       width: 100%;
  //       height: 100%;
  //       transition: all .3s;
  //     }
  //     .con{
  //       position: absolute;
  //       top: 0;
  //       left: 0;
  //       width: 100%;
  //       height: 100%;
  //       text-align: center;
  //       img{
  //         display: inline-block;
  //         width: 78px;
  //         height: 78px;
  //         margin-top: 50px;
  //       }
  //       .p1{
  //         margin-top: 20px;
  //         font-size: 32px;
  //         color: #fff;
  //         font-weight: 400;
  //       }
  //       .p2{
  //         margin-top: 20px;
  //         color: #eee;
  //         font-size: 20px;
  //         &::before,
  //         &::after{
  //           display: inline-block;
  //           width:11px;
  //           height:17px;
  //           content: '';
  //           background: url(../../assets/img/small-pics.png) no-repeat;
  //           background-position:-128px -442px;
  //         }
  //         &::before{
  //           padding-right: 10px;
  //         }
  //         &::after{
  //           margin-left: 10px;
  //         }
  //       }
  //       .p3{
  //         margin-top: 10px;
  //         color: #ddd;
  //         font-size: 16px;
  //       }
  //     }
  //     .btn{
  //       position: absolute;
  //       bottom: -45px;
  //       left:0;
  //       width: 100%;
  //       height: 45px;
  //       line-height: 45px;
  //       font-size: 16px;
  //       color: #fff;
  //       text-align: center;
  //       background-image: linear-gradient(270deg,#fe8c00,#fac61e);
  //       transition: all .3s ease-in-out;
  //     }
  //     &:hover{
  //       & >img{
  //         transform: scale(1.4);
  //       }
  //       .btn{
  //         bottom: 0;
  //       }
  //     }
  //   }
  // }
  // .part4{
  //   .container{
  //     margin: 60px auto;
  //     padding-bottom: 100px;
  //     background: #fff;
  //   }
  //   .title{
  //     font-size: 30px;
  //     color: #282828;
  //     padding: 30px 0 0 25px;
  //     font-weight: 400;
  //   }
  //   li{
  //     padding: 30px 0 20px;
  //     margin: 0 60px;
  //     &:nth-of-type(n+2) {
  //       border-top: 1px dashed #898989;
  //     }
  //     >div{
  //       display: flex;
  //       align-items: center;
  //     }
  //   }
  //   .question{
  //     font-size: 18px;
  //     color: #282828;
  //     font-weight: 700;
  //     &::before{
  //       display: inline-block;
  //       width:23px;
  //       height:23px;
  //       margin-right: 10px;
  //       content: '';
  //       background: url(../../assets/img/small-pics.png) no-repeat;
  //       background-position:0 -443px;
  //     }
  //   }
  //   .answer{
  //     margin-top: 10px;
  //     font-size: 14px;
  //     color: #898989;
  //     &::before{
  //       display: inline-block;
  //       width:23px;
  //       height:23px;
  //       margin-right: 10px;
  //       content: '';
  //       background: url(../../assets/img/small-pics.png) no-repeat;
  //       background-position:-42px -443px;
  //     }
  //   }
  // }
  // .part5{
  //   width: 100%;
  //   background: #fff;
  //   .title{
  //     font-size: 30px;
  //     color: #282828;
  //     padding: 30px 0 0 25px;
  //     font-weight: 400;
  //     text-align: center;
  //   }
  //   ul{
  //     display: flex;
  //     align-items: center;
  //     justify-content: space-between;
  //     padding: 50px 0;
  //   }
  //   img{
  //     width: 139px;
  //     height: 55px;
  //   }
  // }
</style>


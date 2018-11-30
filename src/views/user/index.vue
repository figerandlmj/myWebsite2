<template>
  <div class="user">
    <my-top></my-top>
    <my-header-two></my-header-two>
    <!-- <my-header class="myHeaderActive"></my-header> -->
    <div class="myCount">
      <div class="container">
        <div class="left">
          <img src="../../assets/img/user.png" alt="">
          <div>
            <p class="p1">
              <!-- 18268127297 -->
              {{userMobile.replace(/^(\w{3})(\w{4})(\w*)$/, '$1****$3') || '××××'}}
            </p>
            <p class="p2"><router-link :to="{name: 'setPassword'}">修改登录密码>></router-link></p>
            <p class="p3">
              上次登录时间：
              <span>
                <!-- 2018-06-20 13:08:00 -->
                {{lastlogintime || '××××'}}
              </span>
            </p>
          </div>
        </div>
        <div class="right">
          <div class="cursor btn" @click="isShowDialog = true">我的额度</div>
        </div>
      </div>
    </div>
    <div class="navTag">
      <ul class="container">
        <li><router-link :to="{name: 'credit'}">我的借款</router-link></li>
        <!-- <li><router-link :to="{name: 'account'}">我的账户</router-link></li>
        <li><router-link :to="{name: 'asset'}">资金管理</router-link></li> -->
      </ul>
    </div>
    <div class="main">
      <div class="container">
        <router-view></router-view>
      </div>
    </div>
    <!-- 贷款产品弹框 -->
    <el-dialog title="请选择需要申请的产品" :visible.sync="isShowDialog" :before-close="closed">
      <ul class="products">
        <li class="cursor" @click="selectPro($event, 0)">
          <img src="../../assets/imgs/dianshangdianchu.png" alt="">
          <div class="word">
            <p class="p1">电商</p>
            <p class="p2">最高可达100万</p>
            <p class="p3">网店数据 | 一次授信 | 循环授信 | 快速审核</p>
          </div>
        </li>
        <li class="cursor" @click="selectPro($event, 1)">
          <img src="../../assets/imgs/waimaodianchu.png" alt="">
          <div class="word">
            <p class="p1">外贸电商</p>
            <p class="p2">最高可达100万</p>
            <p class="p3">网店数据 | 一次授信 | 循环授信 | 快速审核</p>
          </div>
        </li>
        <li class="cursor" @click="selectPro($event, 2)">
          <img src="../../assets/imgs/yancao.png" alt="">
          <div class="word">
            <p class="p1">烟草</p>
            <p class="p2">最高可达100万</p>
            <p class="p3">烟草店铺法人 | 店铺经营满一年</p>
          </div>
        </li>
        <li class="cursor" @click="selectPro($event, 3)">
          <img src="../../assets/imgs/qiye.png" alt="">
          <div class="word">
            <p class="p1">企业</p>
            <p class="p2">最高可达100万</p>
            <p class="p3">中小微企业主 | 企业经营满一年</p>
          </div>
        </li>
        <li class="cursor" @click="selectPro($event, 4)">
          <img src="../../assets/imgs/geren.png" alt="">
          <div class="word">
            <p class="p1">个人</p>
            <p class="p2">最高可达20万</p>
            <p class="p3">中国籍公民 | 工薪族连续满一年</p>
          </div>
        </li>
      </ul>
      <div slot="footer" class="dialog-footer">
        <el-button @click="closed">取 消</el-button>
        <el-button type="primary" @click="linkToApply">确 定</el-button>
      </div>
    </el-dialog>
    <my-footer></my-footer>
  </div>
</template>

<script>
  // import myHeader from '@/components/myHeader';
  import myTop from '@/components/myTop';
  import myHeaderTwo from '@/components/myHeaderTwo';
  import myFooter from '@/components/myFooter';
  export default {
    name: 'user',
    components: {
      myTop,
      myHeaderTwo,
      // myHeader,
      myFooter,
    },
    data () {
      return {
        userMobile: '',//用户手机号
        lastlogintime: '',//上次登录时间
        isShowDialog: false,//是否显示贷款产品弹框
        productType: '',//产品类型
      }
    },
    mounted() {
      $("html,body").animate({scrollTop:0},0);
      this.userMobile = localStorage.getItem('userMobile') || '';
      this.lastlogintime = localStorage.getItem('lastlogintime') || '';
      // this.userMobile = this.$store.state.userMobile
      // this.lastlogintime = this.$store.state.lastlogintime
    },
    methods: {
      // 点击确定，跳转贷款申请页
      linkToApply() {
        if(this.productType === '') {
          this.$message({
            message: '请选择一种贷款产品！',
            type: 'warning'
          });
        }else{
          this.$router.push({
            name: 'apply',
            query: {productType: this.productType}
          });
        }
      },
      // 选择贷款产品
      selectPro(e,type) {
        $('.products li').removeClass('active').eq(type).addClass('active');
        this.productType = type;
      },
      closed(){
        $('.products li').removeClass('active');
        this.productType = '';
        this.isShowDialog = false;
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .el-dialog{
    width: 800px;
  }
</style>

<style lang="less" scoped>
  @import '../../assets/css/common';
  .myCount{
    display: flex;
    align-items: center;
    width: 100%;
    height: 90px;
    margin-top: 4px;
    background: #fff;
    .container{
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-left: 30px;
    }
    img{
      width: 50px;
      height: 50px;
      margin-right: 10px;
      background: #ccc;
      border-radius: 50%;
    }
    .left{
      display: flex;
      align-items: center;
    }
    .p1{
      font-size: 14px;
      color: #000;
    }
    .p2{
      margin-bottom: 2px;
      padding-left: 10px;
      a{
        font-size: 12px;
        color: #FB8F25;
      }
    }
    .p3{
      font-size: 12px;
      color: #ccc;
    }
    .right{
      margin-right: 300px;
      .btn{
        width: 100px;
        height: 40px;
        line-height: 40px;
        font-size: 14px;
        color: #fff;
        text-align: center;
        border-radius: 6px;
        background: #169BD5;
      }
    }
  }
  .navTag{
    display: flex;
    align-items: center;
    width: 100%;
    height: 60px;
    margin-top: 1px;
    background: #fff;
    .container{
      display: flex;
      align-items: center;
      padding-left: 30px;
    }
    li{
      &:nth-of-type(n+2) {
        margin-left: 10px;
      }
      a{
        display: inline-block;
        padding: 6px 14px;
        font-size: 14px;
        /*color: #fff;*/
        /*border-radius: 4px;*/
        /*background: #169BD5;*/
        color: #169BD5;
        background: #fff;
        border: 1px solid #169BD5;
      }
    }
  }
  .main{
    width: 100%;
    margin-top: 6px;
    padding-bottom: 10px;
    .container{
      min-height: 500px;
      padding: 30px;
      box-sizing: border-box;
      border-radius: 4px;
      box-shadow: 0 4px 6px #f7f3f3;
      background: #fff;
    }
  }
  .el-button{
    padding: 12px 20px;
  }
  .products{
    display: flex;
    align-items: center;
    justify-content: space-between;
    li{
      position: relative;
      width: 140px;
      height: 160px;
      img{
        width: 100%;
        height: 100%;
      }
      .word{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        padding: 10px;
        box-sizing: border-box;
        font-size: 12px;
        color: rgba(255,255,255,.9);
      }
      .p1{
        margin-top: 20px;
        font-size: 18px;
      }
      .p2{
        margin: 10px 0;
        font-size: 15px;
      }
      &:hover,
      &.active{
        .word{
          color: rgba(255,255,255,1);
          background: rgba(0,0,0,.7);
        }
      }
    }
  }

</style>

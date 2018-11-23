<template>
<div class="myTop">
  <div class="container">
    <template v-if="userMobile">
      <div class="signOut">
        <span class="userMobile">{{userMobile.replace(/^(\w{3})(\w{4})(\w*)$/, '$1****$3')}}</span>
        <span class="cursor" @click="signOut">退出</span>
      </div>
    </template>
    <template v-else>
      <router-link :to="{name: 'login', query: {redirect: this.$route.path, isRegister: true}}">注册</router-link>
      <router-link :to="{name: 'login', query: {redirect: this.$route.path, isRegister: false}}">登录</router-link>
    </template>
  </div>
</div>
</template>

<script>
  import { islogin, exitLogin } from '@/api/login'
  export default {
    name: 'myTop',
    data () {
      return {
        userMobile: '',//用户手机号
      }
    },
    created() {
      this.userMobile = localStorage.getItem('userMobile') || '';
      if(this.userMobile.length === 11) {
        // 是否登录
        islogin({username: this.userMobile}).then(response => {
          const code = response.code;
          if(code === 200) {
            console.log('已登录')
          }else if(code === 500) {
            console.log('未登录')
            this.userMobile = '';
            localStorage.removeItem('userMobile');
            this.$router.push({
              name: 'login',
              query: {redirect: this.$route.path, isRegister: false}
            });
          }else{
            console.log(response.msg);
          }
        }).catch(error => {
          console.log(error);
        })
      }
    },
    mounted() {

    },
    methods: {
      // 退出登录
      signOut() {
        // exitLogin({username: this.userMobile}).then(response => {
        //   const code = response.code;
        //   if(code === 200) {
        //     this.$store.dispatch('logout').then(() => {
              this.userMobile = '';
              localStorage.removeItem('userMobile');
              location.reload();
        //     })
        //   }else{
        //     console.log(response.msg);
        //   }
        // }).catch(error => {
        //   console.log(error);
        // })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  @import '../assets/css/common';
  .myTop{
    width: 100%;
    height: 32px;
    line-height: 32px;
    background: #262626;
    a{
      float: right;
      color: #fff;
      font-size: 12px;
      &:first-child{
        padding-left: 10px;
        padding-right: 2px;
      }
    }
    .signOut{
      float: right;
      color: #fff;
      font-size: 12px;
      .userMobile{
        padding-right: 10px;
        color: #FB8F25;
      }
    }
  }
</style>

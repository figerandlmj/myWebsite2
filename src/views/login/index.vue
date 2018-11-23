<template>
  <div class="login">
    <my-header-two class="fixed"></my-header-two>
    <!-- <div class="top">
      <div class="container">
        <span class="logo"></span>
        <router-link to="{path: '/'}">返回首页</router-link>
      </div>
    </div> -->
    <div class="main">
      <div class="bg">
        <img src="../../assets/imgs/login_bg.png" alt="">
      </div>
      <div class="container">
        <!-- 短信验证码登录 -->
        <!-- <template v-if="formType === 'codeLogin'">
          <el-form
            :model="loginForm"
            :rules="loginRules"
            ref="loginForm"
            class="loginForm">
            <div class="title">欢迎登录米今商贷</div>
            <el-form-item label="" prop="phone">
              <el-input v-model="loginForm.phone" placeholder="请输入手机号"></el-input>
            </el-form-item>
            <el-form-item label="" prop="password">
              <el-input  class="password" v-model="loginForm.password" placeholder="请输入验证码" autocomplete="off"></el-input>
              <span class="cursor getCode">获取短信验证码</span>
            </el-form-item>
            <div class="cursor changeLoginStyle" @click="formType = 'passwordLogin'">密码登录</div>
            <el-form-item>
              <el-button class="loginBtn" type="primary" @click="submitForm('loginForm')">登录</el-button>
            </el-form-item>
            <div class="registerWrap">
              没有账号？<span class="cursor" @click="formType = 'register'">注册</span>
            </div>
          </el-form>
        </template> -->
        <!-- 密码登录 -->
        <el-form v-show="formType === 'passwordLogin'"
          :model="loginForm2"
          :rules="loginRules2"
          ref="loginForm2"
          class="loginForm passwordLogin">
          <div class="title">欢迎登录去哪贷</div>
          <el-form-item label="" prop="username">
            <el-input v-model="loginForm2.username" placeholder="请输入手机号" maxlength="11" type="text"></el-input>
          </el-form-item>
          <el-form-item label="" prop="password">
            <el-input v-model="loginForm2.password" type="password" placeholder="请输入密码" autocomplete="off" minlength="6" maxlength="20"></el-input>
          </el-form-item>
          <div class="changeLoginStyle">
            <!-- <span class="cursor" @click="formType = 'codeLogin'">短信快捷登录</span> -->
            <span class="cursor" @click="resetForm('loginForm2', 'forgetPassword')">忘记登录密码？</span>
          </div>
          <el-form-item>
            <el-button class="loginBtn" type="primary" @click="submitForm('loginForm2')">登录</el-button>
          </el-form-item>
          <div class="registerWrap">
            没有账号？<span class="cursor" @click="resetForm('loginForm2', 'register')">免费注册</span>
          </div>
        </el-form>
        <!-- 注册 -->
        <el-form v-show="formType === 'register'"
          :model="loginForm3"
          :rules="loginRules3"
          ref="loginForm3"
          class="loginForm">
          <div class="title">欢迎注册去哪贷</div>
          <el-form-item label="" :error="usernameError" prop="username">
            <el-input v-model="loginForm3.username" placeholder="请输入手机号" maxlength="11" type="text"></el-input>
          </el-form-item>
          <el-form-item label="" prop="code">
            <el-input  class="password" v-model="loginForm3.code" placeholder="请输入验证码" autocomplete="off" type="text"></el-input>
            <span v-if="showTimeDown" class="cursor getCode timeDown">{{timeDown}}s</span>
            <span v-else class="cursor getCode" @click="getMsgCode(1)">获取短信验证码</span>
          </el-form-item>
          <el-form-item label="" prop="password">
            <el-input v-model="loginForm3.password" type="password" placeholder="请输入密码" autocomplete="off" minlength="6" maxlength="20"></el-input>
          </el-form-item>
          <el-form-item label="" prop="confirm">
            <el-input v-model="loginForm3.confirm" type="password" placeholder="请确认密码" autocomplete="off" minlength="6" maxlength="20"></el-input>
          </el-form-item>
          <el-form-item class="xieyi">
            <el-checkbox label="我已阅读并同意" v-model="checked"></el-checkbox>
            <a href="">《去哪贷注册协议》</a>
          </el-form-item>
          <el-form-item>
            <el-button class="loginBtn" type="primary" @click="submitForm('loginForm3')">注册</el-button>
          </el-form-item>
          <div class="registerWrap">
            已有账号？<span class="cursor" @click="resetForm('loginForm3', 'passwordLogin')">登录</span>
          </div>
        </el-form>
        <!-- 忘记密码 -->
        <el-form  v-show="formType === 'forgetPassword'"
          :model="loginForm4"
          :rules="loginRules4"
          ref="loginForm4"
          class="loginForm">
          <div class="title">忘记密码</div>
          <el-form-item label="" :error="usernameError" prop="username">
            <el-input v-model="loginForm4.username" placeholder="请输入手机号" maxlength="11" type="text"></el-input>
          </el-form-item>
          <el-form-item label="" prop="code">
            <el-input  class="password" v-model="loginForm4.code" placeholder="请输入验证码" autocomplete="off" type="text"></el-input>
            <span v-if="showTimeDown" class="cursor getCode timeDown">{{timeDown}}s</span>
            <span v-else class="cursor getCode" @click="getMsgCode(2)">获取短信验证码</span>
          </el-form-item>
          <el-form-item label="" prop="newpwd">
            <el-input v-model="loginForm4.newpwd" type="password" placeholder="请输入密码" autocomplete="off" minlength="6" maxlength="20"></el-input>
          </el-form-item>
          <el-form-item label="" prop="confirm">
            <el-input v-model="loginForm4.confirm" type="password" placeholder="请确认密码" autocomplete="off" minlength="6" maxlength="20"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button class="loginBtn" type="primary" @click="submitForm('loginForm4')">提交</el-button>
          </el-form-item>
          <el-form-item>
            <el-button class="loginBtn returnBtn" type="primary" @click="resetForm('loginForm4', 'passwordLogin')">返回</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <my-footer></my-footer>
  </div>
</template>

<script>
  import myHeaderTwo from '@/components/myHeaderTwo';
  import myFooter from '@/components/myFooter';
  import { isregister, getcode, register, login, resetpwd } from '@/api/login'
  export default {
    name: 'login',
    components: {
      myHeaderTwo,
      myFooter
    },
    data () {
      // 手机号验证函数
      let validateUsername = (rule, value, callback) => {
        if (!/^1(3|4|5|7|8)\d{9}$/.test(value)) {
          callback(new Error('请输入正确的手机号'));
        } else{
          // 判断手机号是否注册
          if(this.isToRigister) {
            isregister({username: value}).then(response => {
              const code = response.code;
              if (code === 200) {
                if(this.currentLoginFormName === 'loginForm3') {
                  callback(new Error('该账号已注册，请登录'));
                }else{
                  callback()
                  this.isGetCode = true;
                }
              } if(code === 201) {
                callback(new Error('该账号存在异常'));
              } else if(code === 500){
                if(this.currentLoginFormName === 'loginForm2') {
                  callback(new Error('该账号未注册，请注册'));
                }else{
                  callback()
                  this.isGetCode = true;
                }
              } else{
                callback(new Error(response.msg));
              }
            }).catch(error => {
              console.log(error);
            })
          }
          // callback()
        }
      };
      // 密码验证函数
      let validatePass = (rule, value, callback) => {
        // alert(JSON.stringify(this.currentLoginFormName))
        // alert(JSON.stringify(this.currentLoginForm))
        if (value === '') {
          callback(new Error('请输入密码'));
        } else if (value.length < 6 || value.length > 20) {
          callback(new Error('请输入6-20位数字加字母的密码'));
        } else if (/^\d+$/.test(value)) {
          callback(new Error('请输入6-20位数字加字母的密码'));
        } else if (/^[a-zA-Z]+$/i.test(value)) {
          callback(new Error('请输入6-20位数字加字母的密码'));
        } else if (!/^[a-zA-Z0-9]+$/.test(value)) {
          callback(new Error('请输入6-20位数字加字母的密码'));
        } else {
          if (this.currentLoginForm.confirm && this.currentLoginForm.confirm !== '') {
            this.$refs[this.currentLoginFormName].validateField('confirm');
          }
          callback();
        }
      };
      // 确认密码验证函数
      let validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请确认密码'));
        } else if ((this.currentLoginFormName ==='loginForm3' && value !== this.currentLoginForm.password) || (this.currentLoginFormName ==='loginForm4' && value !== this.currentLoginForm.newpwd)) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        formType: 'passwordLogin',
        checked: false,//是否接受注册协议
        usernameError: '',//注册时手机号填写错误信息
        showTimeDown: false,//是否显示倒计时
        timeDown: 60,// 倒计时60s
        currentLoginForm: this.loginForm2,//当前表单数据
        currentLoginFormName: 'loginForm2',//当前表单ref
        isGetCode: false,//是否可以获取短信验证码
        isToRigister: true,// 是否校验是否注册接口
        // 短信验证码登录
        // loginForm: {
        //   phone: '',
        //   password: ''
        // },
        // loginRules: {
        //   phone: [
        //     { required: true, message: '请输入手机号码', trigger: 'blur' }
        //   ],
        //   password: [
        //     { required: true, message: '请输入密码', trigger: 'blur' }
        //   ]
        // },
        // 密码登录
        loginForm2: {
          username: '',
          password: ''
        },
        loginRules2: {
          username: [
            { required: true, message: '请输入手机号', trigger: 'blur' },
            { validator: validateUsername, trigger: 'blur' }
          ],
          password: [
            { validator: validatePass, trigger: 'blur' }
          ]
        },
        // 注册
        loginForm3: {
          username: '',
          code: '',
          password: '',
          confirm: ''
        },
        loginRules3: {
          username: [
            { required: true, message: '请输入手机号', trigger: 'blur' },
            { validator: validateUsername, trigger: 'blur' }
          ],
          code: [
            { required: true, message: '请输入验证码', trigger: 'blur' }
          ],
          password: [
            { validator: validatePass, trigger: 'blur' }
          ],
          confirm: [
            { validator: validatePass2, trigger: 'blur' }
          ]
        },
        // 忘记密码
        loginForm4: {
          username: '',
          code: '',
          newpwd: '',
          confirm: ''
        },
        loginRules4: {
          username: [
            { required: true, message: '请输入手机号', trigger: 'blur' },
            { validator: validateUsername, trigger: 'blur' }
          ],
          code: [
            { required: true, message: '请输入验证码', trigger: 'blur' }
          ],
          newpwd: [
            { validator: validatePass, trigger: 'blur' }
          ],
          confirm: [
            { validator: validatePass2, trigger: 'blur' }
          ]
        }
      }
    },
    mounted() {
      $("html,body").animate({scrollTop:0},0);
      let isRouteRegister = this.$route.query.isRegister
      if(isRouteRegister === true || isRouteRegister === 'true') {
        this.resetForm('loginForm2', 'register', true)
      }else{
        this.resetForm('loginForm3', 'passwordLogin', true)
      }
    },
    methods: {
      // 倒计时60s
      timeDown60(){
        this.showTimeDown = true;
        let interval = setInterval(() => {
          this.timeDown --;
          if(this.timeDown <= 0) {
            clearInterval(interval);
            this.showTimeDown = false;
          }
        }, 1000);
      },
      // 重置表单passwordLogin register forgetPassword
      resetForm(fromFormName, toFormType, flag) {
        this.isToRigister = flag || false;
        this.$refs[fromFormName].resetFields();//重置表单并移除校验结果
        this.formType = toFormType;
        this.currentLoginForm = toFormType === 'passwordLogin' ? this.loginForm2 : toFormType === 'register' ? this.loginForm3 : this.loginForm4
        this.currentLoginFormName = toFormType === 'passwordLogin' ? 'loginForm2' : toFormType === 'register' ? 'loginForm3' : 'loginForm4'
        this.isToRigister = true;
      },
      // 获取短信验证码
      getMsgCode(type) {
        let username = '';
        if(type === 1) {//注册
          username = this.loginForm3.username
        }else if(type === 2) {//忘记密码
          username = this.loginForm4.username
        }
        if(username === '') {
          this.usernameError = '请输入手机号'
          return
        } else if(!this.isGetCode) {
          return
        }
        getcode({
          mobile: username,
          type: type,
        }).then(response => {
          const code = response.code;
          if(code === 200) {
            console.log('获取验证码成功')
            // 倒计时60s
            this.timeDown60();
          }else{
            console.log(response.msg);
          }
        }).catch(error => {
          console.log(error);
        })
      },
      // submit提交事件
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          console.log(formName)
          if (valid) {
            if(formName === 'loginForm2') {
              // 登录
              login(this.loginForm2).then(response => {
                const code = response.code;
                if(code === 200) {
                  localStorage.setItem('userMobile', response.data.username);
                  localStorage.setItem('lastlogintime', response.data.lastlogintime);
                  this.$message('登录成功');
                  location.href = '#' + (this.$route.query.redirect || '/')
                  // this.$store.dispatch('login', response.data).then(() => {
                  //   this.$message('登录成功');
                  //   location.href = '#' + (this.$route.query.redirect || '/')
                  // })
                }else if(code === 500){
                  this.$message('用户名或密码错误');
                }else if(code === 501){
                  this.$message('密码输错五次，请隔24小时之后再登录');
                }else{
                  console.log(response.msg);
                }
              }).catch(error => {
                console.log(error);
              })
            }else if(formName === 'loginForm3') {
              if(!this.checked) {
                this.$message('请同意注册协议');
                return false;
              }
              // 注册
              register(this.loginForm3).then(response => {
                const code = response.code;
                if(code === 200) {
                  this.$message('注册成功,请登录');
                  this.resetForm('loginForm3', 'passwordLogin')
                }else{
                  console.log(response.msg);
                }
              }).catch(error => {
                console.log(error);
              })
            }else if(formName === 'loginForm4') {
              // 忘记密码
              resetpwd(this.loginForm4).then(response => {
                const code = response.code;
                if(code === 200) {
                  this.$message('密码重置成功,请登录');
                  this.resetForm('loginForm4', 'passwordLogin')
                }else if(code === 500){
                  this.$message('两次密码输入不一致，请重新输入');
                }else if(code === 501){
                  this.$message('无效的验证码');
                }else{
                  console.log(response.msg);
                }
              }).catch(error => {
                console.log(error);
              })
            }
          } else {
            return false;
          }
        });
      },
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .el-checkbox__label{
    font-size: 12px;
  }
</style>

<style lang="less" scoped>
  @import '../../assets/css/common';
  // .top{
  //   position: fixed;
  //   top: 0;
  //   left: 0;
  //   z-index: 10;
  //   width: 100%;
  //   height: 60px;
  //   background: @color2;
  //   .container{
  //     display: flex;
  //     align-items: center;
  //     justify-content: space-between;
  //   }
  //   .logo{
  //     display: block;
  //     width:253px;
  //     height:39px;
  //     margin-top: 10px;
  //     background: url(../../assets/img/small-pics.png) no-repeat;
  //     background-position:0 -265px;
  //   }
  //   a{
  //     display: block;
  //     margin-top: 10px;
  //     color: #fff;
  //   }
  // }
  .fixed{
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    opacity: .9;
  }
  .main{
    position: relative;
    .bg{
      img{
        width: 100%;
        height: 100vh;
      }
    }
    .container{
      position: absolute;
      top: 50%;
      left: 0;
      right: 0;
      margin: auto;
      transform: translate3d(0,-50%,0);
    }
  }
  .loginForm{
    float: right;
    width: 350px;
    padding: 30px 30px 20px;
    margin-top: 64px;
    background: #fff;
    .title{
      margin-bottom: 20px;
      font-size: 18px;
      color: @color2;
    }
    .el-form-item{
      margin-top: 20px;
    }
    .el-input{
      // border: 1px solid #ddd;
      border-radius: 2px;
    }
    input{
      width: 100%;
      padding: 10px 20px;
      box-sizing: border-box;
      background: #fff;
      border: 0;
    }
    .password{
      width: 60%;
    }
    .getCode{
      display: inline-block;
      width: 38%;
      background: #ff9c00;
      color: #fff;
      font-size: 14px;
      text-align: center;
      border-radius: 2px;
    }
    .timeDown{
      background: #ddd;
    }
    .changeLoginStyle{
      margin-top: 24px;
      font-size: 14px;
      color: #ff9c00;
    }
    .loginBtn{
      width: 100%;
      height: 40px;
      line-height: 40px;
      font-size: 16px;
      margin: 0 auto 10px;
      border-radius: 3px;
      background: #ff9c00;
      color: #fff;
      text-align: center;
      letter-spacing: 10px;
      border: 0;
    }
    .registerWrap{
      text-align: center;
      color: #757575;
      font-size: 14px;
      span{
        color: #ff9c00;
      }
    }
    .xieyi{
      a{
        font-size: 12px;
        color: #ff9c00;
      }
    }
    .returnBtn{
      color: #757575;
      border: 1px solid #c9c9c9;
      background: #ddd;
    }
  }
  .passwordLogin{
    .password{
      width: 100%;
    }
    .changeLoginStyle{
      // display: flex;
      // align-items: center;
      // justify-content: space-between;
      text-align: right;
    }
  }
</style>

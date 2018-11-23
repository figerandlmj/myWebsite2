<template>
  <div class="setPassword">
    <el-form
      :model="loginForm"
      :rules="loginRules"
      label-width="100px"
      ref="loginForm"
      class="loginForm">
      <el-form-item label="原密码：" prop="oldpwd">
        <el-input v-model="loginForm.oldpwd" type="password" placeholder="请输入原密码" autocomplete="off" minlength="6" maxlength="20"></el-input>
      </el-form-item>
      <el-form-item label="新密码：" prop="newpwd">
        <el-input v-model="loginForm.newpwd" type="password" placeholder="请输入新密码" autocomplete="off" minlength="6" maxlength="20"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="confirm">
        <el-input v-model="loginForm.confirm" type="password" placeholder="请确认密码" autocomplete="off" minlength="6" maxlength="20"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button class="loginBtn" type="primary" @click="submitForm('loginForm')">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import { changepwd } from '@/api/login'
  export default {
    name: 'setPassword',
    components: {

    },
    data () {
      // 原密码验证函数
      let validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入原密码'));
        } else {
          if (this.loginForm.newpwd !== '') {
            this.$refs['loginForm'].validateField('newpwd');
          }
          callback();
        }
      };
      // 新密码验证函数
      let validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入新密码'));
        } else if (value === this.loginForm.oldpwd) {
          callback(new Error('新密码与原密码相同!'));
        } else {
          callback();
        }
      };
      // 确认密码验证函数
      let validatePass3 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请确认密码'));
        } else if (value !== this.loginForm.newpwd) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        loginForm: {
          oldpwd: '',
          newpwd: '',
          confirm: ''
        },
        loginRules: {
          oldpwd: [
            { validator: validatePass, trigger: 'blur' }
          ],
          newpwd: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          confirm: [
            { validator: validatePass3, trigger: 'blur' }
          ]
        },
      }
    },
    mounted() {

    },
    methods: {
      // submit提交事件
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            // 修改密码
            changepwd(this.loginForm).then(response => {
              const code = response.code;
              if(code === 200) {
                this.$message('密码修改成功');
                this.$refs['loginForm'].resetFields();//重置表单并移除校验结果
              }else if(code === 500){
                this.$message('两次密码输入不一致，请重新输入');
              }else if(code === 501){
                this.$message('原密码错误');
              }else{
                console.log(response.msg);
              }
            }).catch(error => {
              console.log(error);
            })
          } else {
            return false;
          }
        });
      },
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="less" scoped>
  @import '../../../assets/css/common';
  .setPassword{
    width: 500px;
    margin: 30px auto 0;
    .el-form-item{
      margin-bottom: 20px;
    }
    .el-button--primary{
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
</style>

<template>
  <div class="apply">
    <my-top></my-top>
    <my-header-two></my-header-two>
    <div class="step">
      <div class="container">
        <ul>
          <template v-if="step >= 0">
            <li class="active">
              <span class="img img1"></span>
              <p>申请</p>
            </li>
            <li v-if="step >= 1">
              <span class="arrow arrowActive"></span>
            </li>
            <li v-else>
              <span class="arrow"></span>
            </li>
          </template>
          <template v-else>
            <li>
              <span class="img img1"></span>
              <p>申请</p>
            </li>
            <li>
              <span class="arrow"></span>
            </li>
          </template>
          <template v-if="step >= 1">
            <li class="active">
              <span class="img img2"></span>
              <p>基本信息</p>
            </li>
            <li v-if="step >= 2">
              <span class="arrow arrowActive"></span>
            </li>
            <li v-else>
              <span class="arrow"></span>
            </li>
          </template>
          <template v-else>
            <li>
              <span class="img img2"></span>
              <p>基本信息</p>
            </li>
            <li v-if="step >= 3">
              <span class="arrow arrowActive"></span>
            </li>
            <li v-else>
              <span class="arrow"></span>
            </li>
          </template>
          <li :class="step >= 2 ? 'active' : ''">
            <span class="img img3"></span>
            <p>补充信息</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="main">
      <div class="container">
        <div class="step1" v-show="step === 0">
          <div class="title">{{title[productType]}}</div>
          <el-form
            :model="step1Form"
            :rules="step1Rules"
            ref="step1Form"
            label-width="120px"
            class="step1Form">
            <el-form-item label="申请授信金额" prop="appamount">
              <el-input type="text" v-model.appamount="step1Form.appamount" autocomplete="off" :placeholder="'额度范围' + appamountRange[productType]"></el-input>
            </el-form-item>
            <el-form-item class="xieyi">
              <el-checkbox label="我已阅读并同意" v-model="checked"></el-checkbox>
              <a href="">《用户协议》</a>和<a href="">《风险提示》</a>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('step1Form')">下一步</el-button>
            </el-form-item>
          </el-form>
        </div>
        <div class="step2" v-show="step === 1">
          <el-form
            :model="step2Form"
            :rules="step2Rules"
            ref="step2Form"
            label-width="140px"
            class="step2Form">
            <el-form-item label="真实姓名：" prop="name">
              <el-input type="text" v-model.name="step2Form.name" autocomplete="off" placeholder="请输入真实姓名"></el-input>
            </el-form-item>
            <el-form-item label="手机号码：">
              <el-input type="text" v-model="step1Form.username.replace(/^(\w{3})(\w{4})(\w*)$/, '$1****$3')" :disabled="true"></el-input>
            </el-form-item>
            <el-form-item label="身份证号" prop="idcard">
              <el-input type="text" v-model.idcard="step2Form.idcard" autocomplete="off" placeholder="请输入身份证号"></el-input>
            </el-form-item>
            <el-form-item label="婚姻状况" prop="marriage">
              <el-select v-model="step2Form.marriage" placeholder="请选择婚姻状况">
                <el-option label="未婚" value="0"></el-option>
                <el-option label="已婚" value="1"></el-option>
                <el-option label="离异" value="2"></el-option>
                <el-option label="丧偶" value="3"></el-option>
              </el-select>
            </el-form-item>
            <div class="wrap">
              <el-form-item label="亲属姓名" prop="relative">
                <el-input type="text" v-model.relative="step2Form.relative" autocomplete="off" placeholder="请输入亲属姓名"></el-input>
              </el-form-item>
              <el-form-item label="关系" prop="relativestype">
                <el-select v-model="step2Form.relativestype" placeholder="请选择关系">
                  <el-option label="父亲" value="0"></el-option>
                  <el-option label="母亲" value="1"></el-option>
                  <el-option label="兄弟姐妹" value="2"></el-option>
                  <el-option label="配偶" value="3"></el-option>
                  <el-option label="子女" value="4"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="手机号码" prop="relativesphone">
                <el-input type="text" v-model.relativesphone="step2Form.relativesphone" autocomplete="off" maxlength="11" placeholder="请输入手机号码"></el-input>
              </el-form-item>
            </div>
            <div class="wrap">
              <el-form-item label="其他联系人姓名" prop="otherrelative">
                <el-input type="text" v-model.otherrelative="step2Form.otherrelative" autocomplete="off" placeholder="请输入其他联系人姓名"></el-input>
              </el-form-item>
              <el-form-item label="关系" prop="otherrelativestype">
                <el-select v-model="step2Form.otherrelativestype" placeholder="请选择关系">
                  <el-option label="同事" value="0"></el-option>
                  <el-option label="同学" value="1"></el-option>
                  <el-option label="朋友" value="2"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="手机号码" prop="otherrelativesphone">
                <el-input type="text" v-model.otherrelativesphone="step2Form.otherrelativesphone" autocomplete="off" maxlength="11" placeholder="请输入手机号码"></el-input>
              </el-form-item>
            </div>
            <el-form-item label="实际经营地址" prop="address">
              <el-input type="text" v-model.address="step2Form.address" autocomplete="off" placeholder="请精确到门牌号"></el-input>
            </el-form-item>
            <el-form-item label="店铺（企业）名称" prop="merchantname">
              <el-input type="text" v-model.merchantname="step2Form.merchantname" autocomplete="off" placeholder="请输入营业执照上名称"></el-input>
            </el-form-item>
            <el-form-item label="所属行业" prop="industry">
              <el-input type="text" v-model.industry="step2Form.industry" autocomplete="off" placeholder="请输入所属行业"></el-input>
            </el-form-item>
            <el-form-item label="年收入（万元）" prop="income">
              <el-input type="text" v-model.income="step2Form.income" autocomplete="off" placeholder="请输入年收入"></el-input>
            </el-form-item>
            <el-form-item label="借款用途" prop="usefor">
              <el-select v-model="step2Form.usefor" placeholder="请选择借款用途">
                <el-option label="企业经营" value="企业经营"></el-option>
                <el-option label="企业资金周转" value="企业资金周转"></el-option>
                <el-option label="采购商品" value="采购商品"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="还款来源" prop="repayfrom">
              <el-select v-model="step2Form.repayfrom" placeholder="请选择还款来源">
                <el-option label="租金收益" value="租金收益"></el-option>
                <el-option label="企业营业收入" value="企业营业收入"></el-option>
                <el-option label="店铺销售收入" value="店铺销售收入"></el-option>
              </el-select>
            </el-form-item>

            <el-form-item v-if="productType === 4" label="公积金账户" prop="fundaccount">
              <el-input type="text" v-model.fundaccount="step2Form.fundaccount" autocomplete="off" placeholder="请输入公积金账户"></el-input>
            </el-form-item>
            <el-form-item v-if="productType === 4" label="公积金账户密码" prop="fundpwd">
              <el-input type="password" v-model.fundpwd="step2Form.fundpwd" autocomplete="off" placeholder="请输入公积金账户密码"></el-input>
            </el-form-item>

            <el-form-item>
              <el-button type="primary" @click="submitForm('step2Form')">下一步</el-button>
              <el-button @click="returnForm('step2Form')">返回</el-button>
            </el-form-item>
          </el-form>
        </div>
        <div class="step3" v-show="step === 2">
          <el-form
            :model="step3Form"
            :rules="step3Rules"
            ref="step3Form"
            label-width="120px"
            class="step3Form">
            <el-form-item label="身份证正面照" prop="idcardfront">
              <el-input type="hidden" v-model.idcardfront="step3Form.idcardfront" autocomplete="off"></el-input>
              <el-upload
                class="avatar-uploader"
                :action="imgUrl"
                :show-file-list="false"
                :before-upload="beforeAvatarUpload"
                :on-success="handleAvatarSuccess">
                <img v-if="step3Form.idcardfront" :src="step3Form.idcardfront" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                <div class="el-upload__tip" slot="tip">注：支持png、pdf、jpg、jpeg，单张大小不超过10M，最多上传1张</div>
              </el-upload>
            </el-form-item>
            <el-form-item label="身份证正反照" prop="idcardback">
              <el-input type="hidden" v-model.idcardback="step3Form.idcardback" autocomplete="off"></el-input>
              <el-upload
                class="avatar-uploader"
                :action="imgUrl"
                :show-file-list="false"
                :before-upload="beforeAvatarUpload"
                :on-success="handleAvatarSuccess2">
                <img v-if="step3Form.idcardback" :src="step3Form.idcardback" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                <div class="el-upload__tip" slot="tip">注：支持png、pdf、jpg、jpeg，单张大小不超过10M，最多上传1张</div>
              </el-upload>
            </el-form-item>
            <el-form-item label="手持身份证照" prop="withidcard">
              <el-input type="hidden" v-model.withidcard="step3Form.withidcard" autocomplete="off"></el-input>
              <el-upload
                class="avatar-uploader"
                :action="imgUrl"
                :show-file-list="false"
                :before-upload="beforeAvatarUpload"
                :on-success="handleAvatarSuccess3">
                <img v-if="step3Form.withidcard" :src="step3Form.withidcard" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                <div class="el-upload__tip" slot="tip">注：支持png、pdf、jpg、jpeg，单张大小不超过10M，最多上传1张</div>
              </el-upload>
            </el-form-item>
            <el-form-item v-if="productType !== 4" label="营业执照/淘宝店铺截图" prop="businesslicense">
              <el-input type="hidden" v-model.businesslicense="step3Form.businesslicense" autocomplete="off"></el-input>
              <el-upload
                class="avatar-uploader"
                :action="imgUrl"
                :show-file-list="false"
                :before-upload="beforeAvatarUpload"
                :on-success="handleAvatarSuccess4">
                <img v-if="step3Form.businesslicense" :src="step3Form.businesslicense" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                <div class="el-upload__tip" slot="tip">注：支持png、pdf、jpg、jpeg，单张大小不超过10M，最多上传1张</div>
              </el-upload>
            </el-form-item>
            <el-form-item v-if="productType === 4" label="公积金账号密码证明" prop="fund">
              <el-input type="hidden" v-model.fund="step3Form.fund" autocomplete="off"></el-input>
              <el-upload
                class="avatar-uploader"
                :action="imgUrl"
                :show-file-list="false"
                :before-upload="beforeAvatarUpload"
                :on-success="handleAvatarSuccess5">
                <img v-if="step3Form.fund" :src="step3Form.fund" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                <div class="el-upload__tip" slot="tip">注：支持png、pdf、jpg、jpeg，单张大小不超过10M，最多上传1张</div>
              </el-upload>
            </el-form-item>
            <el-form-item v-if="productType !== 4" label="经营地证明" prop="businessaddress">
              <el-input type="hidden" v-model.businessaddress="step3Form.businessaddress" autocomplete="off"></el-input>
              <el-upload
                class="listUpload"
                :action="imgUrl"
                list-type="picture-card"
                :before-upload="beforeAvatarUpload"
                :on-success="handleListSuccess"
                :limit="4"
                :on-remove="handleRemove">
                <i class="el-icon-plus"></i>
              </el-upload>
            </el-form-item>
            <el-form-item label="人行报告" prop="credit">
              <el-input type="hidden" v-model.credit="step3Form.credit" autocomplete="off"></el-input>
              <el-upload
                class="listUpload2"
                :action="imgUrl"
                list-type="picture-card"
                :before-upload="beforeAvatarUpload"
                :on-success="handleListSuccess2"
                :limit="5"
                :on-remove="handleRemove2">
                <i class="el-icon-plus"></i>
              </el-upload>
            </el-form-item>
            <el-form-item v-if="productType === 3" label="开票记录" prop="tiket">
              <el-input type="hidden" v-model.tiket="step3Form.tiket" autocomplete="off"></el-input>
              <el-upload
                class="listUpload3"
                :action="imgUrl"
                list-type="picture-card"
                :before-upload="beforeAvatarUpload"
                :on-success="handleListSuccess3"
                :limit="10"
                :on-remove="handleRemove3">
                <i class="el-icon-plus"></i>
              </el-upload>
            </el-form-item>
            <el-form-item v-if="productType === 2" label="进烟流水" prop="purchase">
              <el-input type="hidden" v-model.purchase="step3Form.purchase" autocomplete="off"></el-input>
              <el-upload
                class="listUpload4"
                :action="imgUrl"
                list-type="picture-card"
                :before-upload="beforeAvatarUpload"
                :on-success="handleListSuccess4"
                :limit="10"
                :on-remove="handleRemove4">
                <i class="el-icon-plus"></i>
              </el-upload>
            </el-form-item>
            <el-form-item v-if="productType === 4" label="个人流水" prop="personal">
              <el-input type="hidden" v-model.personal="step3Form.personal" autocomplete="off"></el-input>
              <el-upload
                class="listUpload5"
                :action="imgUrl"
                list-type="picture-card"
                :before-upload="beforeAvatarUpload"
                :on-success="handleListSuccess5"
                :limit="10"
                :on-remove="handleRemove5">
                <i class="el-icon-plus"></i>
              </el-upload>
            </el-form-item>
            <el-form-item v-if="productType === 4" label="保单" prop="policy">
              <el-input type="hidden" v-model.policy="step3Form.policy" autocomplete="off"></el-input>
              <el-upload
                class="listUpload6"
                :action="imgUrl"
                list-type="picture-card"
                :before-upload="beforeAvatarUpload"
                :on-success="handleListSuccess6"
                :limit="10"
                :on-remove="handleRemove6">
                <i class="el-icon-plus"></i>
              </el-upload>
            </el-form-item>
            <el-form-item label="其他资料" prop="other">
              <el-input type="hidden" v-model.other="step3Form.other" autocomplete="off"></el-input>
              <el-upload
                class="listUpload7"
                :action="imgUrl"
                list-type="picture-card"
                :before-upload="beforeAvatarUpload"
                :on-success="handleListSuccess7"
                :limit="10"
                :on-remove="handleRemove7">
                <i class="el-icon-plus"></i>
              </el-upload>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('step3Form')">立即申请</el-button>
              <el-button @click="returnForm('step3Form')">返回</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
    <my-footer></my-footer>
  </div>
</template>

<script>
  import { imgUpload, apply } from '@/api/login'
  import myTop from '@/components/myTop';
  import myHeaderTwo from '@/components/myHeaderTwo';
  // import myHeader from '@/components/myHeader';
  import myFooter from '@/components/myFooter';
  export default {
    name: 'apply',
    components: {
      myTop,
      myHeaderTwo,
      // myHeader,
      myFooter,
    },
    data () {
      // 申请额度验证函数
      let validateAppamount = (rule, value, callback) => {
        let appamountRangeArr = this.appamountRange[this.productType].split('-')
        let minAppamount = appamountRangeArr[0]
        let maxAppamount = appamountRangeArr[1]
        if(!/^([1-9][0-9]*)+(.[0-9]{1,2})?$/.test(value)){// 非零开头的最多带两位小数的数字
          callback(new Error('请输入正确的申请额度'));
        }else if(parseFloat(value) < minAppamount || parseFloat(value) > maxAppamount) {
          callback(new Error('申请额度不在额度范围内'));
        } else {
          callback();
        }
      };
      // 手机号验证函数
      let validatePhone = (rule, value, callback) => {
        if (!/^1(3|4|5|7|8)\d{9}$/.test(value)) {
          callback(new Error('请输入正确的手机号'));
        } else{
          callback();
        }
      };
      // 身份证号验证函数
      let validateIdcard = (rule, value, callback) => {
        if (!/^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/.test(value)) {
          callback(new Error('请输入正确的身份证号'));
        } else{
          callback();
        }
      };
      // 年收入验证函数
      let validateIncome = (rule, value, callback) => {
        if(!/^([1-9][0-9]*)+(.[0-9]{1,2})?$/.test(value)){// 非零开头的最多带两位小数的数字
          callback(new Error('请输入正确的年收入'));
        } else {
          callback();
        }
      };
      return {
        productType: 0,//产品类型
        title: ['电商', '外贸电商', '烟草', '企业', '个人'],//产品名称
        appamountRange:['10000-1000000', '10000-1000000', '10000-1000000', '10000-1000000', '10000-200000'],//额度范围
        step: 0,//步骤
        checked: false,//是否同意协议
        imgUrl: imgUpload(),//图片上传地址
        // 第一步
        step1Form: {
          project: '',//项目名称
          username: '',//账号
          appamount: '',//申请额度
        },
        step1Rules: {
          appamount: [
            { required: true, message: '请输入申请额度', trigger: 'blur'},
            { validator: validateAppamount, trigger: 'blur' }
          ]
        },
        // 第二步
        step2Form: {
          name: '',
          // phone: '',
          idcard: '',
          marriage: '',
          relative: '',
          relativestype: '',
          relativesphone: '',
          otherrelative: '',
          otherrelativestype: '',
          otherrelativesphone: '',
          address: '',
          merchantname: '',
          industry: '',
          income: '',
          usefor: '',
          repayfrom: '',
          fundaccount: '',
          fundpwd: '',
        },
        step2Rules: {
          name: [
            { required: true, message: '请输入真实姓名', trigger: 'blur'}
          ],
          // phone: [
          //   { required: true, message: '请输入手机号码', trigger: 'blur'},
          //   { validator: validatePhone, trigger: 'blur' }
          // ],
          idcard: [
            { required: true, message: '请输入身份证号', trigger: 'blur'},
            { validator: validateIdcard, trigger: 'blur' }
          ],
          marriage: [
            { required: true, message: '请选择婚姻状况', trigger: 'blur'}
          ],
          relative: [
            { required: true, message: '请输入亲属姓名', trigger: 'blur'}
          ],
          relativestype: [
            { required: true, message: '请选择亲属关系', trigger: 'blur'}
          ],
          relativesphone: [
            { required: true, message: '请输入亲属手机号', trigger: 'blur'},
            { validator: validatePhone, trigger: 'blur' }
          ],
          otherrelative: [
            { required: true, message: '请输入其他联系人姓名', trigger: 'blur'}
          ],
          otherrelativestype: [
            { required: true, message: '请选择其他联系人关系', trigger: 'blur'}
          ],
          otherrelativesphone: [
            { required: true, message: '请输入其他联系人电话', trigger: 'blur'},
            { validator: validatePhone, trigger: 'blur' }
          ],
          address: [
            { required: true, message: '请输入经营地址/工作地址', trigger: 'blur'}
          ],
          merchantname: [
            { required: true, message: '请输入单位或者店铺名称', trigger: 'blur'}
          ],
          industry: [
            { required: true, message: '请输入行业', trigger: 'blur'}
          ],
          income: [
            { required: true, message: '请输入年收入', trigger: 'blur'},
            { validator: validateIncome, trigger: 'blur' }
          ],
          usefor: [
            { required: true, message: '请选择借款用途', trigger: 'blur'}
          ],
          repayfrom: [
            { required: true, message: '请选择还款来源', trigger: 'blur'}
          ],
          fundaccount: [
            { required: true, message: '请输入公积金账户', trigger: 'blur'}
          ],
          fundpwd: [
            { required: true, message: '请输入公积金密码', trigger: 'blur'}
          ]
        },
        // 第三步
        fileList: [],//营业地址证明4张（个人没有该项）
        fileList2: [],//人行报告5张
        fileList3: [],//开票记录10张（只有企业申请有）
        fileList4: [],//进烟流水10张（只有烟草有）
        fileList5: [],//个人流水10张（只有烟草有）
        fileList6: [],//保单4张（只有个人有）
        fileList7: [],//其他10张
        step3Form: {
          idcardfront: '',
          idcardback: '',
          withidcard: '',
          businesslicense: '',
          fund: '',
          businessaddress: '',
          credit: '',
          tiket: '',
          purchase: '',
          personal: '',
          policy: '',
          other: ''
        },
        step3Rules: {
          idcardfront: [
            { required: true, message: '请上传身份证正面照', trigger: 'blur'}
          ],
          idcardback: [
            { required: true, message: '请上传身份证正反照', trigger: 'blur'}
          ],
          withidcard: [
            { required: true, message: '请上传手持身份证照', trigger: 'blur'}
          ],
          businesslicense: [
            { required: true, message: '请上传营业执照', trigger: 'blur'}
          ],
          fund: [
            { required: true, message: '请上传公积金账号密码证明', trigger: 'blur'}
          ],
          businessaddress: [
            { required: true, message: '请上传营业地址证明', trigger: 'blur'}
          ],
          credit: [
            { required: true, message: '请上传人行报告', trigger: 'blur'}
          ],
          tiket: [
            { required: true, message: '请上传开票记录', trigger: 'blur'}
          ],
          purchase: [
            { required: true, message: '请上传进烟流水', trigger: 'blur'}
          ],
          personal: [
            { required: true, message: '请上传个人流水', trigger: 'blur'}
          ],
          policy: [
            { required: true, message: '请上传保单', trigger: 'blur'}
          ]
        },
      }
    },
    created() {
      this.step1Form.project = this.title[this.productType]
      this.step1Form.username = localStorage.getItem('userMobile') || ''
      // this.step1Form.username = this.$store.state.userMobile || ''
    },
    mounted(){
      $("html,body").animate({scrollTop:0},0);
      // this.productType = this.$route.params.productType
      this.productType = parseInt(this.$route.query.productType)
    },
    // watch:{
    //   $route(to, from) {
    //     console.log(to,from)
    //   }
    // },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            if(formName === 'step1Form') {
              if(!this.checked) {
                this.$message('请同意用户协议和风险提示');
                return
              }
              this.step = 1;
            }else if(formName === 'step2Form') {
              this.step = 2;
            }else if(formName === 'step3Form') {
              //  申请
              let obj = Object.assign(this.step1Form, this.step2Form, this.step3Form);
              apply(obj).then(response => {
                const code = response.code;
                if(code === 200) {
                  this.$message('申请成功');
                  location.href = '#' + (this.$route.query.redirect || '/')
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
      returnForm(formName) {
        if(formName === 'step2Form') {
          this.step = 0;
        }else if(formName === 'step3Form') {
          this.step = 1;
        }
      },
      //上传文件之前的钩子，参数为上传的文件
      beforeAvatarUpload(file) {
        const isJPG = /^image\/(jpeg|png|jpg|pdf)$/.test(file.type);
        const isLt10M = file.size / 1024 / 1024  < 10;

        if (!isJPG) {
          this.$message.error('上传图片只能是png/jpg/jpeg/pdf格式!');
        }
        if (!isLt10M) {
          this.$message.error('上传图片大小不能超过10MB!');
        }
        return isJPG && isLt10M;
      },
      // 文件上传成功时的钩子
      //身份证正面
      handleAvatarSuccess(response, file) {
        // console.log(response)
        // console.log(URL.createObjectURL(file.raw))
        // this.step3Form.idcardfront = URL.createObjectURL(file.raw);
        if(response.code === 200) {
          this.step3Form.idcardfront = response.msg;
        }else{
          this.$message.error('上传失败!');
        }
        // console.log(this.step3Form.idcardfront)
      },
      //身份证反面
      handleAvatarSuccess2(response, file) {
        // this.step3Form.idcardback = URL.createObjectURL(file.raw);
        if(response.code === 200) {
          this.step3Form.idcardback = response.msg;
        }else{
          this.$message.error('上传失败!');
        }
      },
      // 手持身份证
      handleAvatarSuccess3(response, file) {
        // this.step3Form.withidcard = URL.createObjectURL(file.raw);
        if(response.code === 200) {
          this.step3Form.withidcard = response.msg;
        }else{
          this.$message.error('上传失败!');
        }
      },
      //营业执照（个人没有该项）
      handleAvatarSuccess4(response, file) {
        // this.step3Form.businesslicense = URL.createObjectURL(file.raw);
        if(response.code === 200) {
          this.step3Form.businesslicense = response.msg;
        }else{
          this.$message.error('上传失败!');
        }
      },
      //公积金账号密码证明1张（只有个人有）
      handleAvatarSuccess5(response, file) {
        // this.step3Form.fund = URL.createObjectURL(file.raw);
        if(response.code === 200) {
          this.step3Form.fund = response.msg;
        }else{
          this.$message.error('上传失败!');
        }
      },
      //多张图片上传
      //营业地址证明4张（个人没有该项）
      handleListSuccess(response, file) {
        console.log(response)
        // this.fileList.push(URL.createObjectURL(file.raw))
        // this.step3Form.businessaddress = this.fileList.join(',');
        if(response.code === 200) {
          this.fileList.push(response.msg)
          this.step3Form.businessaddress = this.fileList.join(',');
        }else{
          this.$message.error('上传失败!');
        }
        if(this.fileList.length === 4) {
          $('.listUpload .el-upload').hide()
        }
      },
      //人行报告5张
      handleListSuccess2(response, file) {
        // this.fileList2.push(URL.createObjectURL(file.raw))
        // this.step3Form.credit = this.fileList2.join(',');
        if(response.code === 200) {
          this.fileList2.push(response.msg)
          this.step3Form.credit = this.fileList2.join(',');
        }else{
          this.$message.error('上传失败!');
        }
        if(this.fileList2.length === 5) {
          $('.listUpload2 .el-upload').hide()
        }
      },
      //开票记录10张（只有企业申请有）
      handleListSuccess3(response, file) {
        // this.fileList3.push(URL.createObjectURL(file.raw))
        // this.step3Form.tiket = this.fileList3.join(',');
        if(response.code === 200) {
          this.fileList3.push(response.msg)
          this.step3Form.tiket = this.fileList3.join(',');
        }else{
          this.$message.error('上传失败!');
        }
        if(this.fileList3.length === 10) {
          $('.listUpload3 .el-upload').hide()
        }
      },
      //进烟流水10张（只有烟草有）
      handleListSuccess4(response, file) {
        // this.fileList4.push(URL.createObjectURL(file.raw))
        // this.step3Form.purchase = this.fileList4.join(',');
        if(response.code === 200) {
          this.fileList4.push(response.msg)
          this.step3Form.purchase = this.fileList4.join(',');
        }else{
          this.$message.error('上传失败!');
        }
        if(this.fileList4.length === 10) {
          $('.listUpload4 .el-upload').hide()
        }
      },
      //个人流水10张（只有烟草有）
      handleListSuccess5(response, file) {
        // this.fileList5.push(URL.createObjectURL(file.raw))
        // this.step3Form.personal = this.fileList5.join(',');
        if(response.code === 200) {
          this.fileList5.push(response.msg)
          this.step3Form.personal = this.fileList5.join(',');
        }else{
          this.$message.error('上传失败!');
        }
        if(this.fileList5.length === 10) {
          $('.listUpload5 .el-upload').hide()
        }
      },
      //保单4张（只有个人有）
      handleListSuccess6(response, file) {
        // this.fileList6.push(URL.createObjectURL(file.raw))
        // this.step3Form.policy = this.fileList6.join(',');
        if(response.code === 200) {
          this.fileList6.push(response.msg)
          this.step3Form.policy = this.fileList6.join(',');
        }else{
          this.$message.error('上传失败!');
        }
        if(this.fileList6.length === 4) {
          $('.listUpload6 .el-upload').hide()
        }
      },
      //其他10张
      handleListSuccess7(response, file) {
        // this.fileList7.push(URL.createObjectURL(file.raw))
        // this.step3Form.other = this.fileList7.join(',');
        if(response.code === 200) {
          this.fileList7.push(response.msg)
          this.step3Form.other = this.fileList7.join(',');
        }else{
          this.$message.error('上传失败!');
        }
        if(this.fileList7.length === 10) {
          $('.listUpload7 .el-upload').hide()
        }
      },
      // 文件列表移除文件时的钩子
      handleRemove(file, fileList) {
        // console.log(file, fileList);
        this.fileList.splice(this.fileList.findIndex(item => item === URL.createObjectURL(file.raw)), 1)
        // console.log(this.fileList)
        this.step3Form.businessaddress = this.fileList.join(',');
        $('.listUpload .el-upload').show()
      },
      handleRemove2(file, fileList) {
        // console.log(file, fileList);
        this.fileList2.splice(this.fileList2.findIndex(item => item === URL.createObjectURL(file.raw)), 1)
        // console.log(this.fileList)
        this.step3Form.credit = this.fileList2.join(',');
        $('.listUpload2 .el-upload').show()
      },
      handleRemove3(file, fileList) {
        // console.log(file, fileList);
        this.fileList3.splice(this.fileList3.findIndex(item => item === URL.createObjectURL(file.raw)), 1)
        // console.log(this.fileList)
        this.step3Form.tiket = this.fileList3.join(',');
        $('.listUpload3 .el-upload').show()
      },
      handleRemove4(file, fileList) {
        // console.log(file, fileList);
        this.fileList4.splice(this.fileList4.findIndex(item => item === URL.createObjectURL(file.raw)), 1)
        // console.log(this.fileList)
        this.step3Form.purchase = this.fileList4.join(',');
        $('.listUpload4 .el-upload').show()
      },
      handleRemove5(file, fileList) {
        // console.log(file, fileList);
        this.fileList5.splice(this.fileList5.findIndex(item => item === URL.createObjectURL(file.raw)), 1)
        // console.log(this.fileList)
        this.step3Form.personal = this.fileList5.join(',');
        $('.listUpload5 .el-upload').show()
      },
      handleRemove6(file, fileList) {
        // console.log(file, fileList);
        this.fileList6.splice(this.fileList6.findIndex(item => item === URL.createObjectURL(file.raw)), 1)
        // console.log(this.fileList)
        this.step3Form.policy = this.fileList6.join(',');
        $('.listUpload6 .el-upload').show()
      },
      handleRemove7(file, fileList) {
        // console.log(file, fileList);
        this.fileList7.splice(this.fileList7.findIndex(item => item === URL.createObjectURL(file.raw)), 1)
        // console.log(this.fileList)
        this.step3Form.other = this.fileList7.join(',');
        $('.listUpload7 .el-upload').show()
      },
    }
  }
</script>

<!-- Add "scoped" attribute to :limit CSS to this component only -->

<style lang="less" scoped>
  .step{
    width: 100%;
    padding: 14px 0;
    margin-top: 1px;
    background: #fff;
    .container{
      padding: 0 30px;
      box-sizing: border-box;
    }
    ul{
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    li{
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 14px;
      color: #707070;
      &.active{
        color: #FE9629;
        .img{
          background-color: #fff;
          border: 2px solid #FE9629;
        }
        .img1{
          background-image: url(../../assets/imgs/step1-active.png);
        }
        .img2{
          background-image: url(../../assets/imgs/step2-active.png);
        }
        .img3{
          background-image: url(../../assets/imgs/step3-active.png);
        }
      }
    }
    .arrow{
      width: 110px;
      height: 15px;
      background: url(../../assets/imgs/stepline_1.png) no-repeat;
      background-size: 110px 15px;
    }
    .arrowActive{
      background: url(../../assets/imgs/stepline_1_r.png) no-repeat;
    }
    .img{
      display: block;
      width: 30px;
      height: 30px;
      margin-bottom: 4px;
      background-color: #F8F8F8;
      padding: 14px;
      border-radius: 50%;
      border: 2px solid #707070;
      background-size: 30px 30px;
      background-repeat: no-repeat;
      background-position: center;
    }
    .img1{
      background-image: url(../../assets/imgs/step1.png);
    }
    .img2{
      background-image: url(../../assets/imgs/step2.png);
    }
    .img3{
      background-image: url(../../assets/imgs/step3.png);
    }
  }
  .main{
    width: 100%;
    min-height: 500px;
    margin-top: 6px;
    background: #fff;
    .container{
      display: flex;
      align-items: center;
    }
  }
  .step1{
    width: 500px;
    margin: 0 auto;
    .title{
      padding-top: 50px;
      font-size: 24px;
      color: #000;
      text-align: center;
    }
    .step1Form{
      margin-top: 80px;
    }
    .xieyi{
      a{
        font-size: 14px;
        color: #ff9c00;
      }
    }
  }
  .step2{
    margin: 0 auto;
    padding-top: 50px;
    padding-bottom: 30px;
    .el-input,
    .el-select{
      width: 400px;
    }
    .wrap{
      display: flex;
      align-items: center;
      .el-input,
      .el-select{
        width: 170px;
      }
    }
  }
  .step3{
    margin: 0 auto;
    padding-top: 50px;
    padding-bottom: 30px;
    .avatar-uploader{
      width:280px;
      height: 180px;
      border: 1px dashed #d9d9d9;
      border-radius: 6px;
      cursor: pointer;
      position: relative;
      overflow: hidden;
    }
    .avatar-uploader:hover {
      border-color: #409EFF;
    }
    .avatar-uploader-icon,
    .el-upload--picture-card{
      font-size: 28px;
      color: #8c939d;
      width:280px;
      height: 180px;
      line-height: 160px;
      text-align: center;
    }
    .avatar {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 10;
      display: block;
      width: 280px;
      height: 190px;
    }
    .el-upload__tip {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 280px;
      margin-top: 0;
      padding: 0 10px 10px;;
      box-sizing: border-box;
      line-height: 24px;
    }
    .wrap{
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      .avatar-uploader{
        margin-bottom: 10px;
        &:nth-of-type(n+2){
          margin-left: 10px;
        }
        &:nth-of-type(4),
        &:nth-of-type(7),
        &:nth-of-type(10){
          margin-left: 0;
        }
      }
    }
  }
</style>

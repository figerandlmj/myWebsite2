import request from '@/assets/js/request'

const baseUrl = '/customer'

// 是否注册
export function isregister(params) {
  return request({
    url: baseUrl + '/application/isregister',
    method: 'post',
    params: params
  })
}

// 获取验证码
export function getcode(params) {
  return request({
    url: baseUrl + '/application/getcode',
    method: 'post',
    params: params
  })
}

// 注册
export function register(params) {
  return request({
    url: baseUrl + '/application/register',
    method: 'post',
    params: params
  })
}

// 是否登录
export function islogin(params) {
  return request({
    url: baseUrl + '/application/islogin',
    method: 'post',
    params: params
  })
}

// 登录
export function login(params) {
  return request({
    url: baseUrl + '/application/login',
    method: 'post',
    params: params
  })
}

// 忘记密码
export function resetpwd(params) {
  return request({
    url: baseUrl + '/application/resetpwd',
    method: 'post',
    params: params
  })
}

// 修改密码
export function changepwd(params) {
  return request({
    url: baseUrl + '/application/changepwd',
    method: 'post',
    params: params
  })
}

// 个人信息
export function userInfo(params) {
  return request({
    url: baseUrl + '/application/userInfo',
    method: 'post',
    params: params
  })
}

// 上传图片
export function imgUpload(params) {
  // return request({
  //   url: baseUrl + '/fileupload/oss',
  //   method: 'post',
  //   params: params
  // })
  return baseUrl + '/fileupload/oss'
}

// 申请
export function apply(params) {
  return request({
    url: baseUrl + '/apply/apply',
    method: 'post',
    params: params
  })
}

// 个人中心，借款列表
export function getApply(params) {
  return request({
    url: baseUrl + '/apply/getApply',
    method: 'post',
    params: params
  })
}

// 借款列表各状态数据条数
export function getApplyStatus(params) {
  return request({
    url: baseUrl + '/apply/getApplyStatus',
    method: 'post',
    params: params
  })
}

// 退出登录
export function exitLogin(params) {
  return request({
    url: baseUrl + '/application/loginout',
    method: 'post',
    params: params
  })
}

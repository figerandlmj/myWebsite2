import Vue from 'vue'
import Router from 'vue-router'
// 首页、注册登录、我的额度、关于我们、信息公告
import index from '@/views/index'
import login from '@/views/login'
// import myQuota from '@/views/myQuota'
import about from '@/views/about'
import news from '@/views/news'
//  我的账户管理
import user from '@/views/user'
// import account from '@/views/user/account'
// import asset from '@/views/user/asset'
import credit from '@/views/user/credit'
// import loans from '@/views/user/loans'
// import guarantees from '@/views/user/guarantees'
// 修改登录密码
import setPassword from '@/views/user/setPassword'
// // 用户协议、风险提示
// import userContract from '@/views/userContract'
// import riskTips from '@/views/riskTips'
// 申请授信
import apply from '@/views/apply'
// import authority from '@/views/authority'

Vue.use(Router)

export default new Router({
  routes: [
    // 首页
    {
      path: '/',
      name: 'index',
      component: index
    },
    // 注册、登录、找回密码
    {
      path: '/login/:redirect?/:isRegister?',// ?表示可有可无
      name: 'login',
      component: login
    },
    // // 我的额度
    // {
    //   path: '/quota',
    //   name: 'myQuota',
    //   component: myQuota
    // },
    // 关于我们
    {
      path: '/about',
      name: 'about',
      component: about
    },
    // 信息公告
    {
      path: '/news',
      name: 'news',
      component: news
    },
    // 我的账户
    {
      path: '/user',
      name: 'user',
      component: user,
      redirect: {
        path: '/user/account'
      },
      children: [
        // // 我的账户
        // {
        //   path: 'account',
        //   name: 'account',
        //   component: account
        // },
        // // 资金管理
        // {
        //   path: 'asset',
        //   name: 'asset',
        //   component: asset
        // },
        // 授信申请记录
        {
          path: 'credit',
          name: 'credit',
          component: credit
        },
        // 修改登录密码
        {
          path: 'setPassword',
          name: 'setPassword',
          component: setPassword
        },
        // // 借款记录
        // {
        //   path: 'loans',
        //   name: 'loans',
        //   component: loans
        // },
        // // 担保记录
        // {
        //   path: 'guarantees',
        //   name: 'guarantees',
        //   component: guarantees
        // }
      ]
    },
    // // 用户协议
    // {
    //   path: '/user/user-contract',
    //   name: 'userContract',
    //   component: userContract
    // },
    // // 风险提示
    // {
    //   path: '/user/risk-tips',
    //   name: 'riskTips',
    //   component: riskTips
    // },
    // 申请授信
    // /credit/apply/:productType
    // /credit/apply/:productType/member/:memberId
    {
      // path: '/credit/apply?productType=DST_LOANS',
      path: '/credit/apply/:productType',
      name: 'apply',
      component: apply
    },
    // // 实名认证
    // {
    //   path: '/auth/authority',
    //   name: 'authority',
    //   component: authority
    // },
    // 默认路由匹配
    {
      path: '*',
      // component: index
      redirect: {
        path: '/'
      }
      // redirect(to) {
      //   if(to.path == '/quota') {
      //     return {name: 'login', query: {id: 123}}
      //   }else {
      //     return '/'
      //   }
      // }
    },
  ],
  mode: 'hash'
})

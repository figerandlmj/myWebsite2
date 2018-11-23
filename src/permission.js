import router from './router'

// const whiteList = ['/', '/login', '/about', '/news', '/user/credit', '/user/setPassword', '/credit/apply'] // 不重定向白名单
const whiteList = ['/', '/login', '/about', '/news'] // 不重定向白名单

router.beforeEach((to, from, next) => {
  if (localStorage.getItem('userMobile')) {//已登录
    if (to.path === '/login') {
      next({ path: '/' })
    } else {
      next()
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next(`/login?redirect=${to.path}`) // 否则全部重定向到登录页
    }
  }
})

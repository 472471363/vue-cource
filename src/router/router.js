import Home from '@/views/Home.vue'
// 主要配置路由列表
export default [
  {
    // 有name 属性的是命名路由
    path: '/',
    name: 'home',
    // 别名也需要加"/"
    alias: '/home_page',
    component: Home,
    // 函数模式路由传参，这是第三种传参模式,下面这种事es6的写法 意思事return 一个对象 等同于return {}
    // 此函数的参数router 表示当前路由对象
    props: router => ({
      food: router.query.food
    })
  },
  {
    path: '/about',
    name: 'about',
    alias: '/about_page',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue'),
    // 普通路由传参这是第二种类型——对象模式
    props: {
      food: 'banana'
    }
  },
  {
    // 动态路由参数
    path: '/argue/:name',
    name: 'argue',
    // 布尔模式传参，主要是用在有动态路由参数当中
    props: true,
    component: () => import('@/views/argue.vue')
  },
  {
    // 嵌套路由
    path: '/parent',
    name: 'parent',
    component: () => import('@/views/parent.vue'),
    // children是一个数组
    children: [
      {
        // 子组件的path不需要'/'
        path: 'child',
        component: () => import('@/views/child.vue')
      }
    ]
  },
  // 命名视图的配合使用开始
  {
    path: '/named_view',
    // components 是一个对象
    components: {
      // default 是指向router-view没有name属性的视图
      default: () => import('@/views/child.vue'),
      email: () => import('@/views/email.vue'),
      tel: () => import('@/views/tel.vue')
    }
  },
  // 命名视图的配合使用结束

  // 重定向开始
  {
    path: '/main',
    // redirect: '/'
    // 方式2  通过命名路由 开始
    // redirect: {
    //   name: 'about'
    // }
    // 方式2  通过命名路由 结束

    // 方式3 传入函数 开始
    redirect: to => {
      return '/about'
      // 或者返回一个对象
      // return {
      //   name: 'home'
      // }
    }
    // 方式3 传入函数 结束
  },
  // 重定向结束
  // 找不到路由规则直接跳转到统一页面，这个要放在最后，因为路由匹配规则是从上往下的匹配规则   开始
  {
    path: '*',
    component: () => import('@/views/404_page.vue')
  }
  // 找不到路由规则直接跳转到统一页面   结束
]

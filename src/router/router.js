import Home from '@/views/Home.vue'
// 主要配置路由列表
export default [
  {
    // 有name 属性的是命名路由
    path: '/',
    name: 'home',
    // 别名也需要加"/"
    alias: '/home_page',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    alias: '/about_page',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
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
  }
  // 重定向结束
]

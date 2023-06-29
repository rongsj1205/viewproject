import Vue from 'vue'     //1、导入vue和vue-router插件
import Router from 'vue-router'
// 导入刚才编写的组件
import AppIndex from '@/components/home/AppIndex'  //@表示项目根目录  2、引入组件
import Login from '@/components/Login'
import Modal from '@/components/home/Modal'
import Modal2 from '@/components/Modal2'
Vue.use(Router)  //3、Vue中安装vue-router插件，以便全局可以使用这个插件，等同于install

export default new Router({   //4、在路由配置文件中创建路由实例，并导出路由实例
  routes: [
    // 下面都是固定的写法
    {
      path: '/login',    //2、将路由映射到组件中
      name: 'Login',  //命名路由
      component: Login
    },
    {
      path: '/index',
      name: 'AppIndex',
      component: AppIndex
    },
    {
      path: '/modal',
      name: 'Modal',
      component: Modal
    },
    {
      path: '/modal2',
      name: 'Modal2',
      component: Modal2
    }
  ]
})


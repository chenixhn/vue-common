import Vue from 'vue';
import Router from 'vue-router';
import layouts from '@/layouts/layouts';

/**
 * 模块导入
 * @param path
 * @returns {function()}
 * @private
 */
function _import(_module,_path) {
    return () => import(`@/components/pages/${_module}/${_path}`);
}

Vue.use(Router);

const router = new Router({
    routes: [
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/login',
            name: 'login',
            meta: {title: 'documentation1', icon: 'documentation', noCache: true},
            component: _import('login','login')
        },
        {
            path: '/home',
            name: 'layouts',
            redirect: '/page1',
            components: {
                default: layouts
            },
            children: [
                {
                    path: '/page1',
                    name: 'page1',
                    component: _import('page1','page1')
                },
                {
                    path: '/page2',
                    name: 'page2',
                    component: _import('page2','page2')
                },
                {
                    path: '/page3',
                    name: 'page3',
                    component: _import('page3','page3')
                }
            ]
        }
    ]
});
// 路由钩子
router.beforeEach(({path},from,next)=>{

  // let isLogin = sessionStorage.getItem('isLogin');
  // console.log(isLogin);
  // if(isLogin != 'true' && path !== '/login' && path !== '/register' && path !== '/resetPwd'){
  //   return next({path:'/index'})//配置跳转页面
  // }

  next();

})
export default router;
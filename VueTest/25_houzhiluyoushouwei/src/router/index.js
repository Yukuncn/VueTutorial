//该文件专门用于创建整个应用的路由器
import VueRouter from "vue-router";
//引入组件
import About from '../components/pages/About'
import Home  from '../components/pages/Home'
import News from '../components/pages/News'
import Message from '../components/pages/Message'
import Detail from '../components/pages/Detail'
//创建并且创建一个路由器
const router= new VueRouter({
routes:[
    {
        name:'guanyu',
        path:'/about',
        component:About,
        meta:{title:'关于'}
    },
    {
        name:'zhuye',
        path:'/home',
        component:Home,
        meta:{title:'主页'},
        children:[//二级路由,且不用加/，因为底层已经加好
           {   name:'xinwne',
               path:'news',
               component:News,
               meta:{isAuth:true,title:'新闻'}//是否需要授权,meta里面可以放一些自定义的标志
           },
           {
            name:'xiaoxi',
            path:'message',
            component:Message,
            meta:{isAuth:true,title:'消息'},//是否需要授权
            children:[
                {   name:'xiangqing',
                    path:'detail', 
                    component:Detail,
                    meta:{isAuth:true,title:'详情'},//是否需要授权
                   props($route){
                       return {id:$route.query.id,title:$route.query.title}
                   }
                }
            ]
        },

        ]
    },
]
})
//全局前置路由守卫--初始化的时候被调用、每次路由切换之前调用
router.beforeEach((to,from,next)=>{
   if(to.meta.isAuth){//判断是否需要授权
    if(localStorage.getItem('school')==='sdu'){
      next()
   }else{
         alert('学校名不对，无权限查看！')
   }
}else{
    next()
}
})
//全局后置路由守卫--初始化的时候被调用、每次路由切换之后调用
router.afterEach((to,from)=>{
    document.title=to.meta.title||'山大系统'
})
export default router

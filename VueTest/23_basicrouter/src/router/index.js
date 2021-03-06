//该文件专门用于创建整个应用的路由器
import VueRouter from "vue-router";
//引入组件
import About from '../components/pages/About'
import Home  from '../components/pages/Home'
import News from '../components/pages/News'
import Message from '../components/pages/Message'
import Detail from '../components/pages/Detail'
//创建并且创建一个路由器
export default new VueRouter({
routes:[
    {
        name:'guanyu',
        path:'/about',
        component:About
    },
    {
        path:'/home',
        component:Home,
        children:[//二级路由,且不用加/，因为底层已经加好
           {
               path:'news',
               component:News
           },
           {
            name:'xiaoxi',
            path:'message',
            component:Message,
            children:[
                {   name:'xiangqing',
                    path:'detail',
                    component:Detail
                }
            ]
        },

        ]
    },
]
})

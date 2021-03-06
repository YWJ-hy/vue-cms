import VueRouter from 'vue-router';

import homeContainer from './components/tabbar/homeContainer.vue';
import shopcartContainer from './components/tabbar/shopcartContainer.vue';
import memberContainer from './components/tabbar/memberContainer.vue';
import searchContainer from './components/tabbar/searchContainer.vue';
import newsList from './components/news/newsList.vue';
import newsinfo from './components/news/newsinfo.vue';

// 3. 创建路由对象
var router = new VueRouter({
  routes: [
    {path:'/',redirect:'/home'},
    {path:'/home',component:homeContainer},
    {path:'/shopcart',component:shopcartContainer},
    {path:'/member',component:memberContainer},
    {path:'/search',component:searchContainer},
    {path:'/home/newslist',component:newsList},
    {path:'/home/newsinfo/:id',component:newsinfo}
  ],
  linkActiveClass:'mui-active'
});

// 把路由对象暴露出去
export default router;
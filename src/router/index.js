import Vue from 'vue';
import VueRouter from 'vue-router';
import Pianhaoshezhi2 from '../pages/pianhaoshezhi/pianhaoshezhi2/pianhaoshezhi2.vue';
import pianhaoshezhi from "@/pages/pianhaoshezhi/pianhaoshezhi";
import Kechengshaixuan from '../pages/MyHome/kechengshaixuan/kechengshaixuan.vue';
import Kebiaoshengcheng from '../pages/MyHome/kebiaoshengcheng/kebiaoshengcheng.vue';
import Denglu_shurumima from '../pages/denglu_shurumima/denglu_shurumima.vue';

import Pianhaoshezhi1 from '../pages/pianhaoshezhi/pianhaoshezhi1/pianhaoshezhi1.vue';
import Yixuankecheng from '../pages/MyHome/yixuankecheng/yixuankecheng.vue';

import Shoudongtianjiafangan2 from '../pages/MyHome/shoudongtianjiafangan2/shoudongtianjia.vue';
import Shoudongtianjiafianjiajiaoxueban from '../pages/MyHome/shoudongtianjiafianjiajiaoxueban/shoudongtianjiafianjiajiaoxueban.vue';
import Shengchengshibai from "@/pages/MyHome/shengchengshibai/shengchengshibai";

import MyHome from "@/pages/MyHome/MyHome";

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'denglu_shurumima',
    component: Denglu_shurumima,
  },
  {
    path: '/MyHome',
    name: 'MyHome',
    component: MyHome,
    children:[
      {
        path: '/kechengshaixuan',
        name: 'kechengshaixuan',
        component: Kechengshaixuan,
      },
      {
        path: '/kebiaoshengcheng',
        name: 'kebiaoshengcheng',
        component: Kebiaoshengcheng,
      },
      {
        path: '/pianhaoshezhi',
        name: 'pianhaoshezhi',
        component: pianhaoshezhi,
        children:[
          {
            path: '/',
            name: 'pianhaoshezhi1',
            component: Pianhaoshezhi1,
          },
          {
            path: '/pianhaoshezhi2',
            name: 'pianhaoshezhi2',
            component: Pianhaoshezhi2,
          },
          {
            path: '/pianhaoshezhi1',
            name: 'pianhaoshezhi1',
            component: Pianhaoshezhi1,
          },
        ]
      },
      {
        path: '/yixuankecheng',
        name: 'yixuankecheng',
        component: Yixuankecheng,
      },
      {
        path: '/shoudongtianjiafangan2',
        name: 'shoudongtianjiafangan2',
        component: Shoudongtianjiafangan2,
      },
      {
        path: '/shoudongtianjiafianjiajiaoxueban',
        name: 'shoudongtianjiafianjiajiaoxueban',
        component: Shoudongtianjiafianjiajiaoxueban,
      },
      {
        path: '/shengchengshibai',
        name: 'shengchengshibai',
        component: Shengchengshibai,
      },
    ]
  },




];

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
});

export default router;

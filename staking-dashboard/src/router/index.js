import VueRouter from 'vue-router';
import Vue from 'vue';

Vue.use(VueRouter);
const routes = [
     {
         path: "/",
         name: "Home",
         component: () => import('@/views/Home'),
         props: true
     },
     {
         path: '/stake',
         name: 'Stake',
         component: () => import('@/layouts/DashboardLayout.vue'),
         props: true,
         children: [
             {
                 path: '/stake-home',
                 name: 'stake-home',
                 component: () => import('@/views/StakeHome.vue'),
                 props: true
             },
             {
                 path: '/stake-manage',
                 name: 'stake-manage',
                 component: () => import('@/views/StakeManage.vue')
             }
         ]
     }
];

const router = new VueRouter({
    mode: "history",
    base: "/mytv-dashboard/",
    routes
});

export default router;



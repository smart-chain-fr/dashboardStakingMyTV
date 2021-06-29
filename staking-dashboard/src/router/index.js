import VueRouter from 'vue-router'
import HelloWorld from '../src/layout/HelloWorld.vue'

Vue.use(Router);

export default new Router({
    mode: "history",
    hashbang: false,
    abstract: true,
    hash: false,
    base: "/mytv-dashboard/",
    linkExactActiveClass: "active",
    root: "/mytv-dashboard/",
    routes = [

        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/helloworld',
            name: 'HelloWorld',
            component: HelloWorld
        },
        { path: "*", redirect: "/" }
    ]
})



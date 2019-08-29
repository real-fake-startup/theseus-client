import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Todos from './views/Todos.vue'
import Login from "./views/Login.vue";

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
        path: '/',
        name: 'home',
        component: Home
    }, {
        path: '/todos',
        name: 'todos',
        component: Todos,
        meta: {
            requiresAuth: true,
            layout: 'dashboard-layout'
        }
    }, {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ './views/About.vue')
    }, {
        path: "/login",
        name: "login",
        component: Login,
        meta: {
            requiresAuth: false
        }
    }]
});

router.beforeEach((to, from, next) => {
    if(to.matched.some(record => record.meta.requiresAuth)) {
        if (localStorage.getItem('feathers-jwt') == null) {
            next({
                path: '/login',
                params: { nextUrl: to.fullPath }
            })
        } else {
            let user = JSON.parse(localStorage.getItem('user'))
            if(to.matched.some(record => record.meta.is_admin)) {
                if(user.is_admin == 1){
                    next()
                }
                else{
                    next({ name: 'userboard'})
                }
            }else {
                next()
            }
        }
    } else if(to.matched.some(record => record.meta.guest)) {
        if(localStorage.getItem('feathers-jwt') == null){
            next()
        }
        else{
            next({ name: 'userboard'})
        }
    }else {
        next() 
    }
});

export default router
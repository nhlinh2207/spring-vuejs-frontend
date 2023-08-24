import { createRouter, createWebHistory } from "vue-router"

const routes = [
    {
        path: "/spring-vuejs-0.1",
        name: "home",
        meta: {
            title: "Trang chủ",
        },
        component: () => import('@/pages/HelloWorld')
    },
    {
        path: "/spring-vuejs-0.1/login",
        name: "login",
        meta: {
            title: "Đăng nhập",
        },
        component: () => import('@/pages/LoginPage')
    }
]

const router = createRouter({
    history : createWebHistory(),
    base: process.env.BASE_URL,
    routes: routes
});

router.beforeEach((to, from, next) => {
    const requireAuth = to.matched.some(
        (childRoute) => childRoute.meta.requireAuth
    );
    if(requireAuth){
        next({name: "login"})
    }else{
        next();
    }
})

router.afterEach((to) => {
    document.title = to.meta.title ?? "App";
});

export default router;